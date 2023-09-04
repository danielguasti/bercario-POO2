import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    

    
    
    const bebe1 = await prisma.bebe.create({
        data: {
            Nome: 'Vladimir Gama', 
            dataNascimento: '04/02/2023', 
            pesoNascimento: 5.00,
            altura: 0.45,
            mae: {
                create: {
                    nome: 'Leia',
                    endereco: 'prainha',
                    telefone: '27 998765786',
                    dataNascimento: '04/09/1990',
                }
            },
            medico: {
                create: {
                    CRM: '1432567', 
                    nome: 'Paulo',
                    celular: '27 987654389',
                    especialidade: 'obstetra',
                }
            },
            
        }
    })

    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })