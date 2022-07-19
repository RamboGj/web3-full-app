import { ReactElement, useState } from 'react'
import { Tab } from '@headlessui/react'

interface TabBoxProps {
  children: ReactElement
}

export default function TabBox(props: TabBoxProps) {
  const [selectedId, setSelectedId] = useState<number>(0)

  let categories = [
    { name: "Profile", id: 0 },
    { name: "Balance", id: 1 },
    { name: "Transations", id: 2 },
    { name: "NFTs", id: 3 },
    { name: "Send ETH", id: 4 },
  ]

  return (
    <div className="w-full px-2 py-8 sm:px-0 mx-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1 bg-slate-900">
          {categories.map((category) => (
            <Tab
              onClick={() => setSelectedId(category.id)}
              key={category.id}
              className={`w-full rounded-lg py-2.5 text-lg font-bold leading-5 text-slate-200 hover:bg-slate-700 transition duration-500 ${selectedId === category.id ? `bg-slate-700` : ``}`}                
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
            {categories && categories.map((category) => {
              return (
                <Tab.Panel
                  key={category.id}
                  className='w-full h-full bg-slate-400 rounded-xl'
                >
                {category.id === 0 ? props.children : category.id === 1 ? 'Balance' : category.id === 2 ? 'Transactions':category.id === 3 ? 'NFTs': 'Send ETH'}
                </Tab.Panel>
              )
            })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
