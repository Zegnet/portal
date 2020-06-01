const { Model, DataTypes } = require('sequelize');

class Dados extends Model {

    static init(sequelize){
        super.init({
            mandante: DataTypes.STRING,
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
            num_ordem: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

}

module.exports = Dados;