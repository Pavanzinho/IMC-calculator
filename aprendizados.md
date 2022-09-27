Dicas para adiantar padrões do projeto:
- Importar todas as fontes
- Criar "var" com todas as cores que existem no projeto e com seu devidos nomes.
- Tentar prever classes que serão utilizadas mais de uma vez, como títulos, cards com mesmas medidas, fontes com mesmas medidas.
    Exemplo : temos dois títulos com tamanhos e cores iguais de fonte, ao invez de utilizar h1{ } no css, vou criar uma classe onde
    colocarei as propriedades das letras, assim, posso manter só um h1 no projeto(sintaxe indicada) e utilizar esta mesma classe em algum h2, por exemplo.


Aleátorios:

-Transition no hover: na tag pai para funcionar tambem ao retirar o mouse de cima.
-Criar pasta para adicionar o svg quando não for necessário mudar cor, dimensoes e qualquer informações do svg. Deixa o projeto mais organizado e limpo.


Modais, alert error ou qualquer pop-up que sobressai na tela

 Deixa-los invisíveis: 

    -visibility:
    -opacity:
    
 Assim, criamos uma condicional:   
    -seletor css : .classe1.classe2 ----> quando a classe1 tiver junto com a classe2, deixe visivel novamente.

Dai, no JS, basta adicionar essa segunda classe junto a primeira que o pop-up irá aparecer em determinada situação.

Configurando Eventos:
-existem configurações padrões, tanto no html quanto no browser em sí, por exemplo: função de submeter e recarregar o html
num botão de submit em um formulário.
-keydown: é um evento que basicamente salva a tecla digitada no teclado, muito utilizado para definir os eventos de cada 
tecla necessária. Como fechar pop-up com esc, por exemplo.

    -Assim, podemos criar funções callback para fazer referencia a alguma ferramenta necessária.
        window.addEventListener('keydown', function (event){
            if(event.key==='Escape'){
                function fechar pop up.
            }
        })



ES MODULES:
-disponibilização de import e export