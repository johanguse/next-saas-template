import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

var bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const userRoles = ['ADMIN', 'EDITOR', 'USER'] as const

type UserRole = (typeof userRoles)[number]

const providers = ['google', 'github', 'credentials']
const type = ['oauth', 'email', 'credentials']

const main = async () => {
  try {
    // Cleanup existing data
    await prisma.user.deleteMany()
    await prisma.account.deleteMany()
    await prisma.session.deleteMany()

    // Seed 30 users
    for (let i = 0; i < 30; i++) {
      const hashedPassword = await bcrypt.hash('my_secure_password', 10)

      const user = await prisma.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email().toLocaleLowerCase(),
          password: hashedPassword,
          role: faker.helpers.arrayElement(userRoles),
          isTwoFactorEnabled: faker.datatype.boolean(),
          emailVerified: faker.date.past(),
          image: faker.image.avatarGitHub(),
          // Add other fields as necessary
        },
      })

      await prisma.account.create({
        data: {
          userId: user.id,
          type: faker.helpers.arrayElement(type),
          provider: faker.helpers.arrayElement(providers),
          providerAccountId: faker.string.uuid(),
          // Add other fields as necessary
        },
      })

      // Seed related Session for each User
      await prisma.session.create({
        data: {
          userId: user.id,
          sessionToken: faker.string.uuid(),
          expires: faker.date.future(),
          // Add other fields as necessary
        },
      })
    }

    console.log(`Database has been seeded. 🌱`)
  } catch (error) {
    console.error('Error while seeding the database:', error)
  }
}

main().catch((err) => {
  console.error('Error while executing main function:', err)
})
