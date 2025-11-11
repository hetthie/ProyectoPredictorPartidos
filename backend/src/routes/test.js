const express = require('express');
const router = express.Router();

// Ruta de prueba simple
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: '⚽ ¡Conexión exitosa con el backend!',
    timestamp: new Date().toISOString(),
    status: 'Backend funcionando correctamente'
  });
});

module.exports = router;