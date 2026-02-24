require('dotenv').config()
const app = require('./src/app')
const https = require('https')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

    // Keep Render free tier awake by pinging self every 14 minutes
    const BACKEND_URL = process.env.RENDER_EXTERNAL_URL
    if (BACKEND_URL) {
        setInterval(() => {
            https.get(BACKEND_URL, (res) => {
                console.log(`Self-ping status: ${res.statusCode}`)
            }).on('error', (err) => {
                console.error('Self-ping error:', err.message)
            })
        }, 14 * 60 * 1000) // every 14 minutes
    }
})