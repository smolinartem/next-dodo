import { Ingredient } from '@prisma/client'
import { axiosInstance } from './axios'
import { ApiRoutes } from './constants'

export async function getAll(): Promise<Ingredient[]> {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)

  return data
}
