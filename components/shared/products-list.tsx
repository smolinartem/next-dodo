'use client'

import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import { ProductCard } from './product-card'

interface ProductsListProps {
  title: string
  products: any[]
  categorieId: number
  className?: string
  listClassName?: string
}

export function ProductsList({
  title,
  products,
  categorieId,
  className,
  listClassName,
}: ProductsListProps) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categorieId)
    }
  }, [intersection?.isIntersecting, setActiveCategoryId, categorieId])

  return (
    <section ref={intersectionRef} className={cn(className)}>
      <a className='block relative top-[-110px] invisible' id={title}></a>
      <h2 className='text-3xl font-extrabold mb-5'>{title}</h2>
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </section>
  )
}
