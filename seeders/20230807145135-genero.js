'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genero', [
      {
        id_genero: 1,
        nombre: "Ficción",
        descripcion: "Simula, inventa o crea una realidad distinta de la real en que vivimos",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genero', null, {});
  }
};
