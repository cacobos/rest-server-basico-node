const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {nombre, apikey} = req.query;
    res.json({
        msg:'get API - controlador'
    });
  }

 const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg:'put API',
        id
    });
  }

 const usuariosPost = (req, res) => {
     const {nombre, edad} = req.body;
    res.status(201).json({
        msg:'post API',
        nombre,
        edad
    });
  }

  const usuariosDelete = (req, res) => {
    res.json({
        msg:'delete API'
    });
}

  module.exports = {
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete
  }