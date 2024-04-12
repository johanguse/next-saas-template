import { NextRequest, NextResponse } from 'next/server'

import LoopsClient from 'loops'

const loops = new LoopsClient(process.env.LOOPSO_API_KEY as string)

/**
 * Create or Update a contact
 */
export async function POST(request: NextRequest) {
  const dataForm = await request.formData()

  const userEmail = dataForm.get('email') as string
  const userGroup = dataForm.get('userGroup') as string
  const source = dataForm.get('source') as string

  if (!userEmail) throw 'No email given'

  const options = {
    userGroup,
    source,
  }

  const data = await loops.createContact(userEmail, options)

  return NextResponse.json({ data })
}
