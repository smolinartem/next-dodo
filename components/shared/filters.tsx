'use client'

import { Input } from '../ui'
import { RangeSlider } from '../ui/range-slider'
import { FilterCheckbox } from './filter-checkbox'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { allIngredients } from '@/lib/ingredients'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

interface FiltersProps {
  className?: string
}

export function Filters({ className }: FiltersProps) {
  const { ingredients } = useFilterIngredients()
  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }))

  return (
    <div className={className}>
      <h4 className='text-xl mb-5 font-bold'>Фильтрация</h4>
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 pt-6 pb-7'>
        <span className='block font-bold mb-3'>Цена от и до:</span>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
          <Input type='number' placeholder='1000' min={100} max={1000} defaultValue={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup className='mt-5' title='Ингредиенты:' items={items} limit={6} />
    </div>
  )
}
