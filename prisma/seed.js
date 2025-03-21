const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
    const adminUsername = process.env.ADMIN_USERNAME || 'admin'
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin'

    const hashedPassword = await bcrypt.hash(adminPassword, 10)

    const existingUser = await prisma.user.findFirst({
        where: { username: adminUsername },
    })

    if (!existingUser) {
        await prisma.user.create({
            data: {
                username: adminUsername,
                password: hashedPassword,
            },
        })
        console.log('Admin user created successfully!')
    } else {
        console.log('Admin user already exists.')
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
