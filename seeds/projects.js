
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          projectName: 'Test project 1',
          projectType: 'Tech',
          description: 'Small tech business test project 1',
          fundingAmount: 5000.00,
          user_id: 1,
        },

        {
          id: 2, 
          projectName: 'Test project 2',
          projectType: 'Social',
          description: 'Small social business test project 2',
          fundingAmount: 7500.00,
          user_id: 1,
        },

        {
          id: 3, 
          projectName: 'Test project 3',
          projectType: 'Tech',
          description: 'Small tech business test project 3',
          fundingAmount: 10000.00,
          user_id: 2,
        },
        
      ]);
    });
};
