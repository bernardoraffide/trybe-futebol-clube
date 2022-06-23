# Boas vindas ao repositório do Trybe Futebol Clube!

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

Aqui você terá acesso ao contexto geral do projeto, ou seja, seu tema central e o prazo de entrega.

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  ![Exemplo app front](assets/front-example.png)

  O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

  No time de desenvolvimento do `TFC`, seu *squad* ficou responsável por desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.

  Nesse projeto, você vai construir **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Seu desenvolvimento deve **respeitar regras de negócio** providas no projeto e **sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto**.

  Para adicionar uma partida é necessário ter um _token_, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas `teams` e `matches` para fazer as atualizações das partidas.

  O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

</details>

<details>
  <summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Tem o papel de fornecer dados para o serviço _back-end_. Durante os testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`; 
  - O projeto contém um script `db:reset` para resetar o banco de dados, criando este e rodando as _migrations_ e _seeders_. Você pode usá-lo em `app/backend` com o commando `npm run db:reset`;
  - Já existem _seeders_ prontas em `app/backend/seeders`. Quando acabar de fazer uma _migration_ você deve renomear a _seeder_ retirando o underline (`_`) ao fim dela, assim o script `db:reset` vai usá-la nos testes e você testará sua _migration_.

2️⃣ **Back-end:**
 - Deve rodar na porta `3001`, pois o front-end faz requisições para ele na porta `3001` por padrão;
 - Sua aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`;
 - Garanta que o `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;
 - Todas as dependências extras (tal como `joi`, `boom`, `express-async-errors`...) devem ser listadas em `app/backend/packages.npm`.
  
3️⃣ **Front-end:**
  - Todos os testes a partir do requisito de login usam o `puppeteer` para simular uma pessoa acessando o site `http://localhost:3000/`; 
  - Esse site faz requisições para o back-end na porta `3001` para acessar e modificar os dados do banco através dos endpoints que você deve construir nos requisitos.

4️⃣ **Docker:**
  - O Docker entra com o papel de unir todas as partes e subir um projeto completo com um comando só via o `docker-compose`;
  - Você **deve** configurar as `Dockerfiles` nas raízes do `front-end` e `back-end`, copiando os arquivos para a imagem, instalando as dependências e inicializando a aplicação;
  - Seu projeto deve ter um arquivo `app/docker-compose.yml` (você pode criá-lo a partir do `app/docker-compose.example.yml`), você deve garantir que no arquivo:
    - O container_name` do serviço `back-end` é nomeado como `app_backend`;
    - O banco de dados tem sua porta do container `3306` mapeada para as `3002` do `localhost`;
    - O serviço `front-end` tem a porta `3000` do container mapeada para a porta `3000` do `localhost`.
    - Depois de subir o container você pode acessar o `front-end` via `http://localhost:3000/` como os testes farão. 


<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />

  * Projeto individual;
  * Serão `7` dias de projeto;
  * Data de entrega para avaliação final do projeto: `24/06/2022 14:00`.

</details>

# Orientações


## Antes de começar a desenvolver 

Leia essa parte atentamente, pois aqui você encontrará informações importantes para preparar corretamente o setup do projeto.

<details>
  <summary><strong> Iniciando o projeto</strong></summary><br />

  1. Clone o repositório
    * `git clone https://github.com/tryber/sd-016-b-trybe-futebol-clube.git`.
    * Entre na pasta do repositório que você acabou de clonar:
      * `cd sd-016-b-trybe-futebol-clube`

  2. Instale as dependências [**Caso existam**]
    * `npm install`

  3. Crie uma branch a partir da branch `master`
    * Verifique que você está na branch `master`
      * Exemplo: `git branch`
    * Se não estiver, mude para a branch `master`
      * Exemplo: `git checkout master`
    * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
      * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
      * Exemplo: `git checkout -b joaozinho-sd-016-b-trybe-futebol-clube`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
    * Verifique que as mudanças ainda não estão no _stage_
      * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
    * Adicione o novo arquivo ao _stage_ do Git
        * Exemplo:
          * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
          * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
    * Faça o `commit` inicial
        * Exemplo:
          * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
          * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto
    * Usando o exemplo anterior: `git push -u origin joaozinho-sd-016-b-trybe-futebol-clube`

  6. Crie um novo `Pull Request` _(PR)_
    * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-[nome-do-projeto]/pulls)
    * Clique no botão verde _"New pull request"_
    * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
    * Clique no botão verde _"Create pull request"_
    * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
    * **Não se preocupe em preencher mais nada por enquanto!**
    * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-[nome-do-projeto]/pulls) e confira que o seu _Pull Request_ está criado

</details>



<details>
  <summary><strong> Linter</strong></summary><br />

  Para garantir a qualidade do código, usaremos o [ESLint](https://eslint.org/) para fazer a sua análise estática.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

  - `sd-0x-trybe-futebol-clube/app/backend/package.json`

  Para rodar o `ESLint` em um projeto, basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você também pode instalar o plugin do `ESLint` no `VSCode`: bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

⚠️**Atenção:** Pull Requests com issues de linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento.

</details>



<details>
  <summary><strong>⚠️ Configurações mínimas nas máquinas locais para rodar o projeto</strong></summary><br />


Na sua máquina você deve ter:
	
 - Sistema Operacional Distribuição Unix
 - Node versão 16  
 - Docker
 - Docker-compose versão 1.29.2
	
	
➡️ O `node` deve ter versão igual ou superior à `16.15.0 LTS`. 
	* Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
	*Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
		* `nvm install 16 --lts`
		* `nvm use 16`
		* `nvm alias default 16` 

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:
	* Use esse [link de referência para realizar a instalação corretamente no ubuntu](https://app.betrybe.com/course/back-end/docker/orquestrando-containers-com-docker-compose/6e8afaef-566a-47f2-9246-d3700db7a56a/conteudo/0006a231-1a10-48a2-ac82-9e03e205a231/instalacao/abe40727-6310-4ad8-bde6-fd1e919dadc0?use_case=side_bar);
	* Acesse o [link da documentação oficial com passos para desinstalar] (https://docs.docker.com/compose/install/#uninstallation) caso necessário.


</details>


<details>
  <summary><strong>🐳 Configuração Docker</strong></summary><br />

  ### Docker e Docker-compose

  ⚠ O seu docker-compose precisa estar na versão 1.29 ou superior.  ⚠
[Veja aqui a documentação para atualizar o docker-compose.](https://docs.docker.com/compose/install/)

▶️ **Crie os arquivos dockerfile e docker-compose:**

  - As pastas `frontend/` e `backend/` devem possuir um arquivo dockerfile;
  - A pasta `app/` deve possuir um arquivo docker-compose;
  - Os arquivos dockerfile e docker-compose devem estar configurados corretamente.

⚠️ **Atenção:**

- Seu projeto vai conter um arquivo docker-compose.example.yml.
- Seu service do back-end no docker-compose deve ter o `depends_on` exatamente igual ao do arquivo docker-compose.example.yml.
- Use o modelo de serviço do banco de dados que está no arquivo `app/docker-compose.example.yml`, que está igual ao formato abaixo:

 
  ``` yml
  version: '3.9'
  services:
    frontend:
      build: ./frontend
      # ...
      depends_on:
        backend:
          condition: service_healthy
      # Os `healthcheck` devem garantir que a aplicação
      # está operacional, antes de liberar o container
      healthcheck:
        test: ["CMD", "lsof", "-t", "-i:3000"]  # Caso utilize outra porta interna para o front, altere ela aqui também
        timeout: 10s
        retries: 5
    backend:
      build: ./backend
      # ...
      depends_on:
        db:
          condition: service_healthy
      environment:
        - PORT=3001
        # Os dados abaixo se referem ao container `db`
        # Dica: Relembre aqui da comunicação interna entre containers
        - DB_USER=root
        - DB_PASS=123456
        - DB_HOST=db
        - DB_NAME=TRYBE_FUTEBOL_CLUBE
        - DB_PORT=3306
      healthcheck:
        test: ["CMD", "lsof", "-t", "-i:3001"] # Caso utilize outra porta interna para o back, altere ela aqui também
        timeout: 10s
        retries: 5
    db:
      image: mysql:8.0.21
      container_name: db
      ports:
        - 3002:3306
      environment:
        - MYSQL_ROOT_PASSWORD=123456
      restart: 'always'
      healthcheck:
        test: ["CMD", "mysqladmin" ,"ping", "-h", "localhost"] # Deve aguardar o banco ficar operacional
        timeout: 10s
        retries: 5
      cap_add:
        - SYS_NICE # Deve omitir alertas menores
  ```
	
>  👀 **De olho na dica:**
> Lembre-se, você pode revisitar os conteúdos sobre Docker:
> - [Dockerfile](https://app.betrybe.com/course/back-end/docker/manipulacao-e-criacao-de-imagens-no-docker/e92d2393-3508-43ab-8a67-2b2516d25864) (Seção Dockerfile - Comandos Básicos)
> - [docker-compose](https://app.betrybe.com/course/back-end/docker/orquestrando-containers-com-docker-compose/6e8afaef-566a-47f2-9246-d3700db7a56a) (Seção Compose File - Parte I)


  ⚠️ Suas `Dockerfiles`, do _front-end_ e _back-end_, e seu `docker-compose` não serão suficientes para gerar os _containers_. Também será necessário criar as _migrations_ e configurar o _app_ `express` em `app/backend/src/app.ts` para que seu projeto seja executável via Docker. **Por isso implemente os 3 primeiros requisitos para começar a testar o projeto usando o Docker e docker-compose.**

  ⚠️ O avaliador utiliza os mesmos valores das variáveis de ambiente contidas no `docker-compose` (por exemplo `DB_USER`, `DB_PASS`, `DB_HOST`) e as portas que os containers devem utilizar. **Por mais que seja possível alterar algumas delas e ajustar os testes para continuarem funcionais, recomendamos fortemente a não alterá-las.**

</details>

<details>
  <summary><strong>⚠️ Pré-requisitos para uma boa avaliação </strong></summary><br />

 Para que esse projeto faça a avaliação corretamente, **sua aplicação deve ter um funcionamento mínimo**. Isso porque o avaliador **vai executar um teste de usabilidade E2E** (End-to-end, ou Ponto a ponto). 

> Leia mais sobre esse tipo de teste [nesse link](https://app.betrybe.com/course/real-life-engineer/e2e_tests_puppeteer))*, acompanhado de validações adicionais *(Compilação do TypeScript e inicialização do Sequelize)* que podem ser acompanhados pelo uso do script `npm run test:debug`;

 ▶️ **Premissas gerais:**

 Considere que para TODOS OS REQUISITOS, EXCETO os de testes de cobertura:

  - Deve existir uma aplicação de back-end **rodando em um container de nome `app_backend`**;
    - Considere a leitura do dia de *Docker* `Manipulação e Criação de Imagens no Docker` [nesse link](https://app.betrybe.com/course/back-end/docker/manipulacao-e-criacao-de-imagens-no-docker/e92d2393-3508-43ab-8a67-2b2516d25864).
    - ⚠️ Utilize o parâmetro `container_name` no seu serviço para customizar e forçar o nome do mesmo:
  ``` yml
  #...

    backend:
      # ...
      container_name: app_backend
      # ...

  # ...
  ```

  - O container `app_backend` deve ser capaz **de se comunicar com outro container rodando um banco de dados mysql**;
    - Considere a leitura do dia de *Docker* `Orquestrando Containers com Docker Compose` [nesse link](https://app.betrybe.com/course/back-end/docker/orquestrando-containers-com-docker-compose/6e8afaef-566a-47f2-9246-d3700db7a56a).

  - Dentro do container `app_backend`, o avaliador irá verificar:
    - **Que é possível rodar o `tsc` ("TypeScript Compiler") sem erros**, através do script `build`, da própria aplicação back-end;
    - **Que o `tsc` deve gerar um arquivo `./build/database/config/database.js`** dentro do container `app_backend`;
      - Considere a leitura da seção `Bônus: Model com Sequelize` no conteúdo de *TypeScript*: `Tipagem Estática e Generics` [nesse link](https://app.betrybe.com/course/back-end/typescript/tipagem-estatica-e-generics/68eccf60-a982-4455-837d-da31e8726be5).
    - **Que é possível restaurar e popular o banco de dados** utilizando o `sequelize-cli`, a partir do arquivo de configuração `./build/database/config/database.js`, utilizando o script `db:reset`, da própria aplicação back-end.
      - ⚠️ Note:
        -  Os seeds já foram providos em `./app/backend/src/database/seeders`, **porém, precisam ser renomeados** *(remoção do underline (`_`), do final do arquivo)* para que possam ser reconhecidos pelo `sequelize-cli`, a medida que as respectivas `migrations` forem criadas;
        -  Existe uma `migration` com nome `./app/backend/src/database/migrations/99999999999999-create-z.js` responsável por indicar que o banco foi criado corretamente e está funcionando. **Não apague ou renomeie essa migration**,

  ⚠️ **A partir do 5º requisito**, a aplicação de front-end deve estar **rodando em um container**, de forma que a mesma tentará consumir sua aplicação back-end (**que deve estar saudável**, considerando os pontos anteriores).

</details>


## Durante o desenvolvimento 

Aqui você encontrará orientações e dicas que ajudarão muito no desenvolvimento do projeto. Sempre que tiver dúvidas ou bugs aparecerem, dê uma olhada aqui. 👀

<details>
  <summary><strong>⌨️ Boas práticas</strong></summary><br/>

</br>

* Versione seu projeto

  * Faça `commits` das alterações que você fizer no código regularmente;

  * Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto.

  * Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;
    2. `git add` _(para adicionar arquivos ao stage do Git)_;
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>

<details>
  <summary><strong>⚠️ Inicialização do compose e verificação dos logs das aplicações </strong></summary><br />

  - Considerando o uso do parâmetro `healthcheck` em cada container do seu `docker-compose.yml`, a inicialização dos containers deve aguardar o comando de status de saúde (o que valida se aquele container está operacional ou não):
    - No container `db`, representado por um comando `ping` no banco de dados;
    - No back-end, representado por um comando `lsof`, que vai procurar aplicações ativas na porta definida (por padrão, no caso `3001`);
    - No front-end, representado por um comando `lsof`, que vai procurar aplicações ativas na porta definida (por padrão, no caso `3000`).

  - Caso os containers respeitem as premissas anteriores, os mesmos devem ser criados sem maiores problemas:

  ![Criação dos containers concluída com sucesso!](assets/compose-status-01.png)


  - No compose, não há necessidade de parar e/ou reiniciar containers que não tiveram alterações. Em caso de alteração somente da imagem do back-end, basta utilizar, a partir da raiz, o comando `npm run compose:up`.
    - Na prática, o comando deve rodar, a partir da pasta `./app` (onde deve residir seu `docker-compose.yml`), o comando `docker-compose up -d --build`. Esse comando forçará o re-build da imagem da aplicação `back-end`:

  ![Re-criação do container do back-end](assets/compose-status-02.png)

  - Em caso de algum problema (no back-end, por exemplo), você deve se deparar com alguma mensagem do tipo:

  ![Erro no status de saúde do container do back-end](assets/compose-status-03.png)

  > ⚠️ Lembre-se, não cabe ao avaliador de usabilidade dizer qual é o problema específico na sua aplicação, **portanto, cabe aqui investigar o problema**, sempre considerando as premissas anteriores.

  - Nesse caso, a partir da pasta `./app` (onde está seu *docker-compose*), é possível rodar o comando `docker-compose logs` (Para ver todos os status) ou `docker-compose logs <nome-do-seu-serviço>` (Para mostrar somente o de um escopo específico).
    - ⚠️ é indicado remover o parâmetro `restart: 'always'` do seu serviço, para que o mesmo não polua seus logs;
    - No nosso contexto, rodando o comando `docker-compose logs backend`:

  ![docker-compose logs backend](assets/compose-status-04.png)

  > Aqui não houve problema com o `tsc`, porém a senha para acesso ao banco pelo sequelize estava errada.



 #### ⚠️ **Inicie seu `docker-compose` antes de testar localmente!** ⚠️

  Os testes vão utilizar a sua aplicação do compose para fazer as validações, portanto **é essencial que ela esteja funcionando corretamente** para que os testes passem!

  - Para isso, garanta que as aplicações, tanto do back, quanto do front-end, possuem arquivos `Dockerfile` válidos;
  - Utilize os scripts de apoio `npm run compose:up` / `npm run compose:down`, para facilitar a execução do seu *compose*.

</details>

<details>

  <summary><strong><h4> Variáveis de ambiente </h4></strong></summary><br/>


 - Você vai precisar configurar as variáveis globais do MySQL. Portanto, use esse [conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

 - Faça essas configurações também para as variáveis de ambiente usadas nesses arquivos:

  `sd-0x-trybe-futebol-clube/app/backend/src/database/config/database.ts`

  ```
  module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: TRYBE_FUTEBOL_CLUBE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  };

  ```

 ⚠️ Neste arquivo é obrigatório deixar o nome da database como `"database": 'TRYBE_FUTEBOL_CLUBE'`.

  - É essencial usar essas 3 variáveis no arquivo acima:**
	* `host: process.env.DB_HOST`;
	* `user: process.env.DB_USER`;
	* `password: process.env.DB_PASS`.

> Com essas variáveis conseguiremos fazer a conexão ao banco do avaliador automático.

  **⚠️ Variáveis de ambiente além das especificadas acima não são suportadas, pois não são esperadas pelo avaliador do projeto. ⚠️**


</details>


<details>
  <summary><h4><strong> Sequelize </strong></h4></summary><br/>

  Para o desenvolvimento, o time de produto disponibilizou um *Diagrama de Entidade-Relacionamento (DER)* para construir a modelagem do banco de dados. Com essa imagem você já consegue saber:
  - Como nomear suas tabelas e colunas;
  - Quais são os tipos de suas colunas;
  - Relações entre tabelas.

    ![Exemplo banco de dados](assets/er-diagram.png)

> 👀 **De olho na dica:** também é possível buscar referências nas seeds providas no projeto em `./app/backend/src/database/seeders`.

</details>

 
<details>

  <summary><h4><strong> Chave JWT e criptografia de senhas </strong></h4></summary><br/>


  - A sua chave `JWT` deve ser inserida em `app/backend/jwt.evaluation.key` e deve ser carregada no back-end com o uso da biblioteca `fs`.

- A biblioteca utilizada para criptografar a senha no banco de dados é a `bcryptjs` [bcryptjs npm](https://www.npmjs.com/package/bcryptjs). Utilize especificamente essa biblioteca, que pode ser colocada como dependência em `app/backend/package.json`. Lembre-se de adicioná-la depois em `app/backend/packages.npm` para que o avaliador realize a instalação dela no projeto para avaliação.
	  
</details>

<details>

 <summary><h4> Testes de cobertura </h4></summary><br/>


  A construção de testes de cobertura no back-end deve ser feita em *TypeScript*, utilizando `mocha`, `chai` e `sinon`, na pasta `app/backend/src/tests/`, conforme o exemplo em `app/backend/src/tests/change.me.test.ts` *(aqui considerando um teste de integração)*:

  ```typescript
  import * as sinon from 'sinon';
  import * as chai from 'chai';
  // @ts-ignore
  import chaiHttp = require('chai-http');

  import { app } from '../app';
  import Example from '../database/models/ExampleModel';

  import { Response } from 'superagent';

  chai.use(chaiHttp);

  const { expect } = chai;

  describe('Seu teste', () => {
    /**
     * Exemplo do uso de stubs com tipos
     */

    // let chaiHttpResponse: Response;

    // before(async () => {
    //   sinon
    //     .stub(Example, "findOne")
    //     .resolves({
    //       ...<Seu mock>
    //     } as Example);
    // });

    // after(()=>{
    //   (Example.findOne as sinon.SinonStub).restore();
    // })

    // it('...', async () => {
    //   chaiHttpResponse = await chai
    //      .request(app)
    //      ...

    //   expect(...)
    // });

    it('Seu sub-teste', () => {
      expect(false).to.be.eq(true);
    });
  });
  ```

Os testes devem cobrir todos os arquivos contidos em `app/backend/src`, com exceção daqueles que já foram entregues com o projeto.

Para rodar testes de cobertura no seu back-end, utilize o comando: `npm run test:coverage`

</details>

 <details>

  <summary><h4><strong> 👀 Dicas e comandos úteis </strong></h4></summary><br/>


  - Ao rodar o comando `npm install` na pasta raiz do projeto você automaticamente estará **instalando suas aplicações (front e back)**;
  - Você pode **instalar suas aplicações (front e back)** rodando o comando `npm run install:apps` na pasta raiz do projeto;
  - Você pode rodar o avaliador **mostrando as operações que o navegador vai fazer no front-end** durante os testes E2E utilizando o comando `npm run test:browser`;
  - Você pode **debugar alguns erros do avaliador** (como por exemplo a validação do banco de dados, ou da compilação do TS), onde são *printadas* na tela algumas infos adicionais, utilizando o comando `npm run test:debug`;
  - Você pode **subir ou descer uma aplicação do compose**, utilizando `npm run` com os scripts `compose:up`, `compose:down`;
  - Para criação da API com TS + POO, **recomenda-se fazer ou relembrar os exercícios** do conteúdo de POO e SOLID, especificamente o do dia de `SOLID - Introdução e Princípios S, O e D`, [nesse link](https://app.betrybe.com/course/back-end/poo-solid/solid-introducao-e-principios-s-o-e-d/d63831d8-f791-447d-9227-29e3b0ad6130/exercicios/afe9bcbb-769e-4a68-9e67-9267f631f83d).

</details>

	
## Depois de terminar o desenvolvimento

Aqui você encontra orientações opcionais para seguir após o desenvolvimento do projeto e finalizar com "chave de ouro". 🔑


<details>
  <summary><strong>🤝 Como entregar o projeto?</strong></summary><br/>

  Para "entregar" seu projeto, siga os passos a seguir:

  - Vá até a página DO SEU Pull Request, adicione a label de "code-review" e marque seus colegas
    - No menu à direita, clique no *link* "Labels" e escolha a label code-review
    - No menu à direita, clique no *link* "Assignees" e escolha o seu usuário
    - No menu à direita, clique no *link* "Reviewers" e digite students, selecione o time tryber/students-sd-0x

 ➡️ Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠️**Atenção:** lembre-se de garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. 
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

⚠️**Atenção** o avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

<br/>
	


# Requisitos

## Database

#### Dicas para começar a seção de Database 👀
  - Comece rodando o comando `npm run build` na pasta do `back-end` para buildar a aplicação
  - [Nessa seção](#Sequelize) temos o diagrama de entidades;
  - Mantenha o arquivo `/app/backend/src/database/migrations/99999999999999-create-z.js`, pois ele é necessário para a avaliação dos requisitos dessa seção.
  - a leitura da seção `Bônus: Model com Sequelize` no conteúdo de `TypeScript: Tipagem Estática e Generics`, contido [nesse link](https://app.betrybe.com/course/back-end/typescript/tipagem-estatica-e-generics/68eccf60-a982-4455-837d-da31e8726be5), é recomendável!
	
### 1 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `teams`

  - O avaliador consultará os dados da tabela teams, verificando se ela contém os dados iniciais corretos.


### 2 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de `matches`

  - O avaliador consultará os dados da tabela matches, verificando se ela contém os dados iniciais corretos.

### 3 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela `users`

  - O avaliador consultará os dados da tabela users, verificando se ela contém os dados iniciais corretos.

## Login

- A rota deve ser (`/login`);

- A rota deve receber os campos `email` e `password` e esses campos devem ser validados no banco de dados:
  - O campo `email` deve receber um email válido;
  - O Campo `password` deve ter mais de 6 caracteres.

- Sua chave `JWT` do back-end, utilizada para assinatura do token, deve ser salva no arquivo `app/backend/jwt.evaluation.key`. Ela pode ser carregada em sua aplicação utilizando a biblioteca `fs` e é necessária para passar nos testes. Veja mais sobre isso na [seção sobre JWT](#Chave-JWT-e-criptografia-de-senhas);

- As senhas que existem no banco de dados estão encriptadas. Essa é a forma segura de guardar senhas, portnato use o `bcryptjs` para comparar a senha do banco com a recebida no corpo da requisição. [Essa biblioteca](https://www.npmjs.com/package/bcryptjs) já está instalada nas dependências do projeto. 


- O body da requisição deve conter o seguinte formato:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### 4 - (`TDD`) Desenvolva testes que cubram no mínimo 5% dos arquivos back-end em `/src`, com um mínimo de 7 linhas cobertas

  **Sugestões:**
  - Baseando-se no contrato do endpoint `/login` **do próximo requisito**, inicie um teste de integração utilizando a metodologia `TDD` com a implementação do requisito seguinte;
  - Nesse primeiro momento, foque em desenvolver o que pede o requisito, progredindo gradualmente a partir disso;
  - Para tanto, utilize/altere o arquivo de referência `app/backend`/src`/tests/change.me.test.ts`;
  - Veja a seção de [Testes de cobertura](#Testes-de-cobertura) para mais detalhes.

### 5 - Desenvolva o endpoint `/login` no back-end de maneira que ele permita o acesso com dados válidos no front-end

  - A rota de ser do tipo `POST`;

  - O avaliador verificará se é possível fazer o login com dados corretos e que após o acesso será redirecionado para a tela de jogos.

- Se o login foi feito com sucesso, o resultado retornado deverá ser similar ao exibido abaixo, com um status http `200`:
	
  ```json
  {
    "user": {
      "id": 1,
      "username": "Admin",
      "role": "admin",
      "email": "admin@admin.com"
    },
    "token": "123.456.789" // Aqui deve ser o token gerado pelo backend.
  }
  ```

### 6 - (`TDD`) Desenvolva testes que cubram no mínimo 10% dos arquivos back-end em `/src`, com um mínimo de 19 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 7 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com um email inválido no front-end

  - O avaliador verificará se fazer o login com um email incorreto retornará status não-autorizado.

  - Se o login tiver o "email" **inválido**, o resultado retornado será similar ao exibido abaixo, com um status http `401`:
	
  ```json
    { "message": "Incorrect email or password" }
  ```

### 8 - (`TDD`) Desenvolva testes que cubram no mínimo 15% dos arquivos back-end em `/src`, com um mínimo de 25 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 9 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com uma senha inválida no front-end

  - O avaliador verificará se fazer o login com uma senha incorreta retornará status não-autorizado.

  - Se o login tiver a "senha" **inválida** o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:
	
  ```json
    { "message": "Incorrect email or password" }
  ```

### 10 - (`TDD`) Desenvolva testes que cubram no mínimo 20% dos arquivos back-end em `/src`, com um mínimo de 35 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 11 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso sem informar um email no front-end

  - O avaliador verificará se ao tentar fazer o login sem um email, haverá o retorno de status não-autorizado.

 - Se o login não tiver o campo "email", o resultado retornado deverá ser a mensagem abaixo, com um status http `400`:
	
  ```json
    { "message": "All fields must be filled" }
  ```

### 12 - (`TDD`) Desenvolva testes que cubram no mínimo 30% dos arquivos back-end em `/src`, com um mínimo de 45 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **os contratos dos próximos dois requisitos**.

### 13 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso sem informar uma senha no front-end

  - O avaliador verificará se ao tentar fazer login sem senha, o retorno será status não-autorizado.

  - Se o login não tiver o campo "password", o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
	
  ```json
    { "message": "All fields must be filled" }
  ```

### 14 - Desenvolva o endpoint `/login/validate` no back-end de maneira que ele retorne os dados corretamente no front-end

  - Deve ser uma rota `GET` que receba um `header` com parâmetro `authorization`, onde ficará armazenado o token gerado no login;

  - O avaliador verificará se ao tentar bater na rota com um token válido, o mesmo retornará o tipo de usuário.

  - A resposta deve ser de status `200` com uma `string` contendo a `role` do *user*:
	
  ```plaintext
    "admin"
  ```

## Jogos

 - Os requisitos a seguir consideram o consumo da rota `/teams` para retornar os nomes dos times associados à partida na renderização do front-end

### 15 - (`TDD`) Desenvolva testes que cubram no mínimo 45% dos arquivos back-end em `/src`, com um mínimo de 70 linhas cobertas

  **Sugestão:**
  - Crie um novo teste de integração, agora da sua rota `/teams`, utilizando o método `TDD`, considerando **os contratos dos próximos dois requisitos**.

### 16 - Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar todos os times corretamente

  - Deve ser uma rota `GET` com resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
[
	{
		"id": 1,
		"teamName": "Avaí/Kindermann"
	},
	{
		"id": 2,
		"teamName": "Bahia"
	},
	{
		"id": 3,
		"teamName": "Botafogo"
	},
	...
]
```

### 17 - Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico

  - Deve ser uma rota `GET` com resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
{
	"id": 5,
	"teamName": "Cruzeiro"
}
```

### 18 - (`TDD`) Desenvolva testes que cubram no mínimo 60% dos arquivos back-end em `/src`, com um mínimo de 80 linhas cobertas

  **Sugestão:**
  - Crie um novo teste de integração, agora da sua rota `/matches`, utilizando o método `TDD`, agora considerando **os contratos dos próximos três requisitos**.


### 19 - Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end.

  - A rota deve ser um `GET` e retorna uma lista de partidas;

  - Será validado que a página apresentará todos os dados de partidas sem nenhum filtro.

    Exemplo de retorno:
    ```json
    [
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      },
      ...
      {
        "id": 41,
        "homeTeam": 16,
        "homeTeamGoals": 2,
        "awayTeam": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Internacional"
        }
      }
    ]
    ```

### 20 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas em andamento na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que ao escolher a opção de partidas em andamento serão filtradas todas as partidas em andamento;

  - Essa requisição deverá usar `query string` para definir o parâmetro.
    ex: `matches?inProgress=true`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 42,
      "homeTeam": 6,
      "homeTeamGoals": 1,
      "awayTeam": 1,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "Ferroviária"
      },
      "teamAway": {
        "teamName": "Avaí/Kindermann"
      }
    }
  ]
  ```

### 21 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas finalizadas na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que ao escolher a opção de partidas finalizadas serão filtradas todas as partidas finalizadas;

  - Essa requisição deverá usar `query string` para definir o parâmetro:
    ex: `matches?inProgress=false`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "Internacional"
      },
      "teamAway": {
        "teamName": "Santos"
      }
    }
  ]
  ```

## Adicionar Partidas

  - Para os requisitos de criação de partidas, é necessário que a rota `/teams` funcione corretamente.

### 22 - (`Bônus`; `TDD`) Desenvolva testes que cubram no mínimo 80% dos arquivo back-end em `/src`, com um mínimo de 100 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/matches`, utilizando o método `TDD`, agora considerando **o contrato dos próximos requisitos**.

### 23 - Desenvolva a rota `/matches` de modo que seja possível salvar uma partida com o status de inProgress como true no banco de dados

  - A rota deverá ser do tipo `POST` e retornar a partida inserida no banco de dados;

  - Será validado que é possível salvar um jogo no banco de dados e ver o jogo na página de jogos;

  - A partida só pode ser criada com token JWT validado;

  - O corpo da requisição terá o seguinte formato:
	
  ```json
  {
    "homeTeam": 16, // O valor deve ser o id do time
    "awayTeam": 8, // O valor deve ser o id do time
    "homeTeamGoals": 2,
    "awayTeamGoals": 2, 
    // a partida deve ser criada como em progresso por padrão
  }
  ```

  - Caso a partida seja inserida com sucesso, deve-se retornar os dados da partida, com _status_ `201`:

  ```json
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 2,
    "inProgress": true,
  }
  ```

### 24 - Desenvolva a rota `/matches/:id/finish` de modo que seja possível salvar uma partida com o status de inProgress como false no banco de dados

  - A rota deve ser do tipo `PATCH`;

  - Será recebido o `id` pelo parâmetro da URL;

  - Será validado que ao finalizar uma partida, a alteração é feita no banco de dados e na página.
  
  - Necessita da implementação da rota `POST /matches`. 
	
  - Deve-se retornar, com um status `200`, a seguinte mensagem:

  ```json
  { "message": "Finished" }
  ```

### 25 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais

  - Será validado que não é possível inserir uma partida com times iguais;

  - Não deve ser possível criar uma partida com o mesmo time, por exemplo: Barcelona x Barcelona. Caso isso ocorra, deve-se retornar, com um status `401`, a seguinte mensagem::

  ```json
  { "message": "It is not possible to create a match with two equal teams" }
  ```

### 26 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com um time que não existe na tabela teams

  - Será validado que não é possível inserir uma partida com um time que não existe na tabela teams;

  - Caso algum dos times não esteja cadastrado no banco de dados, deve-se retornar, com um status `404,` a seguinte mensagem:

  ```json
  { "message": "There is no team with such id!" }
  ```

## Editar Partidas

### 27 - Desenvolva o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento

  - O endpoint deve ser do tipo `PATCH`;

  - Será recebido o `id` pelo parâmetro da URL;

  - Será avaliado que é possível alterar o resultado de uma partida.

  - O corpo da requisição terá o seguinte formato:
  ```json
  {
    "homeTeamGoals": 3,
    "awayTeamGoals": 1
  }
  ```
  - Será avaliado que é o endpoint responde à requisição com um status `200` e qualquer corpo.

### 28 - Desenvolva o endpoint `/matches/:id` de forma que seja possível finalizar partidas em andamento

  - O endpoint deve ser do tipo `PATCH`;

  - Será recebido o `id` pelo parâmetro da url;

  - Será avaliado que é possível finalizar uma partida em andamento.

  - Será avaliado que o endpoint responde à requisição com um status `200` e qualquer corpo.

## Leaderboards (placares)

 ▶️ Para construir a classificação dos times, devem ser seguidas as seguintes regras de negócios:

    - `Classificação`: Posição na classificação;
    - `Time`: Nome do time;
    - `P`: Total de Pontos;
    - `J`: Total de Jogos;
    - `V`: Total de Vitórias;
    - `E`: Total de Empates;
    - `D`: Total de Derrotas;
    - `GP`: Gols marcados a favor;
    - `GC`: Gols sofridos;
    - `SG`: Saldo total de gols;
    - `%`: Aproveitamento do time.

    <br/>

  - Todas as regras de negócio e cálculos necessários deverão ser realizados no seu back-end. A aplicação front-end apenas renderizará essas informações.

  - Para calcular o `Total de Pontos` você deve levar em consideração que:

    - O time `vitorioso`: marcará +3 pontos;
    - O time `perdedor`: marcará 0 pontos;
    - Em caso de `empate`: ambos os times marcam +1 ponto.

  - Para o campo `Aproveitamento do time (%)`, que é a porcentagem de jogos ganhos, use a seguinte fórmula: `P/(J*3)*100`, onde:

    - `P`: Total de Pontos;
    - `J`: Total de Jogos.

    Obs.: O seu resultado deverá ser limitado a `duas casas decimais`.

  - O resultado deverá ser ordenado sempre de forma decrescente, levando em consideração a quantidade de pontos que o time acumulou. Em caso de empate no `Total de Pontos`, você deve levar em consideração os seguintes critérios para desempate:

  **Ordem para desempate**

  1º Total de Vitórias;
  2º Saldo de gols;
  3º Gols a favor;
  4º Gols sofridos.


  ⚠️ **Atenção:** ⚠️

  - Por padrão, as respostas de todos os seus endpoints deverão estar em inglês, mesmo que a renderização no front-end seja em português.
  - A sua tabela deverá renderizar **somente** as PARTIDAS que já foram FINALIZADAS!
  
**Os seguintes pontos serão avaliados:**

  ```
  - Se a lista de classificação está correta;
  - Se a regra de classificação se mantém mesmo com mudanças na classificação;
  - Se a tabela de classificação tem 10 colunas;
  - Se a tabela tem uma linha para cada time.
  ```

**Exemplo de retorno esperado:**

  ```json
  [
    {
      "name": "Palmeiras",
      "totalPoints": 13,
      "totalGames": 5,
      "totalVictories": 4,
      "totalDraws": 1,
      "totalLosses": 0,
      "goalsFavor": 17,
      "goalsOwn": 5,
      "goalsBalance": 12,
      "efficiency": 86.67
    },
    {
      "name": "Corinthians",
      "totalPoints": 12,
      "totalGames": 5,
      "totalVictories": 4,
      "totalDraws": 0,
      "totalLosses": 1,
      "goalsFavor": 12,
      "goalsOwn": 3,
      "goalsBalance": 9,
      "efficiency": 80
    },
    {
      "name": "Santos",
      "totalPoints": 11,
      "totalGames": 5,
      "totalVictories": 3,
      "totalDraws": 2,
      "totalLosses": 0,
      "goalsFavor": 12,
      "goalsOwn": 6,
      "goalsBalance": 6,
      "efficiency": 73.33
    },
    ...
  ]
  ```


## Leaderboard Home

### 29 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/home` serão retornados os campos e valores corretos, considerando os dados iniciais do banco de dados.
	

  <details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
    {
      name: 'Santos',
      totalPoints: '9',
      totalGames: '3',
      totalVictories: '3',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '9',
      goalsOwn: '3',
      goalsBalance: '6',
      efficiency: '100'
    },
    {
      name: 'Palmeiras',
      totalPoints: '7',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '1',
      totalLosses: '0',
      goalsFavor: '10',
      goalsOwn: '5',
      goalsBalance: '5',
      efficiency: '77.78'
    },
    {
      name: 'Corinthians',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '6',
      goalsOwn: '1',
      goalsBalance: '5',
      efficiency: '100'
    },
    {
      name: 'Grêmio',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '4',
      goalsOwn: '1',
      goalsBalance: '3',
      efficiency: '100'
    },
    {
      name: 'Real Brasília',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '0',
      goalsBalance: '2',
      efficiency: '100'
    },
    {
      name: 'São Paulo',
      totalPoints: '4',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '0',
      goalsFavor: '4',
      goalsOwn: '1',
      goalsBalance: '3',
      efficiency: '66.67'
    },
    {
      name: 'Internacional',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '6',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Botafogo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '2',
      goalsOwn: '4',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Ferroviária',
      totalPoints: '3',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '3',
      goalsOwn: '2',
      goalsBalance: '1',
      efficiency: '50'
    },
    {
      name: 'Napoli-SC',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '2',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Cruzeiro',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '2',
      goalsOwn: '3',
      goalsBalance: '-1',
      efficiency: '16.67'
    },
    {
      name: 'Flamengo',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '2',
      goalsBalance: '-1',
      efficiency: '16.67'
    },
    {
      name: 'Minas Brasília',
      totalPoints: '1',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '2',
      goalsFavor: '3',
      goalsOwn: '6',
      goalsBalance: '-3',
      efficiency: '11.11'
    },
    {
      name: 'Avaí/Kindermann',
      totalPoints: '1',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '2',
      goalsFavor: '3',
      goalsOwn: '7',
      goalsBalance: '-4',
      efficiency: '11.11'
    },
    {
      name: 'São José-SP',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '2',
      goalsOwn: '5',
      goalsBalance: '-3',
      efficiency: '0'
    },
    {
      name: 'Bahia',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '0',
      goalsOwn: '4',
      goalsBalance: '-4',
      efficiency: '0'
    }
]
```
</details>

### 30 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível: filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

  - O retorno deve continuar como no [leaderboard](#leaderboards), ordenando corretamente como na explicação;

  - Será avaliado que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint `/leaderboard/home`, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Santos',
    totalPoints: '9',
    totalGames: '3',
    totalVictories: '3',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '9',
    goalsOwn: '3',
    goalsBalance: '6',
    efficiency: '100'
  },
  {
    name: 'Corinthians',
    totalPoints: '9',
    totalGames: '3',
    totalVictories: '3',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '8',
    goalsOwn: '2',
    goalsBalance: '6',
    efficiency: '100'
  },
  {
    name: 'Palmeiras',
    totalPoints: '7',
    totalGames: '3',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '10',
    goalsOwn: '5',
    goalsBalance: '5',
    efficiency: '77.78'
  },
  {
    name: 'Grêmio',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '4',
    goalsOwn: '1',
    goalsBalance: '3',
    efficiency: '100'
  },
  {
    name: 'Real Brasília',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '0',
    goalsBalance: '2',
    efficiency: '100'
  },
  {
    name: 'São Paulo',
    totalPoints: '4',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '4',
    goalsOwn: '1',
    goalsBalance: '3',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '4',
    goalsOwn: '6',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '2',
    goalsOwn: '4',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '3',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '3',
    goalsOwn: '2',
    goalsBalance: '1',
    efficiency: '50'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '2',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '2',
    goalsOwn: '3',
    goalsBalance: '-1',
    efficiency: '16.67'
  },
  {
    name: 'Flamengo',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '2',
    goalsBalance: '-1',
    efficiency: '16.67'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '1',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '3',
    goalsOwn: '6',
    goalsBalance: '-3',
    efficiency: '11.11'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '1',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '3',
    goalsOwn: '7',
    goalsBalance: '-4',
    efficiency: '11.11'
  },
  {
    name: 'São José-SP',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '0'
  },
  {
    name: 'Bahia',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    goalsFavor: '0',
    goalsOwn: '4',
    goalsBalance: '-4',
    efficiency: '0'
  }
]
```
</details>

## Leaderboard away

### 31 - Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível filtrar as classificações dos times na tela de classificação do front-end, com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/away`, serão retornados os campos e valores corretos considerando os dados iniciais do banco de dados.
	
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '7',
    goalsOwn: '0',
    goalsBalance: '7',
    efficiency: '100'
  },
  {
    name: 'Corinthians',
    totalPoints: '6',
    totalGames: '3',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '6',
    goalsOwn: '2',
    goalsBalance: '4',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '0',
    goalsBalance: '3',
    efficiency: '100'
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '1',
    goalsBalance: '2',
    efficiency: '100'
  },
  {
    name: 'São Paulo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '5',
    goalsBalance: '0',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '4',
    goalsOwn: '5',
    goalsBalance: '-1',
    efficiency: '44.44'
  },
  {
    name: 'Real Brasília',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '3',
    goalsOwn: '4',
    goalsBalance: '-1',
    efficiency: '44.44'
  },
  {
    name: 'Grêmio',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '7',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Flamengo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '3',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '3',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '1',
    goalsBalance: '0',
    efficiency: '50'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '3',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '2',
    goalsFavor: '6',
    goalsOwn: '7',
    goalsBalance: '-1',
    efficiency: '33.33'
  },
  {
    name: 'Santos',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '3',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '2',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '3',
    goalsBalance: '-2',
    efficiency: '16.67'
  },
  {
    name: 'Botafogo',
    totalPoints: '0',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '2',
    goalsFavor: '1',
    goalsOwn: '4',
    goalsBalance: '-3',
    efficiency: '0'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '1',
    goalsOwn: '10',
    goalsBalance: '-9',
    efficiency: '0'
  }
  ]
```
</details>

### 32 - Desenvolva o endpoint `/leaderboard/away` de forma que seja possível: filtrar as classificações dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint `/leaderboard/away`, serão retornados os campos e valores corretos.
	
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
    {
      name: 'Palmeiras',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '7',
      goalsOwn: '0',
      goalsBalance: '7',
      efficiency: '100'
    },
    {
      name: 'Corinthians',
      totalPoints: '6',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '6',
      goalsOwn: '2',
      goalsBalance: '4',
      efficiency: '66.67'
    },
    {
      name: 'Internacional',
      totalPoints: '6',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '2',
      goalsBalance: '2',
      efficiency: '66.67'
    },
    {
      name: 'São José-SP',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '3',
      goalsOwn: '1',
      goalsBalance: '2',
      efficiency: '100'
    },
    {
      name: 'São Paulo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '5',
      goalsOwn: '5',
      goalsBalance: '0',
      efficiency: '44.44'
    },
    {
      name: 'Ferroviária',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '5',
      goalsBalance: '-1',
      efficiency: '44.44'
    },
    {
      name: 'Real Brasília',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '3',
      goalsOwn: '4',
      goalsBalance: '-1',
      efficiency: '44.44'
    },
    {
      name: 'Grêmio',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '5',
      goalsOwn: '7',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Flamengo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '3',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Avaí/Kindermann',
      totalPoints: '3',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '1',
      goalsBalance: '0',
      efficiency: '50'
    },
    {
      name: 'Cruzeiro',
      totalPoints: '3',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '2',
      goalsFavor: '6',
      goalsOwn: '7',
      goalsBalance: '-1',
      efficiency: '33.33'
    },
    {
      name: 'Santos',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '3',
      goalsOwn: '3',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Bahia',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '2',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Minas Brasília',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '3',
      goalsBalance: '-2',
      efficiency: '16.67'
    },
    {
      name: 'Botafogo',
      totalPoints: '0',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '2',
      goalsFavor: '1',
      goalsOwn: '4',
      goalsBalance: '-3',
      efficiency: '0'
    },
    {
      name: 'Napoli-SC',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '1',
      goalsOwn: '10',
      goalsBalance: '-9',
      efficiency: '0'
    }
  ]
```
</details>


## Leaderboard

  - Esse endpoint vai alimentar uma tabela idêntica ao exemplo abaixo no front-end :

    | Classificação |   Time    | P  | J  | V  | E | D | GP | GC | SG | %    |
    |---------------|-----------|----|----|----|---|---|----|----|----|------|
    |      1        |Corinthians| 38 | 15 | 12 | 2 | 1 | 44 | 13 | 31 | 84.4 |


### 33 - Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard`, serão retornados os campos e valores corretos considerando os dados iniciais do banco de dados.
	
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
 [
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67',
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80',
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33',
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33',
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '7',
    goalsOwn: '7',
    goalsBalance: '0',
    efficiency: '46.67',
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40',
  },
  {
    name: 'Flamengo',
    totalPoints: '5',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '33.33',
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67',
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67',
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67',
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33',
  },
  {
    name: 'Minas Brasília',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '9',
    goalsBalance: '-5',
    efficiency: '13.33',
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '12',
    goalsBalance: '-9',
    efficiency: '13.33',
  },
];

```
</details>

### 34 - Desenvolva o endpoint /leaderboard de forma que seja possível: filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC

  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Flamengo 3 X 0 Napoli-SC e fazer a requisição ao endpoint /leaderboard, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67'
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80'
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33'
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33'
  },
  {
    name: 'Flamengo',
    totalPoints: '8',
    totalGames: '6',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '5',
    goalsOwn: '5',
    goalsBalance: '0',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '7',
    goalsOwn: '7',
    goalsBalance: '0',
    efficiency: '46.67'
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67'
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67'
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '9',
    goalsBalance: '-5',
    efficiency: '13.33'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '6',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '4',
    goalsFavor: '3',
    goalsOwn: '15',
    goalsBalance: '-12',
    efficiency: '11.11'
  }
]
```
</details>


### 35 - Desenvolva o endpoint /leaderboard de forma que seja possível: filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Minas Brasília 1 X 0 Ferroviária
	
  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Minas Brasília 1 X 0 Ferroviária e fazer a requisição ao endpoint /leaderboard, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67',
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80',
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33',
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33',
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '6',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '7',
    goalsOwn: '8',
    goalsBalance: '-1',
    efficiency: '38.89',
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40',
  },
  {
    name: 'Flamengo',
    totalPoints: '5',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '33.33',
  },
  {
    name: 'Minas Brasília',
    totalPoints: '5',
    totalGames: '6',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '9',
    goalsBalance: '-4',
    efficiency: '27.78',
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67',
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67',
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67',
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33',
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '12',
    goalsBalance: '-9',
    efficiency: '13.33',
  },
]
```
</details>

