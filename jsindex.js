//Função para recuperar o termo de busca da URL
function getTermoBusca() {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('termo');
}

//Função para exibir os resultados da busca
function exibirResultados() {
    var termoBusca = getTermoBusca();
    if (termoBusca) {
        // Filtrar os produtos com base no termo de busca
        var produtos = document.querySelectorAll('.produto');
        var resultadosEncontrados = false; // Variável para rastrear se algum resultado foi encontrado
        produtos.forEach(function(produto) {
            var nomeProduto = produto.getAttribute('data-name').toLowerCase();
            if (nomeProduto.includes(termoBusca.toLowerCase())) {
                produto.style.display = 'block';
                resultadosEncontrados = true; // Definir como verdadeiro se algum resultado for encontrado
            } else {
                produto.style.display = 'none';
            }
        });
    }
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
