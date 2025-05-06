# Node,Prisma, TypeScript, Fastify

Extensões: [ Eslint, Prisma ]
          settings.json
          - Eslint:
            "editor.codeActionsOnSave": {
              "source.fixAll.eslint": "explicit"
            },
          - Prisma:
            "[prisma]": {
            "editor.defaultFormatter": "Prisma.prisma",
            "editor.formatOnSave": true
            },


../BackEnd
      $ npm init -y
      $ npm i typescript @types/node -D
      $ npx tsc --init

      Acessar o "https://github.com/tsconfig/bases"
        Encontre uma configuraçao basica compativel com sua versao de NODE.
          ex: Node 22	 = @tsconfig/node22
        Copie e substitua pelo que tiver sido criado pelo [tsc --init] no seu 
        [tsconfig.json]

      $ npm i tsx -D
      Node nao entende Typescript, esse comando permite a transpilação do 
      typescript para javascript {instalado como dep. de desenvolvimento}.
      
      $ npm i fastify
      Instala o framework fastify para usar o nosso backend.
      https://fastify.dev/docs/latest/Guides/Getting-Started/

      $ npm i prisma -D
      Instala o Prisma como dependencia de desenvolvimento, para trabalharmos 
      com banco de dados, responsavel tambem pela automatizacao de manutencoes 
      no banco, criação de tabelas/colunas, deforma indireta no banco e tb para 
      escrita de query`s no banco.

      $ npm install @prisma/client
      Instala o cliente do Prisma
      
      $ npm prisma init --datasource-provider mysql  
      Inicializa o prisma definindo uso do mysql com banco.
      ou 
      $ npx prisma init
      Executa o pacote de inicializacao do prisma sem definir um banco sem definir
      um banco, caso vá usar um banco existente.

      Abra o arquivo .env e edite a variável DATABASE_URL:
      Ex: DATABASE_URL="mysql://root:@localhost:3306/japedidos"
      Usuario Root sem senha [não recomendado]

      ./prisma/schema.prisma
      Altere o -datasource-provider para o banco existente.
      datasource db {
        provider = "mysql"
        url      = env("DATABASE_URL")
      }

      $ npx prisma db pull
      Lê as tabelas já existentes no banco e gera o schema.prisma 
      automaticamente, com base nelas.

      $ npx prisma generate
      Prepara o cliente do Prisma para começar a usar o banco.
      Sempre que você alterar o banco de dados diretamente (ex: novas tabelas, colunas), 
      rode novamente:
                      npx prisma db pull
                      npx prisma generate

      Obs: com o banco do JaPedidos houve a necessidade de realizar adaptações:
      no model produto: 
                    id             Int              @default(autoincrement())
                    Alterada para: 
                    id             Int              @id @default(autoincrement())
                    Removida/Comentada a linha com:
                    @@id([id, id_unidade, id_categoria])
      no model pedido:
                    id                   Int        @default(autoincrement())
                    Alterada para: 
                    id                   Int        @id @default(autoincrement())
                    Removida/Comentada a linha com:
                    @@id([id, id_cliente])


      "dev" : "tsx watch src/server.ts"
      Editar o package.json do projeto adicionando a seguinte linha na sessao 
      de scripts. Esta linha define um script nome de "dev", o parametro "watch" 
      faz com que ele recompile o server sempre que ele salvo com alterações. Isso tambem mantera 
      a aplicação rodando indefinidamente.

      $ npm run dev
      Para rodar o server/app/node, basta digitar.

