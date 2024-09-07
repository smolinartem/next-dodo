import { Container } from './container'
import { Categories } from './categories'
import { SortPopup } from './sort-popup'

interface TopBarProps {
  className?: string
}

export function TopBar({ className }: TopBarProps) {
  return (
    <div className='sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10'>
      <Container className='flex items-center justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}
