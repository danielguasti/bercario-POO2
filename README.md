
# Sistema de Berçário

Este é um sistema que gerencia informações de um berçário. Ele utiliza tabelas para armazenar objetos com características como nome, data de nascimento, altura, entre outras. As tabelas são interconectadas para garantir o funcionamento adequado do sistema.
#### Alunos: Marcos Daniel Guasti Machaco, Vladimir Gama Batista e Yan Zumerle Rangel

## UML
Na UML usamos as classes Bebe, Mae e Medico, sendo a classe Bebe se relacionando com a classe Mae onde uma mãe pode estar relacionada a mais de um Bebe e tambem se relacionando com a classe medico onde um medico pode ser responsavel por um ou mais bebes

## Começando

Aqui estão os passos para iniciar o projeto usando Node.js e TypeScript:

### Iniciando o projeto Node.js

Primeiro, inicialize um projeto Node.js executando os seguintes comandos:

```
npm init -y
Instalando o TypeScript
Em seguida, instale o TypeScript como dependência de desenvolvimento:


npm install typescript --save-dev
Inicializando e configurando o TypeScript
Inicialize o TypeScript e crie um arquivo de configuração tsconfig.json com o seguinte comando:


npx tsc --init
Agora, configure o arquivo tsconfig.json com as seguintes opções recomendadas:

json
Copy code
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
Prisma e Prisma Client
Aqui estão os passos para configurar o Prisma e o Prisma Client:

Instalando dependências
Instale as seguintes dependências para Prisma e TypeScript Node:


npm install typescript ts-node @types/node --save-dev
Instalando o Prisma CLI
Instale a CLI do Prisma como dependência de desenvolvimento:


npm install prisma --save-dev
Inicializando o Prisma
Inicialize o Prisma e configure o provedor de dados (neste caso, SQLite) com o seguinte comando:


npx prisma init --datasource-provider sqlite
Modelo do banco de dados
No arquivo schema.prisma, adicione o modelo de banco de dados sugerido pelo site do Prisma. Certifique-se de não remover nenhum código existente e adicione o novo modelo no final.

Gerando o Prisma Client
Gere o Prisma Client com base no modelo do banco de dados usando o seguinte comando:

npx prisma generate
Utilizando o Prisma Client
Agora, você pode importar o Prisma Client em seus arquivos TypeScript para interagir com o banco de dados.


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Escreva suas consultas aqui
}

main()
  .catch(async (e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

Prisma Migrate
Use o Prisma Migrate para criar o banco de dados com base no modelo definido no arquivo schema.prisma. Execute o seguinte comando:


npx prisma migrate dev --name init
Escrevendo consultas e interagindo com o banco de dados
Você pode escrever consultas de criação de tabelas e inserção de dados em seus arquivos TypeScript seguindo esta estrutura.

Executando o projeto
Para executar seu projeto, navegue até o diretório onde está localizado seu arquivo TypeScript e execute:
npx ts-node projeto.ts


