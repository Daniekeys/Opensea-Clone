import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '4gx6e8dp',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skE7robIyk277yUtYsbol05ddiMltqkSxaDvAEJogXaIraIHjcP1jhObZjS7DNmikFUPBwxDuUaKebPWtiXz5UwKYujr6zTSaa60GWpFoLzs9NH7gkNuiamXc3bx8HdpgNNofpjlzFFwiXtEQe7OGI819qEd0sPHVgaHy6gp3MkqZqSNYIdZ',
  useCdn: false,
})