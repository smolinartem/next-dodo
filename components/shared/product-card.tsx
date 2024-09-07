import Link from 'next/link'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui'

interface ProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
  className?: string
}

export function ProductCard({ id, name, price, imageUrl, className }: ProductCardProps) {
  return (
    <article className={cn(className)}>
      <Link className='block' href={`/products/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img width={215} height={215} src={imageUrl} alt={name} />
        </div>

        <h4 className='mt-3 mb-1 text-2xl font-bold'>{name}</h4>

        <p className='text-sm text-gray-400'>
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>

        <div className='flex justify-between items-center mt-4'>
          <span className='text-xl'>
            от <b>{price} ₽</b>
          </span>

          <Button variant='secondary'>
            <Plus className='w-4 h-4 mr-1' />
            Добавить
          </Button>
        </div>
      </Link>
    </article>
  )
}
