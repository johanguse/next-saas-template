//
// ! if you pretend to use neon database install the package @prisma/adapter-neon and @neondatabase/serverless and ws
//
import { env } from '@/root/env.mjs'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'
import ws from 'ws'

neonConfig.webSocketConstructor = ws as unknown as typeof WebSocket

const connectionString = env.POSTGRES_DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter })
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
