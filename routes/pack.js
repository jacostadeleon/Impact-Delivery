import express from 'express';
const router = express.Router();

// importar el modelo nota
import Pack from '../models/pack';

// Agregar una nota
router.post('/new', async(req, res) => {
  const body = req.body;  
  try {
    const packDB = await Pack.create(body);
    res.status(200).json(packDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;