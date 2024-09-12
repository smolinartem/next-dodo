import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'

interface ReturnProps {
  ingredients: Ingredient[]
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const data = await Api.ingredients.getAll()
        setIngredients(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchIngredients()
  }, [])

  return { ingredients }
}
