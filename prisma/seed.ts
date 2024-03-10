import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

var bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const userRoles = ['ADMIN', 'EDITOR', 'USER']

const main = async () => {
  try {
    // Cleanup existing data
    await prisma.user.deleteMany()
    await prisma.account.deleteMany()
    await prisma.session.deleteMany()

    // Seed 30 users
    for (let i = 0; i < 30; i++) {
      const name = faker.name.fullName()
      const email = faker.internet.email()
      const hashedPassword = await bcrypt.hash('my_secure_password', 10)
      const role = faker.helpers.arrayElement(userRoles)

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'USER',
          isTwoFactorEnabled: faker.datatype.boolean(),
          emailVerified: faker.date.past(),
          image: faker.image.avatar(),
          // Add other fields as necessary
        },
      })

      // Seed related Account for each User
      const providers = ['google', 'github', 'credentials']
      await prisma.account.create({
        data: {
          userId: user.id,
          type: faker.random.word(),
          provider: faker.helpers.arrayElement(providers),
          providerAccountId: faker.datatype.uuid(),
          // Add other fields as necessary
        },
      })

      // Seed related Session for each User
      await prisma.session.create({
        data: {
          userId: user.id,
          sessionToken: faker.datatype.uuid(),
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
