'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "tarea 1",
          description: "tarea de ejemplo 1",
          UserId: 1,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "limpieza",
          description: "se debe limpiar todo a fondo",
          UserId: 1,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ordenar",
          description: "se debe ordenar todo",
          UserId: 3,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sacar a pasear al perro",
          description: "",
          UserId: 4,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "limpieza",
          description: "se debe limpiar todo a fondo",
          UserId: 1,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cocinar",
          description: "milanesa con pure",
          UserId: 5,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "realizar los test",
          description: "se debe realizar al menos un test para cada endpoint",
          UserId: 1,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "maquetacion",
          description: "se debe crear la maqueta del proyecto",
          UserId: 4,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "maquetacion",
          description: "integrar la maqueta al proyecto",
          UserId: 3,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tarea 2",
          description: "tarea de ejemplo 2",
          UserId: 2,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}  
    );
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
