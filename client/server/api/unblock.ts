import prisma from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Débloquer les messages futurs
    await prisma.message.updateMany({
        where: {
            senderId: body.blockedUserId,
            receiverId: body.userId,
        },
        data: {
            isBlocked: false,
        },
    });

    return { message: 'Utilisateur débloqué avec succès.' };
});