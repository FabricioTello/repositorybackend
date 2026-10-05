require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    console.log('Bienvenidos al curso')

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Despliegue Node.js</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }

                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                }

                h1 {
                    color: #333;
                }

                p {
                    color: #666;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1>Bienvenidos al curso</h1>
                <p>Aplicación Node.js desplegada correctamente.</p>
                <p>Laboratorio N° 8</p>
            </div>
        </body>
        </html>
    `)
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})