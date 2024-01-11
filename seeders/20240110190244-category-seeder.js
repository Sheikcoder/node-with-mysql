'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories' , [
      {
        name : "react JS",
        
      },
      {
        name : "Node JS",
       
      },
      {
        name : "Vue JS"
      },
      {
        name : "next JS"
      },
      {
        name : "elsiya JS"
      },
      {
        name : "angular JS"
      },
      {
        name : "React Native"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories' , {} , null);
  }
};
