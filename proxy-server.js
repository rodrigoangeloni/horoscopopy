const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para todos los orígenes
app.use(cors());

// Proxy para la API de horóscopos
app.use('/api/horoscope', createProxyMiddleware({
    target: 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily',
    changeOrigin: true,
    pathRewrite: {
        '^/api/horoscope': ''
    },
    onProxyReq: (proxyReq, req, res) => {
        // Agregar headers necesarios
        proxyReq.setHeader('Origin', 'https://horoscope-app-api.vercel.app');
    }
}));

// Servir archivos estáticos
app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});