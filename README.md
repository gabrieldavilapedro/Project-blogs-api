# Project blogs api

No Project-blogs-api, foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!

Para desenvolver esta aplicação foi usado o **Node.js** usando o pacote **sequelize**, seguindo os **princípios do REST** e fazendo relações entre as tabelas.


## Rodando com docker 

Primeiro instale as dependências:

`````` bash
npm install
``````
Rode os serviços node e db com o comando:
`````` bash
docker-compose up -d --build
``````
* Esses serviços irão inicializar um container chamado blogs_api e outro chamado blogs_api_db;

Rode o container blogs_api:

`````` bash
docker exec -it blogs_api bash
``````
* Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano, rode os proximos comandos neste terminal.

Popule o banco de dados:

`````` bash
npm run prestart
npm run seed
``````

Execute o servidor de desenvolvimento:

`````` bash
npm run dev
``````

Agora faça as requisiçôes utilizando a ferramenta postMen


### Considerações

* ##### É importante destacar que a estrutura base do projeto foi criada pela trybe como pode ser visto no primeiro commit “Initial commit" a316c8beb1ef92a928a80377135416e77dfe1a1d.

* ##### A partir do commit "primeiro commit", o código foi desenvolvido por mim.

