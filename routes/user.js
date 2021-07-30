import express from 'express';
const router = express.Router();

// importar el modelo nota
import User from '../models/user';

// Agregar una nota
router.post('/new', async(req, res) => {
  const body = req.body;

  try {
    const userDB = await User.create(body);
    res.status(200).json(userDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

router.get('/:account', async(req, res) => {
  const _account = req.params.account;

  try {
    const userDB = await User.findOne({account : _account});
    res.json(userDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

router.delete('/:account', async(req, res) => {
  const _account = req.params.account;

  try {
    const userDB = await User.findOneAndDelete({account : _account});
    if(!userDb){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(userDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

router.put('/:account', async(req, res) => {
  const _account = req.params.account;
  const body = req.body;

  try {
    const userDB = await User.findOneAndUpdate({
      account:_account},
      body,
      {new: true});
    res.json(userDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;