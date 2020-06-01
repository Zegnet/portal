'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dados', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
      }, 
      mandante:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      num_ordem:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      num_entrega: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      num_documento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      num_pedido_vivocorp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      num_pedido_vivocorp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data_execucao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hora_execucao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status_execucao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mensagem_erro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      vm_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dados');
  }
};
