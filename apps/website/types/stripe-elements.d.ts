declare namespace JSX {
  interface IntrinsicElements {
    'stripe-pricing-table': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      'pricing-table-id'?: string // now allows string | undefined
      'publishable-key'?: string // now allows string | undefined
      'client-reference-id'?: string | null // already allows string | null | undefined
      'customer-email'?: string | null // already allows string | null | undefined
    }
  }
}
