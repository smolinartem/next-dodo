import { prisma } from '@/prisma/client.prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

/* export async function POST() {
  const newUser = await prisma.user.create({
    data: {
      fullName: 'Artem',
      email: 'artem@email.com',
      password: '10958',
    },
  })
  return NextResponse.json(newUser)
} */
