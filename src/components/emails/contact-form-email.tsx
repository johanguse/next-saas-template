import { ContactFormSchema } from '@/lib/validations/contact-form'

import { z } from 'zod'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

const ContactFormEmail: React.FC<Readonly<ContactFormInputs>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
)

export default ContactFormEmail
