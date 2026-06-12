function cadastro(route, id) {
    return `/${route ? route : ''}${id ? `/${id}` : ''}`
};


module.exports = { cadastro }