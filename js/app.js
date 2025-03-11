let totalGeral = 0;

function adicionar(){
    //Recuperando 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if(validar(quantidade, produto) == 'erro')
        return;

    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span> </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;


}

function limpar(){
    //Zera o campo valorTotal e limpa a lista de produtos
    document.getElementById('valor-total').innerHTML = 'R$0';
    document.getElementById('lista-produtos').innerHTML = '';
    totalGeral = 0;

}

function validar(quantidade, produto){
    if( isNaN(quantidade) || quantidade <= 0){
        alert('Insira uma quantidade válida!');
        return 'erro';
    }
    if(!produto || produto.trim() === ""){
        alert('Selecione um produto válido!');
        return 'erro';
    }
    return 'valido';
}