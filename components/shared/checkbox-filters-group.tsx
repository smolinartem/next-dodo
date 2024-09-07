'use client'

import { useState } from 'react'
import { Input } from '../ui'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox'

type Item = FilterCheckboxProps

interface CheckboxFiltersGroupProps {
  title: string
  items: Item[]
  limit: number
  searchInputPlaceholder?: string
  className?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
}

export function CheckboxFiltersGroup({
  title,
  items,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue,
}: CheckboxFiltersGroupProps) {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const listOfRenderedItems = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : items.slice(0, limit)

  return (
    <div className={className}>
      <span className='block font-bold mb-3'>{title}</span>

      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {listOfRenderedItems.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? 'Скрыть' : '+ Показать всё'}
          </button>
        </div>
      )}
    </div>
  )
}
