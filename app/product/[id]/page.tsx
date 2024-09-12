import { Product } from '@prisma/client'

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  return <div>{id}</div>
}
