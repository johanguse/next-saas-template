import { Heading, Html, Text } from '@react-email/components'

interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {message}</Text>
    </Html>
  )
}
