> <h1 align="center">make decisions API</h1>
>
> # O que é essa API?
>
> essa API é para um projeto meu, o objetivo dela é realizar um CRUD em uma to-do list.
>
> # E qual é o objetivo dessa API?
>
> Colocar opções para o que fazer com os seus amigos (ex. ir no shopping, ir na festa ou ir no parque), depois de listar todas as opções, você recebe um link e manda pros seus amigos, nesse link os seus amigos podem votar pra onde ir e assim vocês decidem onde ir.
>
> # Como é feito o banco de dados dessa API
>
> tem duas tabelas, uma de usuário, e outra de options, essas tabelas tem uma relação one-to-many **(uma para muitas)**
>
> ![image](https://user-images.githubusercontent.com/103784814/222308970-3fc8df14-2168-45e7-acc0-9248fe45dede.png)
>
>
> # Como ela faz o CRUD?
>
> com base no ID do usuário, a API realiza o CRUD nas options, para assim cada pessoa que utilizar a API vai ter uma lista vazia e ninguem além dela vai conseguir colocar as opções se não tiver os links
>
> ![image](https://user-images.githubusercontent.com/103784814/222309909-8fe2e03f-3a87-463a-b9f0-d97291e4360a.png)
>
> # Essa API possui testes?
>
> Essa API possui testes unitários e testes e2e **(end-to-end || ponta-a-ponta)**
>
>
> # O que foi utilizado nessa API?
>
> eu utilizei a CLI no Nest e que tem a opção de criar um setup Node completo com Jest para testes, Eslint e Prettier para formatação e padronização dos códigos e junto a isso foi utilizado o Prisma como ORM com o banco de dados da aplicação, junto com isso foi utilizado a metodologia de **Inverção** e **Injeção** de dependências, utilizando DTOS e repositorios para manipulação com o banco de dados. 
