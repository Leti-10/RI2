function Telefone(ddd, tele){
    this.ddd=ddd
    this.tele = tele

    this.getDdd = function(){return this.ddd}
    this.setDdd = function(novoDdd){return this.ddd=novoDdd}
    this.getTele = function(){ return this.tele}
    this.setTele = function(novoTele){ return this.tele = novoTele}
}

function Endereço(rua, numero, cidade, estado){
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado

    this.getRua = function(){return this.rua}
    this.setRua = function(novaRua){return this.rua = novaRua}
    this.getNumero = function(){return this.numero}
    this.setNumero = function(novoNumero){return this.numero = novoNumero}
    this.getCidade = function(){return this.cidade}
    this.setCidade = function(novaCidade){return this.cidade = novaCidade}
    this.getEstado = function(){return this.estado}
    this.setEstado = function(novoEstado){return this.estado = novoEstado}
    
}

function Cliente(nome, telefone, endereco){
    this.nome = nome
    this.telefone = telefone
    this.endereco = endereco
    this.getNome = function(){ return this.nome}
    this.setNome = function(novoNome){ return this.nome = novoNome}
    this.getNomeUpper = function() { return this.nome.toUpperCase() }
    this.getNomeLower = function() { return this.nome.toLowerCase() }

    this.getInfo = function(){
        return '---------------------\n'
        + 'Informações do Cliente:\n'
        + this.nome + '\n'
        + '---------------------\n'
        + '---------------------\n'
        + 'Telefone:\n'
        + 'DDD:'  + this.telefone.getDdd() + '\n'
        + 'Número: ' + this.telefone.getTele() + '\n'
        + '---------------------\n'
        + '---------------------\n'
        + 'Endereço: \n'
        + 'Rua: ' + this.endereco.getRua() + '\n'
        + 'Número: ' + this.endereco.getNumero() + '\n'
        + 'Cidade: ' + this.endereco.getCidade() + '\n'
        + 'Estado: ' + this.endereco.getEstado() + '\n'
        + '---------------------'
    }
}

function criarCliente(nome, ddd, telefone, rua, numero, cidade, estado) {
    let tel = new Telefone(ddd, telefone);
    let end = new Endereço(rua, numero, cidade, estado);
    return new Cliente(nome, tel, end);
}

function ordemNome(cliArr) {
    return cliArr.slice().sort((a, b) => a.getNome().localeCompare(b.getNome()));
}


let cli1 = criarCliente('Miguel de Oliveira Lopes', 12, 981879369, 'Rua Koichi Matsumura', 103, 'São José dos Campos', 'SP');
let cli2 = criarCliente('Ana Souza', 11, 988877766, 'Av. Brasil', 250, 'Jacareí', 'SP');
let cli3 = criarCliente('Bruno Lima', 13, 977766555, 'Rua dos Pássaros', 75, 'Taubaté', 'SP');
let cli4 = criarCliente('Carla Mendes', 12, 966655544, 'Rua da Praia', 500, 'São José dos Campos', 'SP');

let clientes = [cli1, cli2, cli3, cli4];
let clientesOrdenados = ordemNome(clientes);

// console.log(cli1.getInfo());
// console.log(cli2.getInfo());
// console.log(cli3.getInfo());
// console.log(cli4.getInfo());

clientesOrdenados.forEach(cli => console.log(cli.getInfo()))


