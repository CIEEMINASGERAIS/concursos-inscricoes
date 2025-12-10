// function cadastro(route, id) {
//     return `https://appcadastro.cieemg.org.br/${route ? route : ''}${id ? `/${id}` : ''}`
// };

function cadastro(route, id) {
    return `http://localhost:8080/${route ? route : ''}${id ? `/${id}` : ''}`
};


module.exports = { cadastro }