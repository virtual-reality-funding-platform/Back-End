const db = require('../dbConfig.js');

module.exports = {
  add,
  find,
  findBy, 
  findById, 
  remove, 
  update,
  findProjectsByUserId
};

function find() {
  return db('users').select('id', 'username');
};

function findBy(filter) {
  return db('users').where(filter);
};

function add(user) {
  return db('users')
    .insert(user, 'id');
};

function findById(id) {
  return db('users')
    .where({ id })
    .select('name', 'about')
    .first();
};

async function findProjectsByUserId(id) {
  const projects = await db('projects').where({ user_id: id });
  console.log(projects)
  return projects;
}

function remove(id) {
  return db('users')
    .where({ id })
    .first()
    .delete();
};

function update(user, id) {
  return db('users')
    .where({ id })
    .update(user);
}