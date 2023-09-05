
# Sistema de Berçário

Este é um sistema que gerencia informações de um berçário. Ele utiliza tabelas para armazenar objetos com características como nome, data de nascimento, altura, entre outras. As tabelas são interconectadas para garantir o funcionamento adequado do sistema.
#### Alunos: Marcos Daniel Guasti Machaco, Vladimir Gama Batista e Yan Zumerle Rangel
## UML

A Unified Modeling Language (UML) é uma linguagem de modelagem visual que permite representar sistemas de software de forma abstrata, facilitando o entendimento e a comunicação entre os envolvidos no desenvolvimento de software. Vou explicar como você pode criar um modelo UML simples para representar o projeto de informatização do berçário descrito.

### Diagrama de Classes:
O diagrama de classes é uma parte fundamental da UML e permite representar as classes, seus atributos e relacionamentos em um sistema. No seu caso, as classes principais seriam Bebê, Mãe e Médico. Vamos começar a criar um esboço desse diagrama:

### Classe Bebê:
### Atributos:

##### Nome: string
##### Data de Nascimento: data
##### Peso do Nascimento: float
##### Altura: float

### Relacionamentos:
##### Mãe (Associação com a classe Mãe)
##### Médico (Associação com a classe Médico)


### Classe Mãe:
#### Atributos:
##### Nome: string
##### Endereço: string
##### Telefone: string
##### Data de Nascimento: data

### Relacionamentos:
##### Bebês (Associação com a classe Bebê, pois uma mãe pode ter vários bebês)

### Classe Médico:
#### Atributos:
##### CRM: string
##### Nome: string
##### Telefone Celular: string
##### Especialidade: string
##### Relacionamentos:

### Bebês (Associação com a classe Bebê, pois um médico pode ter participado do parto de vários bebês)
Isso representa uma visão simplificada do seu sistema em termos de classes e relacionamentos. Lembre-se de que a UML é uma linguagem muito versátil, e você pode adicionar mais detalhes, como métodos e multiplicidades (quantos objetos de uma classe estão relacionados a outros), conforme necessário.

### Diagrama de Casos de Uso:
Além do diagrama de classes, você também pode criar um diagrama de casos de uso para identificar as principais funcionalidades do sistema, como "Registrar Bebê", "Registrar Mãe" e "Registrar Médico". Esses casos de uso podem ser representados por elipses no diagrama, e as relações entre eles podem ser mostradas por setas para indicar o fluxo de interação do usuário com o sistema.

### Diagrama de Sequência:
Você pode criar diagramas de sequência para descrever como as classes interagem em cenários específicos. Por exemplo, você pode criar um diagrama de sequência para mostrar como um bebê é registrado no sistema quando nasce, envolvendo as classes Bebê, Mãe e Médico.

Esses são apenas exemplos básicos de como você pode usar a UML para representar o projeto de informatização do berçário. Dependendo da complexidade do sistema e das necessidades de documentação, você pode adicionar mais detalhes e diagramas específicos.

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


