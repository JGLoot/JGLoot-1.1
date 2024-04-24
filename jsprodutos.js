<!DOCTYPE html>
<html><!-- @autor JG -->
<!doctype html>
<html lang="pt-br">
<head>
<link rel="shortcut icon" type="image/png" href="https://i.postimg.cc/SQ9jc494/favicon-JG.png"> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.js"></script>
<link rel="stylesheet" type="text/css" href="cssprodutos.css" media="screen" />

<title>Suporte</title> 

<!-- NOME DO PRODUTO -->

<meta property="og:title" content="Suporte Para Celular">

<!-- DESCRIÇÃO DO PRODUTO -->

<meta property="og:description" content="Ler e assistir sem as mãos">

<!-- IMAGEM DO PRODUTO -->

<meta property="og:image" content="https://http2.mlstatic.com/D_NQ_NP_750444-MLB44662340166_012021-O.webp" />

<!-- URL DO PRODUTO -->

<meta property="og:url" content="https://jgloot.com.br/suporte.html">

<!-- PADRÃO (IGNORAR) -->
<meta property="og:image:width" content="400">
<meta property="og:image:height" content="400">
<meta property="og:type" content="website">
<meta property="og:site_name" content="JGLoot">
<style>
body {background-color: #dcdcdc; margin-top: 95px}

/* <header> */
header {background-color: #b81414; position: fixed; top: 0; width: 100%; z-index: 2}
.topo {width: 100%;}
.overlay {position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: none; z-index: 1}
.overlay.active {display: block}
.iconmenu {width: 30px; margin-left: 50px; cursor: pointer}
#mySidenav {height: 100%; width: 0; position: fixed; z-index: 2; top: 0; left: 0; background-color: #b81414; overflow-x: hidden; padding-top: 40px; transition: 0.5s; text-align: center}
#mySidenav a {text-decoration: none; font-size: 15px; color: white; display: block; transition: 0.2s;}
#mySidenav a:hover {color: grey;}
#mySidenav h5 {color: white}
#mySidenav p {color: white; cursor: pointer; font-size: 15px;}
#mySidenav p:hover {color: grey}
#mySidenav .closebtn {position: absolute; top: 0; right: 10px; font-size: 36px;}
.logo {width: 90px; margin-left: 50px}
.cxpesquisa {height: 50px; background-color: white; border-radius: 30px; padding: 12px}
.inputpesquisa {border: none; width: 80%; color: #b81414; background-color:transparent; font-weight: bold}
.inputpesquisa::placeholder {color: #b81414; font-weight: bold}
.inputpesquisa:focus {outline: none;}
.lupa {width: 25px; cursor: pointer;}
.cxpesquisa button {border: 0; background-color: transparent; float: right; padding-top: 0}
.carrinho-container {position: relative; cursor: pointer}
.carrinho-inner {position: relative; text-align: center;}
.carrinho {display: inline-block; max-width: 60px; height: auto;}
.quanticar {position: absolute; top: 45%; left: 60%; transform: translate(-50%, -50%); margin: 0; color: #b81414; font-weight: bold}
.propaganda {width: 190px; float: right; margin-left: 10px;}
/* </header> */

/* <div class="produto-principal"> */
.produto-principal {background-color: white; margin: 150px 5% 0px 5%; box-shadow: 0px 0px 5px #b81414; padding: 20px 10px}
.imgzoom {overflow: hidden; position: relative;}
.img-principal {width: 100%; transition: transform 0.3s ease;}
.thumbnails-container {display: flex; justify-content: space-between;}
.thumbnail {width: 15%; margin-top: 10px;}
.thumbnail:hover {box-shadow: 0px 0px 5px #b81414}
.inforproduto {border-left: 1px solid #b81414}
.inforproduto hr {margin: 30px 0;}
.inforproduto h5 {color: #b81414; font-weight: bold}
.inforproduto a {color: grey;}
.inforproduto h1 {color: green; margin-top: 20px}
.inforproduto label {color: #b81414; font-size: 17px; font-weight: bold; margin-bottom: 5px}
.inforproduto input {background-color: #b81414; border: none; height: 40px; border-radius: 10px; color: white; padding: 10px; margin-bottom: 5px}
.inforproduto input::placeholder {color: white;}
.inforproduto input:focus {outline: none;}
#campofrete {width: 50%}
.calcular {background-color: green; color: white; padding: 10px; border-radius: 10px; font-weight: bold; cursor: pointer}
.calcular:hover {background-color:#006400}
.inforproduto p {color: grey; font-weight: bold}
.cor {display: none;}
.labelcor {display: inline-block; padding: 5px 10px; cursor: pointer; box-shadow: 0px 0px 5px #b81414; border-radius: 5px; margin: 5px 2px 5px 0}
.cor:checked + label {background-color: green; color: white;}
.inputquant {width: 20%; text-align: center}
.inputquant::-webkit-inner-spin-button,
.inputquant::-webkit-outer-spin-button {-webkit-appearance: none; margin: 0;}
.inputquant{-moz-appearance: textfield;}
.comprar {background-color: green; padding: 3%; color: white; cursor: pointer; border-radius: 5px; font-weight: bold;}
.addcar {background-color: #b81414; padding: 3%; color: white; cursor: pointer; border-radius: 5px; font-weight: bold;}
.entrega {display: none; text-align: center; padding: 30px}
.entrega h1 {color: grey; margin-top: 50px}
.entrega label {color: grey; font-weight: bold; text-align: left; margin: 5px 0}
.entrega input {background-color: #b81414; border: none; height: 40px; border-radius: 10px; color: white; padding: 10px; width: 98%; margin-bottom: 10px}
.entrega input::placeholder {color: white;}
.entrega input:focus {outline: none;}
.enviar {background-color: green; padding: 10px; color: white; cursor: pointer; border-radius: 10px; font-weight: bold; width: 90%}
.entrega h6 {margin: 20px 0}
/* <div class="produto-principal"> */

/* <div class="descricao"> */
.descricao {background-color: white; margin: 20px 5%; box-shadow: 0px 0px 5px #b81414; padding: 20px}
.descricao h5 {color: #b81414}
/* </div class="descricao"> */

/* <footer> */
footer {background-color: #b81414; text-align: center; padding: 5px; width: 100%;}
footer hr {border: 1px solid white}
footer img {width: 100px; margin-bottom: 20px}
footer h6 {color: white}
.p {color: white; font-size: 14px}
.p a {color: white; font-weight: bold}
.copy {color: white; font-size: 12px}
/* </footer> */

/* <article2> */
.article2 {margin: 0 5% 5% 5%; padding-top: 10px; background-color: white; padding: 3%; box-shadow: 0px 0px 5px #b81414;}
.article2 h3 {color: #b81414; text-align: center; margin: 0 0 40px 0; border-bottom: 3px solid #b81414;}
.produtos2 {display: flex; flex-wrap: wrap; text-align: center; justify-content: space-between; width: 100%}
.produto2 {background-color: white; box-shadow: 0px 0px 5px #b81414; transition: transform 0.2s ease; margin-bottom: 50px; flex: 0 0 calc(15% - 1px); padding: 5px}
.produto2:hover {transform: scale(1.1); background-color: #ffcccc;}
.produto2 a {text-decoration: none}
.produto2 img {width: 100%; max-width: 200px; min-width: 80px; display: block; margin: 0 auto;}
.produto2 h6 {color: #b81414}
.produto2 p {color: grey; font-size: 12px}
.produto2 h5 {color: green}
.article2 span {display: block; margin: 0 auto; background-color: #b81414; padding: 10px; font-weight: bold; border-radius: 10px; cursor: pointer; width: 50%; text-align: center}
.article2 span a {text-decoration: none; color: white}
/* </article2> */

/* <figure> Anúncio*/
.anuncio img {width: 60%; display: block; margin: 100px auto 100px auto; border-radius: 30px 0 30px 0}
/* </figure> Anúncio*/

@media screen and (max-width: 700px) {
body {background-color: white; margin-top: 60px}
/* <header> */
.iconmenu {width: 25px; margin-left: 30px}
.logo {width: 60px; margin-left: 20px}
.cxpesquisa {height: 40px; padding: 8px}
.inputpesquisa {width: 70%; font-size: 14px}
.lupa {width: 22px}
.carrinho-container {padding-right: 30px}
.carrinho {width: 50px}
.propaganda {display: none}
/* </header> */

/* <div class="produto-principal"> */
.produto-principal {margin: 80px 3% 0px 3%; padding: 20px}
.imagens, .inforproduto {float: none; width: 100%}
.inforproduto {border: 0; margin-top: 50px}
/* </div class="produto-principal"> */

/* <div class="descricao"> */
.descricao {margin: 20px 3%;}
/* </div class="descricao"> */

/* <article2> */
.article2 {margin: 0 3% 5% 3%;}
.produto2 {flex: 0 0 calc(33% - 5px)}
/* </article2> */
}
</style>
</head>

<body>
        <header>
        	<table class="topo">
            	<div id="overlay" class="overlay"></div>
                	<td><img onclick="openNav()" class="iconmenu" src="https://i.postimg.cc/LsRgvpfc/menu.jpg" alt="icone menu" > <!-- Icone Menu -->
			<div id="mySidenav">
                        
                            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> <!-- Botão de fechar -->
                            
                            <h5>Redes Sociais:</h5> 
                            <a href="https://wa.me/5593992244987">WhatsApp</a>
                            <br>
                            <a href="https://www.instagram.com/_jgloot_/">Intagram</a>
                            <br>
                            <a href="https://www.tiktok.com/@_jgloot_">TikTok</a>
                                
                            <hr style="border: 1px solid white">
                            <h5>Categorias:</h5>
                            <br>
                            <p onclick="categoriasmenu('acessorios')">&#8986; Acessórios</p>
                            <br>
                            <p onclick="categoriasmenu('eletronicos')">&#128241; Eletrônicos</p>
                            <br>
                            <p onclick="categoriasmenu('beleza')">&#128132; Beleza</p>
                            <br>
                            <p onclick="categoriasmenu('esportes')">&#128095; Esportes e Calçados</p>
                            <br>
                            <p onclick="categoriasmenu('papelaria')">&#9999; Papelaria</p>
                            <br>
                            <p onclick="categoriasmenu('veiculos')">&#128663; Veículos</p>
                            <br>
                            <p onclick="categoriasmenu('sexshop')">&#128139; Sex shop</p>
                            <br>
                            <p onclick="categoriasmenu('vestuario')">&#128085; Vestuário</p>
			    <br>
                    	</div>
                    </td>
                        
                 	<td><a href="index.html"><img class="logo" src="https://i.postimg.cc/BbfF2nQ8/logojgloot.png" alt="logo"></a></td> <!-- Logo -->

                 	<td>
				<div class="cxpesquisa"> <!-- Caixa De Pesquisa -->
				<form action="index.html" method="GET">
                 		<input class="inputpesquisa" id="campopesquisa" type="text" name="termo" placeholder="Busca instantânea"> <!-- Input De Busca-->
                 		<button type="submit"><img class="lupa" src="https://i.postimg.cc/V65b3F61/lupa.jpg" alt="lupa"></button> <!-- Lupa -->
				</form>
                 		</div>
			</td>
				
                	<td class="carrinho-container">
                    	<a href="carrinho.html">
                        <div class="carrinho-inner">
                            <img class="carrinho" src="https://i.postimg.cc/yNKD8bxK/carrinho.png" alt="carrinho"> <!-- Icone Carrinho -->
                            <p class="quanticar">0</p> <!-- Quantidade Carrinho -->
                        </div>
                    	</a>
			</td>

                 	<td><a href="https://api.whatsapp.com/send?phone=5593991991685"><img class="propaganda" src="https://i.postimg.cc/T36mL6xH/propagandatopo.png" alt="propaganda"></a></td> <!-- Propaganda -->
        	</table>
        </header>

		<main>
          <div class="produto-principal">
          
            <form id="colorForm" onsubmit="enviar()" action="https://api.sheetmonkey.io/form/7eqrTSyTcDuJHDqiJagaZS" method="post">
			<input type="hidden" name="produto" value="Suporte Para Celular Acrilico Apoio Mesa">
            <input type="hidden" name="loja" value="JGLoot Oficial">
            
        	  <div class="row">
            	<div class="col-6 col-sx-12 imagens">
                	<div class="imgzoom"  onmousemove="zoomImage(event)" onmouseout="resetZoom()">
                		<img class="img-principal" id="img-principal" src="https://http2.mlstatic.com/D_NQ_NP_750444-MLB44662340166_012021-O.webp">
                    </div>
					
                    <div class="thumbnails-container">
                        <img id="color" class="thumbnail" src="https://http2.mlstatic.com/D_NQ_NP_750444-MLB44662340166_012021-O.webp" alt="Miniatura 0" onclick="mudarImagem('https://http2.mlstatic.com/D_NQ_NP_750444-MLB44662340166_012021-O.webp')">

                        <img id="color" class="thumbnail" src="https://down-br.img.susercontent.com/file/e413b998a72c9b7962b78d760daa4031" alt="Miniatura 2" onclick="mudarImagem('https://down-br.img.susercontent.com/file/e413b998a72c9b7962b78d760daa4031')">

                        <img id="color" class="thumbnail" src="https://down-br.img.susercontent.com/file/1238ba74851208cd56704e27f660ab91" alt="Miniatura 4" onclick="mudarImagem('https://down-br.img.susercontent.com/file/1238ba74851208cd56704e27f660ab91')">

                        <img id="color" class="thumbnail" src="https://down-br.img.susercontent.com/file/0d88fd1417df1305abdb2948baabca2f" alt="Miniatura 5" onclick="mudarImagem('https://down-br.img.susercontent.com/file/0d88fd1417df1305abdb2948baabca2f')">

                        <img id="color" class="thumbnail" src="https://down-br.img.susercontent.com/file/e1383513348ff885f742defe673b4031" alt="Miniatura 6" onclick="mudarImagem('https://down-br.img.susercontent.com/file/e1383513348ff885f742defe673b4031')">

                        <img id="color" class="thumbnail" src="https://down-br.img.susercontent.com/file/0879f2f0f8d6f440a5ca99a82e7fb84b" alt="Miniatura 8" onclick="mudarImagem('https://down-br.img.susercontent.com/file/0879f2f0f8d6f440a5ca99a82e7fb84b')">
                    </div>
				</div>
                
				<div class="col-6 col-xs-12 inforproduto">
                
                    <h5 id="nomedoproduto">Suporte Para Celular Acrilico Apoio Mesa</h5>
                    <a href="https://www.instagram.com/_jgloot_/" id="loja">Produto Oficial JGLoot</a>
                    <h1 id="precodoproduto">R$5,00</h1>
                    <hr>
                    
                    <label>Frete:</label><br>
                    <input type="text" id="campofrete" placeholder="Digite seu CEP" maxlength="9" name="cep" required>
                    <span class="calcular" onclick="calcular()">Calcular</span>
                    <p id="frete">A taxa de entrega aparecerá aqui</p>
                    <p id="precofrete"></p>
                    <hr>

                    <label>Escolha uma cor:</label><br>

                    <input class="cor" id="cor1" type="radio" name="cor" value="Transparente"  onclick="mudarImagemCor('https://down-br.img.susercontent.com/file/e413b998a72c9b7962b78d760daa4031')" required>
                    <label for="cor1" class="labelcor">Transparente</label>
                    <input class="cor" id="cor2" type="radio" name="cor" value="Amarelo"  onclick="mudarImagemCor('https://down-br.img.susercontent.com/file/1238ba74851208cd56704e27f660ab91')" required> 
                    <label for="cor2" class="labelcor">Amarelo</label>
                    <input class="cor" id="cor3" type="radio" name="cor" value="Azul"  onclick="mudarImagemCor('https://down-br.img.susercontent.com/file/0d88fd1417df1305abdb2948baabca2f')" required>
                    <label for="cor3" class="labelcor">Azul</label>
                    <input class="cor" id="cor4" type="radio" name="cor" value="Laranja"  onclick="mudarImagemCor('https://down-br.img.susercontent.com/file/e1383513348ff885f742defe673b4031')" required> 
                    <label for="cor4" class="labelcor">Laranja</label>
                    <input class="cor" id="cor5" type="radio" name="cor" value="Vermelho"  onclick="mudarImagemCor('https://down-br.img.susercontent.com/file/0879f2f0f8d6f440a5ca99a82e7fb84b')" required> 
                    <label for="cor5" class="labelcor">Vermelho</label>
                    <hr>
					
                    <label>Quantidade:</label>
                    <input class="inputquant" type="number" id="quantidade" name="quantidade" min="1" value="1">
                    <hr>
                    <br>
                    
                    <span id="comprar" class="comprar">Comprar</span>
                    <span class="addcar" onclick="additem()" id="addcar">Adicionar Ao Carrinho</span>
                    <hr>
                </div>
          	  </div>
              <div id="entrega" class="row entrega">
                        <h1 class="enderecoparaentrega">ENDEREÇO PARA ENTREGA</h1>
                            <label for="nome">Nome completo:</label><br>
                            <input class="inputentrega" placeholder="Nome de quem receberá o produto." type="text" id="nome" name="nome" required>
							<br>
                            <label for="endereco">Bairro:</label><br>
                            <input class="inputentrega" placeholder="Digite o nome do seu bairro." type="text" id="bairro" name="bairro" required>
							<br>
                            <label for="cidade">Rua/Travessa/Avenida:</label><br>
                            <input class="inputentrega" placeholder="Digite o nome da rua/travessa/avenida." type="text"  id="rua" name="rua" required>
							<br>
                            <label for="cidade">Número:</label><br>
                            <input class="inputentrega" placeholder="Digite o número da sua localidade." type="number" id="numero" name="numero" required>
							<br>
                            <label for="cidade">Ponto de referência (opcional):</label><br>
                            <input class="inputentrega" placeholder="Digite um ponto de referência, escola, igreja, algo próximo." type="text" id="complemento" name="complemento">
							<br>
                            <label for="cliente">Número de telefone:</label><br>
                            <input class="inputentrega" placeholder="Para confirmação de pagamento, informações, entre outros..." type="text" id="telefone" name="telefone" maxlength="15" required>
							<br>
                            <h6>Após confirmação de pagamento entraremos em contato (pode demorar alguns minutos).</h6>

                            <input class="inputentrega" type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />

                            <button class="enviar" type="submit" onclick="setPrecoCookie()">Finalizar compra</button>
             </div>
            </form>
          </div>
          <div class="descricao">
           			<h5>Descrição do produto:</h5>
                    <br>
                    <p style="text-align: justify">Um suporte de acrílico para celular é um dispositivo feito de acrílico transparente que proporciona um acabamento elegante. Ele é utilizado para segurar e apoiar smartphones e tablets de forma vertical ou horizontal, permitindo uma visualização conveniente durante diversas atividades. Com um design ajustável e uma base estável, o suporte oferece conforto, praticidade e segurança ao utilizar o dispositivo, além de ajudar a reduzir a tensão no pescoço e nas mãos. É leve, compacto e pode ser facilmente transportado, sendo compatível com a maioria dos modelos de dispositivos móveis.</p>
           </div>
           
           <article class="article2">
            	<h3>Mais Vendidos</h3>
            	<div class="produtos2">
                            	<div class="produto2">
                            	<a href="fonele35.html">
                            	<img src="https://i.postimg.cc/Qd6Fy4jY/fonele35.png">
                                <h6>Fone De Ouvido A Fio LE-35 Leon...</h6>
                                <p>VA Imports</p>
                                <h5>R$25,00</h5>
                                </a>
                                </div>

                            	<div class="produto2">
                            	<a href="fonexej005.html">
                            	<img src="https://i.postimg.cc/xCLx5bL5/fonexej005.png">
                                <h6>Fone De Ouvido A Fio XEJ-005...</h6>
                                <p>VA Imports</p>
                                <h5>R$30,00</h5>
                                </a>
                                </div>
                                
                                <div class="produto2">
                            	<a href="fonefxs8.html">
                            	<img src="https://i.postimg.cc/1RgrcFrZ/fonefxs8.png">
                                <h6>Fone De Ouvido A Fio FX-S8 Leon...</h6>
                                <p>VA Imports</p>
                                <h5>R$25,00</h5>
                                </a>
                                </div>
                                
				<div class="produto2">
                            	<a href="massageador.html">
                            	<img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8F1uy8M6yEepbjQ777-qzEizY2l4K49EgfBcEEd80LA1d59cb3SLvwhlIxgipAjoM8-otpcMjKqacrWSmvFcyiy3djSLShaUmQgFRuCg&usqp=CAE">
                                <h6>Massageador Recarregável EMS...</h6>
                                <p>VA Imports</p>
                                <h5>R$30,00</h5>
                                </a>
                                </div>
                                
                            	<div class="produto2">
                            	<a href="botas.html">
                            	<img src="https://i.postimg.cc/WpBJ5BB7/1.png">
                                <h6>Botas Caterpillar Adventure...</h6>
                                <p>Jessy Modas</p>
                                <h5>R$125,00</h5>
                                </a>
                                </div>
                                
                            	<div class="produto2">
                            	<a href="olympikusveloz.html">
                            	<img src="https://i.postimg.cc/T3kCZMFK/1.png">
                                <h6>Tênis Olympikus Veloz Unissex</h6>
                                <p>Jessy Modas</p>
                                <h5>R$100,00</h5>
                                </a>
                                </div>
                                
                                
            	</div>
                
                <span><a href="https://jgloot.com.br/#produtos">Ver todos os produtos</a></span>
                
            </article>
            
            <figure class="anuncio">
            	<a href="https://api.whatsapp.com/send?phone=5593991991685"><img src="https://i.postimg.cc/2SBRgQvW/propaganda.png" alt="anuncio"></a>
            </figure>
		</main>
        
		<footer>
			<img class="logoft" src="https://i.postimg.cc/BbfF2nQ8/logojgloot.png" alt="logo">
	
			<h6>Sobre nós</h6>
			<p class="p"><a href="https://www.instagram.com/_jgloot_/">Conheça a JGLoot e os nossos objetivos</a></p>
			<hr>
			<h6>Anucie seus produtos</h6>
			<p class="p">Preencha <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhuFpzp3EjnIlVT7WQPRmiuR9JU67ogPpiGjKPTi4Py-GYwQ/viewform?usp=sf_link">Este formulário</a> para anuciar seus produtos em nosso site, mais informações em <a href="https://wa.me/5593992244987">nosso WhatsApp</a>.</p>
			<hr>
			<h6>Divulgue sua loja</h6>
			<p class="p">Preencha <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuq6cA0gnn44n50N8XNeVOuBwYkRLg8Q7RuaczjFqsagqGhQ/viewform?usp=sf_link">Este formulário</a> para divulgar sua loja em nosso site e redes sociais, mais informações em <a href="https://wa.me/5593992244987">nosso WhatsApp</a>.</p>
			<hr>
			<h6>Termos de Uso e Política de Privacidade</h6>
			<p class="p">Inseguro sobre seus dados? Leia nosso <a href="https://sites.google.com/view/usoeprivacidade">Termos de Uso e Política de Privacidade</a> e tenha garantia da segurança de nosso site, mais informações em <a href="https://wa.me/5593992244987">nosso WhatsApp</a>.</p>
            <hr>
            <p class="copy">&copy; 2024 Todos os direitos reservados > 54.710.799 JOAO GABRIEL VASCONCELOS TRINDADE</p>
		</footer>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<script type="text/javascript" src="./jsprodutos.js"></script>
<script type="text/javascript" src="./jscepsprodutos.js"></script>
<script>
/////////////////////////////////////////////////// COOKIE PREÇO //////////////////////////////////////////////////////////////////////////

function setPrecoCookie() {
    var precoUnidade = 6.00;
    var quantidade = parseInt(document.getElementById('quantidade').value) || 1; 
    var frete = parseFloat(document.getElementById('precofrete').textContent.replace('R$', '').trim()) || 0;
    var precoTotal = (precoUnidade * quantidade) + frete;
    document.cookie = 'preco_produto=' + precoTotal.toFixed(2) + '; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/';
}

document.addEventListener('DOMContentLoaded', function () {    
        var produtosSalvos = JSON.parse(localStorage.getItem('carrinho')) || [];
        var quantidadeProdutosSalvos = produtosSalvos.length;
    	var quantidadeProdutosSalvosElemento = document.querySelector('.quanticar');
    	quantidadeProdutosSalvosElemento.textContent = quantidadeProdutosSalvos;
    executarPesquisa();
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
            window.location.href = 'https://jgloot.github.io/JGLoot-1.1/index.html?termo=' + categoria;
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
    
function mudarImagem(url) {
      const img = document.getElementById('img-principal');
      img.src = url;
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
    var corSelecionada = corSelecionadaInput ? corSelecionadaInput.value : null;
    var quantidadeProduto = document.getElementById('quantidade').value;
    var imgproduto = document.getElementById('img-principal').src;
    var tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
    var tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "N/A";
    
	if (!corSelecionada) {
        alert('Por favor, selecione uma cor antes de adicionar o produto ao carrinho.');
        return;
    }
    
    var produto = {
        nome: nomeProduto,
        loja: loja,
        preco: precoProduto,
        cor: corSelecionada,
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
    var precosValidos = ["Gratuitamente", "R$10,00", "R$15,00", "R$20,00"];
    if (!precosValidos.includes(precoFrete)) {
        alert('CEP inválido.');
        return;
    }
    
    if (!corSelecionada) {
        alert('Por favor, escolha uma cor antes de prosseguir.');
        return;
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
</script>	
</body>
</html>
