let produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let totalValor = 0;

function adicionar(nomeProduto, precoProduto) {
    const product = { produto: nomeProduto, preco: precoProduto };

    Swal.fire({
        title: "Que legal!",
        text: `Você adicionou ${nomeProduto} - R$${precoProduto},00 ao carrinho`,
        icon: "success"
    }).then((result) => {
        if (result.isConfirmed) {
            produtosCarrinho.push(product);
            localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
        }
    });
}

function mostrarCarrinho() {
    if (produtosCarrinho.length === 0) {
        Swal.fire({
            title: "Carrinho Vazio",
            text: "Seu carrinho está vazio!",
            icon: "info"
        });
    } else {
        const listaProdutos = ListaProdutos();

        Swal.fire({
            title: "Seu Carrinho",
            icon: "info",
            confirmButtonText: "Finalizar Compra",
            showCancelButton: true,
            cancelButtonText: "Limpar Carrinho",  // Adiciona o texto do botão "Limpar Carrinho"
            html: `
            <table>
                <tr><th>Nome</th><th>Valor</th></tr>
                ${listaProdutos}
                <tr><td><strong>Total:</strong></td><td><strong>R$ ${totalValor},00</strong></td></tr>
            </table>`,
            preConfirm: () => {
                finalizarCart();  // Finaliza a compra se o botão de confirmação for clicado
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {  // Verifica se o botão de "Limpar Carrinho" foi clicado
                limparCarrinho();  // Chama a função para limpar o carrinho
            }
        });
    }
}

function ListaProdutos() {
    let listaProdutos = '';
    totalValor = 0;

    produtosCarrinho.forEach((produto) => {
        listaProdutos += `
        <tr>
        <td>${produto.produto}</td>
        <td>R$ ${produto.preco},00</td>
        </tr>`;
        totalValor += produto.preco;
    });

    return listaProdutos;
}

function finalizarCart() {
    Swal.fire({
        icon: "question",
        confirmButtonText: "Enviar Pedido",
        showCancelButton: true,
        title: "Digite as informações de entrega!",
        html: `
    <form>
    <input id="end" placeholder="Endereço" required>
    <input id="tel" placeholder="Telefone" required>
    <input id="pag" placeholder="Forma de Pagamento">
    </form>
    `
    }).then((result) => {
        if (result.isConfirmed) {
            enviawhats();
            window.location.reload();
        }
    });
}

function enviawhats() {
    const endereco = document.getElementById("end").value;
    const telefone = document.getElementById("tel").value;
    const pagamento = document.getElementById("pag").value;

    const mensagem = `
        olá, gostaria de fazer um pedido!
        Endereço: ${endereco}
        Telefone: ${telefone}
        Forma de Pagamento: ${pagamento}
        Total de Produtos: ${produtosCarrinho.length}
        `;

    let produtos = ListaProdutos();

    const whatsappUrl =
        `https://wa.me/55159972383912?text=${encodeURIComponent(mensagem + produtos + `\nTotal: R$ ${totalValor},00`)}`;
    
    localStorage.clear();
    produtosCarrinho = [];
    window.open(whatsappUrl, '_blank');
}

function limparCarrinho() {
    Swal.fire({
        title: "Tem certeza?",
        text: "Você realmente deseja esvaziar o carrinho?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, limpar!",
        cancelButtonText: "Não, cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            produtosCarrinho = [];
            localStorage.removeItem('carrinho');
            Swal.fire({
                title: "Carrinho limpo!",
                text: "Todos os produtos foram removidos.",
                icon: "success"
            });
        }
    });
}


function voltar() {
    window.location.href = '../index.html'; // Substitua 'paginaDestino.html' pela página desejada
}
