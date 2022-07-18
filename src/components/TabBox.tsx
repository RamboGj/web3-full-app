import { useState } from 'react'
import { Tab } from '@headlessui/react'

export default function TabBox() {
  let [categories] = useState({
    Balance: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Transactions: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
    NFTs: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Send: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="w-full px-2 py-16 sm:px-0 mx-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1 bg-slate-900">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className='w-full rounded-lg py-2.5 text-lg font-bold leading-5 text-slate-200 hover:bg-slate-700 transition duration-500 focus:ring-0.5 focus:bg-slate-700'                 
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className='w-full h-full bg-slate-400'
            >
                {posts.map((hehe) => {
                  return (
                    <div>
                      {hehe.commentCount}
                    </div>
                  )
                })}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
