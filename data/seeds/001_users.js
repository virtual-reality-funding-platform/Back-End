const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'admin',
          password: bcrypt.hashSync('password', 10),
          name: 'Leonel, Gabriel, and Mateo',
          about: 'We are a team of drone hobbyists.',
        },
        {
          id: 2, 
          username: 'admin2',
          password: bcrypt.hashSync('password', 10),
          name: 'Jayla',
          about: 'I created a small 3D printing business.',
        },
        {
          id: 3, 
          username: 'admin3',
          password: bcrypt.hashSync('password', 10),
          name: 'Aaliyah and Trinity',
          about: 'We are working to create drought resistance crops.',
        },
       
      ]);
    });
};
