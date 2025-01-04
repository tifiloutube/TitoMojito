import prisma from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Bloquer les messages futurs
    await prisma.message.updateMany({
        where: {
            senderId: body.blockedUserId,
            receiverId: body.userId,
        },
        data: {
            isBlocked: true,
        },
    });

    return { message: 'Utilisateur bloqué avec succès.' };
});