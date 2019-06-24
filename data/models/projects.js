const db = require('../dbConfig.js');

module.exports = {
  add, 
  find, 
  findBy, 
  findById, 
  remove, 
  update
};

function find() {
  return db('projects');
};

function findBy(filter) {
  return db('projects').where(filter);
};

async function add(project) {
  const [id] = await db('projects').insert(project);

  return findById(id);
};

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
};

function remove(id) {
  return db('projects')
    .where({ id })
    .first()
    .del();
};

function update(project, id) {
  return db('projects')
    .where({ id })
    .update(project);
};