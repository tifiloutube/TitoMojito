import prisma from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    if (event.req.method === 'POST') {
        const body = await readBody(event);

        // Validation des données envoyées
        if (!body.name || !body.photoUrl) {
            throw createError({
                statusCode: 400,
                message: 'Nom et URL de photo sont requis.',
            });
        }

        // Création de l'utilisateur
        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                photoUrl: body.photoUrl,
                isBanned: false,
                isOnline: body.isOnline ?? true,
            },
        });

        return newUser;
    }

    // Gérer les requêtes GET (pour lister les utilisateurs connectés)
    const users = await prisma.user.findMany({
        where: {
            isBanned: false,
            isOnline: true,
        },
        select: {
            id: true,
            name: true,
            photoUrl: true,
        },
    });

    return users;
});