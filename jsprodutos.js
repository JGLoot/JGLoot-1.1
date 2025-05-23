document.addEventListener('DOMContentLoaded', function () {    
        var produtosSalvos = JSON.parse(localStorage.getItem('carrinho')) || [];
        var quantidadeProdutosSalvos = produtosSalvos.length;
    	var quantidadeProdutosSalvosElemento = document.querySelector('.quanticar');
    	quantidadeProdutosSalvosElemento.textContent = quantidadeProdutosSalvos;
});


//Menu celular
var overlay = document.getElementById('overlay');
function openNav() {
		overlay.classList.add('active');
		if (window.innerWidth < 700) {
			document.getElementById("mySidenav").style.width = "50%";
		} else {
			document.getElementById("mySidenav").style.width = "400px";
		}
}

function closeNav() {
		overlay.classList.remove('active');
		document.getElementById("mySidenav").style.width = "0";
}
overlay.addEventListener('click', closeNav);

//Redireciona para categoria escolhida
function categoriasmenu(categoria) {
            // Atualiza a URL da página adicionando o termo da categoria como parâmetro
            window.location.href = 'index.html?termo=' + categoria;
}

//Zoom na imagem
function zoomImage(event) {
      const img = document.getElementById('img-principal');
      const container = document.querySelector('.imgzoom');

      // Calcula a posição do cursor em relação à imagem
      const x = event.offsetX / container.offsetWidth * 100;
      const y = event.offsetY / container.offsetHeight * 100;

      // Aplica o zoom na imagem
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = 'scale(2)';
    }

    function resetZoom() {
      const img = document.getElementById('img-principal');
      img.style.transform = 'scale(1)';
    }
    
function mudarImagem(element) {
    // Remove a classe 'selected' de todas as imagens
    var thumbnails = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("imagemSelecionada");
    }

    // Adiciona a classe 'selected' à imagem clicada
    element.classList.add("imagemSelecionada");

    // Obtém a URL da imagem clicada e atualiza a imagem principal
    const url = element.src;
    const imgPrincipal = document.getElementById('img-principal');
    imgPrincipal.src = url;
}
	
function mudarImagemCor(novaImagemURL) {
        document.getElementById('img-principal').src = novaImagemURL;
}

/////////////////////////////////////////////////// ADD ITEM //////////////////////////////////////////////////////////////////////////

function additem() {
    var nomeProduto = document.getElementById('nomedoproduto').textContent;
    var loja = document.getElementById('loja').textContent;
    var precoProduto = parseFloat(document.getElementById('precodoproduto').textContent.replace('R$', '').trim());
    var corSelecionadaInput = document.querySelector('input[name="cor"]:checked');
    var corSelecionada = corSelecionadaInput ? corSelecionadaInput.value : null; // Mudança aqui
    var quantidadeProduto = document.getElementById('quantidade').value;
    var imgproduto = document.getElementById('img-principal').src;
    var tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
    var tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "";
    
    // Verifica se há opções de seleção de cor na página
    var opcoesCor = document.querySelectorAll('input[name="cor"]');
    if (opcoesCor.length > 0) {
        if (!corSelecionada) {
            alert('Por favor, selecione uma cor antes de adicionar o produto ao carrinho.');
            return;
        }
    }
    
    var produto = {
        nome: nomeProduto,
        loja: loja,
        preco: precoProduto,
        cor: corSelecionada || "", // Mudança aqui
        quantidade: quantidadeProduto,
        img: imgproduto,
        tamanho: tamanho
    };

    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    var quantidadeProdutosSalvos = carrinho.length;
    var quantidadeProdutosSalvosElemento = document.querySelector('.quanticar');
    quantidadeProdutosSalvosElemento.textContent = quantidadeProdutosSalvos;
        
    alert('Produto adicionado ao carrinho!');
}

// Função para mostrar a div de entrega e verificar se uma cor foi selecionada
function mostrarDivEntrega() {
    var botaoComprar = document.getElementById('comprar');
    var cores = document.getElementsByName('cor');
    var corSelecionada = Array.from(cores).some(cor => cor.checked);
    var precoFrete = document.getElementById('precofrete').textContent.trim();
// Verifica se o texto do preço do frete é válido
    var precosValidos = ["R$10,00", "R$7,00", "R$8,00", "R$12,00", "R$11,00", "R$20,00"];
    if (!precosValidos.includes(precoFrete)) {
        alert('CEP inválido.');
        return;
    }
    
    // Verifica se há opções de seleção de cor na página
    var opcoesCor = document.querySelectorAll('input[name="cor"]');
    if (opcoesCor.length > 0) {
        if (!corSelecionada) {
            alert('Por favor, selecione uma cor antes de adicionar o produto ao carrinho.');
            return;
        }
    }

    if (botaoComprar.dataset.clicado === 'true') {
        document.getElementById('entrega').style.display = 'block';
    }
    
    document.getElementById('addcar').scrollIntoView({ behavior: 'smooth' });
}

// Adiciona um evento de clique ao botão de comprar para marcar que ele foi clicado
document.getElementById('comprar').addEventListener('click', function() {
this.dataset.clicado = 'true';
// Chama a função para mostrar a div de entrega
mostrarDivEntrega();
});
