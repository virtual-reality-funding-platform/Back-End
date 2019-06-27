
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          projectName: 'Drone Fanatics',
          projectType: 'Robotics',
          description: 'We would like to expand our photography drone creation and repair hobby into a business.',
          fundingAmount: 5000.00,
          user_id: 1,
        },

        {
          id: 2, 
          projectName: "Jayla's Trinkets",
          projectType: '3D Printing',
          description: 'I currently run my business with one 3D printer. I would like to expand to four printers so I can increase my productivity and sales.',
          fundingAmount: 15000.00,
          user_id: 2,
        },

        {
          id: 3, 
          projectName: 'Genexis Lab',
          projectType: 'Biotechnology',
          description: 'We currently have a small lab where we are working on creating drought resistant crops. We are in need of some new equipment and supplies.',
          fundingAmount: 10000.00,
          user_id: 3,
        },
        
      ]);
    });
};
