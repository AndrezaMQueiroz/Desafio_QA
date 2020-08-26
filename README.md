<snippet>
  <content><![CDATA[
# ${1:Desafio_QA}

Descrisão do Desafio - Criar um mini-projeto de automação de testes que execute o evento de long click, em um
componente web, e consiga validar se o tamanho em escala foi alterado para 225 x 225
pixels.
* Url: https://codepen.io/choskim/pen/RLYebL
* Utilizar o framework de automação cypress.io

## Para rodar esse projeto você precisa:
1. Clona este projeto
2. Ter o node instalado na sua maquina, caso não tenha acesse o link abaixo siga as instruções de instalação:
 https://nodejs.org/pt-br/download

3.Precisamos também do cypress que é o nosso framework de testes: 

  3.1. Dentro da pasta raiz do projeto pelo cmd da maquina você pode executar o comando "npm install cypress", mas se você quer outras opções de instalação eu sugiro, que você consulte a documentação. 

 https://www.cypress.io/
 4.Visual code ou uma ide de sua preferencia

## Depois do ambiente configurado, vamos iniciar o cypress;
1. Na pasta raiz execute o comando "npm run cypress:open", se você estiver usando o Visual Studio, pode executar no terminal da propria ide. 
Se não, sinalize o caminho de onde a pasta do projeto está salva e execute o comando.  Lembre-se do comando ("npm run cypress:open")
2. Rodando o teste. 
Com o cypress iniciando, clique na pasta "Examples" é nela que os testes ficam, click no nosso teste, "desafio.qa"; 
Agora é só ver os testes rodandos :)

## Links importantes
I've used this article to get the iframe instance
https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/

I've grab some code from this oficial repo
https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/blogs__iframes

I've used this issue on github to know how to do the long-press action
https://github.com/hammerjs/hammer.js/issues/1211

I've used the last comment code on this thread to grab the square size
https://github.com/cypress-io/cypress/issues/1393


TODO: Write license
]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>
