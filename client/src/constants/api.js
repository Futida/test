export default Object.freeze({
  users: {
    create: 'api/users/add',
    get: 'api/users',
    delete: (id) => `api/users/delete/${id}`,
    update: (id) => `api/users/update/${id}`
  }
})
