import { WebSocketServer } from 'ws';

let wss: WebSocketServer | null = null;

export default defineEventHandler((event) => {
    if (!wss) {
        wss = new WebSocketServer({ noServer: true });

        // Gérer les connexions entrantes
        wss.on('connection', (ws) => {
            console.log('Nouvel utilisateur connecté');

            ws.on('message', (data) => {
                const message = JSON.parse(data);

                // Diffuser à tous les clients connectés
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(message));
                    }
                });
            });

            ws.on('close', () => {
                console.log('Utilisateur déconnecté');
            });
        });
    }

    event.node.res.socket?.on('upgrade', (req, socket, head) => {
        if (req.url === '/api/ws') {
            wss?.handleUpgrade(req, socket, head, (ws) => {
                wss?.emit('connection', ws, req);
            });
        }
    });

    return { message: 'WebSocket server initialized' };
});