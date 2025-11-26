const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

const express = require('express');
const uuidV4 = require('uuid').v4;

// Task list (in-memory... 😶‍🌫️)
const messages = [];

function log(logText) {
    const timestamp = new Date().toISOString();
    console.log(`ℹ️ \x1b[36m ${timestamp}\x1b[0m - ${logText}`)
}

// Init Express Server
const app = express();

// Add JSON support
app.use(express.json());
// Handle CORS (open bar... 🍻)
app.use(cors())

/**
 * Structure d'un message :
 * - id : l'ID d'une tâche, généré par l'API à la création. C'est un UUID v4
 * - author : l'auteur du message. OBLIGATOIRE
 * - text : le contenu du message. OBLIGATOIRE
 * 
 * Exemple :
 * {
 *   "id": "7fc43ef2-5ba9-4694-95de-188579f9ca45",
 *   "author": "Ronan",
 *   "text": "Hello World!"
 * }
 */

// Ping endpoint
app.get('/ping', (req, res) => {
    log('Route GET /ping called');
    res.json({
        ping: 'PONG',
        timestamp: new Date().toISOString()
    });
});

// Get all tasks
app.get('/messages', (req, res) => {
    log('Route GET /messages called');

    res.status(200);
    res.json(messages);
});

// Add a task
app.post('/messages', (req, res) => {
    const body = req.body;
    log(`Route POST /messages called with body ${JSON.stringify(body)}`);

    if (!body.author) {
        res.status(400);
        res.json({
            reason: "Missing 'author' field"
        });
        return;
    }

    if (!body.text) {
        res.status(400);
        res.json({
            reason: "Missing 'text' field"
        });
        return;
    }

    const body2 = {
        id: uuidV4(),
        author: body.author,
        text: body.text,
    };

    messages.push(body2);

    res.status(201);
    res.json(body2);
});

// Reset all tasks (need a password... 😎)
app.delete('/messages', (req, res) => {
    log('Route DELETE /messages called');

    // Check the password
    const password = req.query.pass
    if (!password || password !== process.env.DELETE_SECRET) {
        res.status(404);
        res.send();
        return;
    }

    // Delete all tasks
    messages.splice(0, messages.length);
    res.status(200);
    res.json({
        "message": "All messages deleted"
    })
})

// Default 404
app.use((req, res) => {
    res.status(404);
    res.send();
})

// Launch Express server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`))
