import { cn } from '@/lib/utils'
import { Checkbox } from '../ui'

export interface FilterCheckboxProps {
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export function FilterCheckbox({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}: FilterCheckboxProps) {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className='rounded-[8px] size-6'
        id={cn('checkbox-', String(value))}
      />
      <label
        htmlFor={cn('checkbox-', String(value))}
        className='leading-none cursor-pointer flex-1 select-none'
      >
        {text}
      </label>
      {endAdornment}
    </div>
  )
}
