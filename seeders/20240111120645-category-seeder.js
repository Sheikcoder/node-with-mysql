'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();

    return queryInterface.bulkInsert('categories', [
      {
        name: "react JS",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: "Node JS",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: "Vue JS",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: "next JS",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: "elsiya JS",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: "angular JS",
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: "React Native",
        createdAt: currentDate,
        updatedAt: currentDate
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', {}, null);
  }
};
