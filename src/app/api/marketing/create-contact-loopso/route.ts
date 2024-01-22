import { NextRequest, NextResponse } from 'next/server'

export type FormData = {
  email: string
}
export async function POST(request: NextRequest) {
  const data = await request.formData()
  console.log(data)
  try {
    const response = await fetch(
      'https://app.loops.so/api/v1/contacts/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.LOOPSO_API_KEY}`,
        },
        body: JSON.stringify({
          data,
        }),
      }
    )
    if (!response.ok) {
      throw new Error('Failed to create contact')
    }

    return NextResponse.json({ status: 'success' })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: 'error' })
  }
}
