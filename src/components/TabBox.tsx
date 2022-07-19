import { useState } from 'react'
import { Tab } from '@headlessui/react'

export default function TabBox() {
  const [selectedId, setSelectedId] = useState<number>(0)

  let categories = [
    { name: "Balance", id: 0 },
    { name: "Transations", id: 1 },
    { name: "NFTs", id: 2 },
    { name: "Send ETH", id: 3 },
  ]

  return (
    <div className="w-full px-2 py-16 sm:px-0 mx-auto">
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
                  
                </Tab.Panel>
              )
            })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
