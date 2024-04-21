window.onload = function() {
        // Função para filtrar os produtos com base no termo da pesquisa na URL
        function filtrarProdutos(termo) {
            // Seleciona todos os elementos com a classe "produto"
            var produtos = document.querySelectorAll('.produto');

            // Exibe todos os produtos
            produtos.forEach(function(produto) {
                produto.style.display = 'block';
            });

            // Verifica se há um termo de pesquisa
            if (termo.trim() !== '') {
                // Oculta os produtos que não correspondem ao termo de pesquisa
                produtos.forEach(function(produto) {
                    // Obtém o texto dentro do elemento para comparar com o termo
                    var nomeProduto = produto.innerText.toLowerCase();
                    
                    // Verifica se o termo de pesquisa está presente no texto do produto
                    if (!nomeProduto.includes(termo.toLowerCase())) {
                        // Se o termo não estiver presente, esconde o produto
                        produto.style.display = 'none';
                    }
                });
            }

            // Exibe a div de produtos após a filtragem
            document.getElementById('produtos').style.display = 'block';
        }

        // Função para obter o termo de pesquisa da URL
        function obterTermoPesquisa() {
            // Obtém a parte da URL após o caractere '#'
            var urlParams = window.location.hash.substring(1);
            
            // Divide a parte da URL em um array usando o caractere '?'
            var paramsArray = urlParams.split('?');

            // Verifica se há parâmetros na URL
            if (paramsArray.length > 1) {
                // Divide os parâmetros em um array usando o caractere '='
                var queryParams = paramsArray[1].split('=');

                // Verifica se o primeiro parâmetro é 'termo'
                if (queryParams[0] === 'termo') {
                    // Retorna o valor do termo de pesquisa
                    return queryParams[1];
                }
            }

            // Se não houver termo de pesquisa na URL, retorna uma string vazia
            return '';
        }

        // Obtém o termo de pesquisa da URL e filtra os produtos ao carregar a página
        var termoPesquisa = obterTermoPesquisa();
        filtrarProdutos(termoPesquisa);
}

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

function categoriasmenu(categoria) {
		var produtos = document.querySelectorAll(".produto");
		var article = document.querySelectorAll('article');
		var figure = document.querySelectorAll('figure');
		produtos.forEach(function(produto) {
			var categoriasProduto = produto.getAttribute("data-name").split(" ");
			if (categoriasProduto.includes(categoria)) {
				produto.style.display = "block";
			} else {
				produto.style.display = "none";
			}
		});
		article.forEach(function(elem) {
			elem.style.display = "none";
		});
		figure.forEach(function(elem) {
			elem.style.display = "none";
		});
		document.getElementById("mySidenav").style.width = "0";
		overlay.classList.remove('active');
}
		
//banners
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
	function showImage(index) {
		images.forEach((image, i) => {
			if (i === index) {
				image.classList.add('active');
			} else {
				image.classList.remove('active');
			}
		});
	}

        function prevImage() {
          	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
          	showImage(currentImageIndex);
        }

        function nextImage() {
          	currentImageIndex = (currentImageIndex + 1) % images.length;
          	showImage(currentImageIndex);
        }

		showImage(currentImageIndex);
    setInterval(nextImage, 7000);

//busca intantânea	
const searchInput = document.getElementById('campopesquisa');
const produtos = document.querySelectorAll('.produto');
var article = document.querySelectorAll('article');
var figure = document.querySelectorAll('figure');

searchInput.addEventListener('input', function() {
	const filtro = this.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		if (filtro === "") {
		// Se o campo de pesquisa estiver vazio, exiba o figure e o article
			article.forEach(articleItem => {
				articleItem.style.display = 'block';
			});
			figure.forEach(figureItem => {
				figureItem.style.display = 'block';
			});
		} else {
			// Se houver texto no campo de pesquisa, oculte o figure e o article
			article.forEach(articleItem => {
				articleItem.style.display = 'none';
			});
			figure.forEach(figureItem => {
				figureItem.style.display = 'none';
			});

	// Exiba ou oculte os produtos com base no filtro
	produtos.forEach(produto => {
		const dataName = produto.getAttribute('data-name').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
			if (dataName.includes(filtro)) {
				produto.style.display = 'block';
			} else {
				produto.style.display = 'none';            
			}
		});
	}
});

//embaralhar produtos
function shuffleDivs() {
	var produtos = document.getElementById("produtos");
	for (var i = produtos.children.length; i >= 0; i--) {
		produtos.appendChild(produtos.children[Math.random() * i | 0]);
	}
}
shuffleDivs();
