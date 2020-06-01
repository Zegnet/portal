const Dados = require('../models/Dados');

module.exports = {
    async store(req, res){
        try {
            const { mandante, usuario, senha, num_ordem } = req.body;
            const dado = await Dados.create({ mandante, usuario, senha, num_ordem }); 
            return res.status(201).json(dado);
        } catch (error) {
            return res.status(401).json("Erro ao cadastrar os dados");  
        }
             
    }
};