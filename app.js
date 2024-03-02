const express = require('express');
const { json } = require('body-parser');
const { createServer } = require('http');
const socketIo = require('socket.io');
const { post } = require('axios');
const https = require('https');

const app = express();
const server = createServer(app);
const io = socketIo(server);

let counter = 0;

app.use(json());
app.use(express.static('public'));

app.post('/generate-guide', async (req, res) => {
    try {

        let token = req.headers.authorization.split(' ')[1];

        const response = await post('https://api-test.envia.com/ship/generate/', req.body, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });

        if (response.status === 200) {
            counter++;
            io.emit('counterUpdate', counter);
            res.json({ message: 'Guía generada exitosamente.' });
        } else {
            res.status(500).json({ message: 'Error al generar la guía.' });
        }
    } catch (error) {
        console.error('Error al generar la guía:', error);
        res.status(500).send('Error al generar la guía');
    }
});

io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.emit('counterUpdate', counter);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});