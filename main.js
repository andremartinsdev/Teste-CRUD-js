let produtos = [];
let indiciAtual = 0;

function adicionarProduto() {
    var prod = document.getElementById('nomeProduto').value;
    var valor = document.getElementById('valorProduto').value;


    if(indiciAtual >= 0){
        
            produtos[indiciAtual].nomeProduto = prod,
            produtos[indiciAtual].valorProduto = valor
        
        updateTable();
        indiciAtual = ''
    }else{
        const produto = {
            nomeProduto: prod,
            valorProduto: valor
        }
        produtos.push(produto)
        updateTable();
        indiciAtual = -1

    }
   
    

    document.getElementById('nomeProduto').value = ''
    document.getElementById('valorProduto').value = ''

}

function finalizarCompra(){
    let element = '';
    for (var i = 0; i < produtos.length; i++) {
        element += `<tr>
        <td>${produtos[i].nomeProduto}</td>
        <td>${parseFloat(produtos[i].valorProduto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        <td><button onclick="editar(${i})">Editar</button></td>
        <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>`
    }
    ;
    document.getElementById('final').innerHTML = element;

}

function updateTable() {
    let element = '';
    for (var i = 0; i < produtos.length; i++) {
        element += `<tr>
        <td>${produtos[i].nomeProduto}</td>
        <td>${parseFloat(produtos[i].valorProduto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        <td><button onclick="editar(${i})">Editar</button></td>
        <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>`
    }
    ;
    document.getElementById('teste').innerHTML = element;
}

function editar(index) {
    document.getElementById('nomeProduto').value = produtos[index].nomeProduto;
    document.getElementById('valorProduto').value = produtos[index].valorProduto;
    indiciAtual = index;

}

function excluir (index){
    produtos.splice(index, 1);
    updateTable()
    indiciAtual = -1
}