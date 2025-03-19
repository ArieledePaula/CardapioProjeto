//Simulação de adição de itens de pedido

//Seleciona todos os botões que possue a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll('.adicionar');

//Seleciona a lista onde os itens do pedido serão exibidos
const listaPedido = document.getElementById('lista-pedido');

//Seleciona o elemento que exibirá o valor total do pedido 
const totalElemento = document.getElementById('total');

//Criar variavél que armazena o total do pedido
let total = 0;

//Percorrer todos os botões 'Adicionar' e adiciona um evento de clique em cada um
botoesAdicionar.forEach((botao) =>{
botao.addEventListener('click',() => {
    //Obtem o elemento pai do botao
    const produto = botao.parentElement;

    //Obtém o nome do produto a partir do texto da tag <h3>
    const nome = produto.querySelector('h3').textContent;

    //Obtém o preço do produto, removendo o texto "R$" e convertendoo valor para decimal
    const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$",""));

    //Obtém um novo item de lista <li> para adicionar o produto ao pedido 
    const itemPedido = document.createElement('li');

    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    //Adicionar o item criado à lista de pedidos
    listaPedido.appendChild(itemPedido);

    //Atualiza o total da compra
    total += preco;

    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
});
});

//Simula finalização do pedido
const botaoFinalizarPedido = document.getElementById ('finalizar-pedido');

botaoFinalizarPedido.addEventListener("click", () =>{alert("Pedidofinalizado com sucesso");

listaPedido.innerHTML  = '';

total = 0;

totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

});