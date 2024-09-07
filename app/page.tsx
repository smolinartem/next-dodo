import { Container, TopBar, Filters, ProductsList } from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <h2 className='text-2xl font-extrabold'>Все пиццы</h2>
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-20'>
          <div className='w-[250px]'>
            <Filters />
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsList
                title='Пиццы'
                categorieId={1}
                products={[
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                ]}
              />

              <ProductsList
                title='Комбо'
                categorieId={2}
                products={[
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
