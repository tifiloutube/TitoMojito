import prisma from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    if (event.req.method === 'POST') {
        const body = await readBody(event);

        // Vérifie si l'expéditeur a été bloqué par le destinataire
        const hasBeenBlocked = await prisma.message.findFirst({
            where: {
                senderId: body.receiverId, // Le destinataire a bloqué l'expéditeur
                receiverId: body.senderId,
                isBlocked: true,
            },
        });

        if (hasBeenBlocked) {
            throw createError({
                statusCode: 403,
                message: 'Vous avez été bloqué par cet utilisateur.',
            });
        }

        // Vérifie si l'expéditeur a bloqué le destinataire
        const isBlocked = await prisma.message.findFirst({
            where: {
                senderId: body.senderId, // L'expéditeur a bloqué le destinataire
                receiverId: body.receiverId,
                isBlocked: true,
            },
        });

        if (isBlocked) {
            throw createError({
                statusCode: 403,
                message: 'Vous ne pouvez pas envoyer de message à cet utilisateur.',
            });
        }

        // Crée le message si aucune des vérifications n'échoue
        const newMessage = await prisma.message.create({
            data: {
                content: body.content,
                senderId: body.senderId,
                receiverId: body.receiverId,
            },
        });

        return newMessage;
    }

    throw createError({
        statusCode: 405,
        message: 'Méthode non autorisée.',
    });
});