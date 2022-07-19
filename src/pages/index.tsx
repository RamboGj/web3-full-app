import { Fragment, useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import { ChevronDownIcon, RefreshIcon } from "@heroicons/react/solid"
import Head from "next/head"
import Header from "../components/Header"
import TabBox from "../components/TabBox"
import { Menu, Transition } from '@headlessui/react'
import metamask from '../public/metamask.png'
import phantom from '../public/phantom.png'
import Image from 'next/image'
import Profile from "../components/Profile"

export default function Home() {
  const { 
    authError, 
    authenticate, 
    isAuthenticating, 
    isAuthenticated,
    user,
    logout,
    isLoggingOut
   } = useMoralis()

   useEffect(() => {
    console.log(user)
   }, [])

  if (!isAuthenticated) {
    return (
      <>
      <Head>
        <title>Login | web3</title>
      </Head>
      <div className="h-screen flex">
        <div className="mx-auto my-32 md:m-auto space-y-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-300 flex mx-auto justify-center">
            Hello, web3
          </h1>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button 
                className="px-8 py-4 bg-slate-300 bg-gradient-to-r from-slate-500 rounded-xl flex justify-center font-bold w-[255px] md:w-[355px] hover:bg-slate-500 transition duration-300">
                {isAuthenticating ? <RefreshIcon className="animate-spin w-8 h-8 text-slate-900" aria-hidden="true"/> : 'Connect your wallet'}
                {!isAuthenticating && 
                  <ChevronDownIcon
                    className="ml-4 md:ml-8 -mr-1 h-6 w-6 text-slate-800 hover:text-violet-100"
                    aria-hidden="true"
                  />
                }
                
              </Menu.Button>            
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="w-[255px] md:w-[355px] absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 space-y-2">
                  <Menu.Item>
                    <div
                      onClick={() => {
                        authenticate({
                          signingMessage: "Sign to log in to web3 dapp"
                        })
                      }} 
                      className="flex items-center space-x-4 px-2 hover:bg-slate-500 transition duration-500 rounded-xl">
                      <img src={metamask.src} alt="logo metamask" className="w-10 h-10"/>
                      <button
                        className='w-[220px] md:w-[320px] mx-auto text-black font-bold group flex w-full items-center rounded-xl px-2 py-4 text-sm'
                      >
                        Connect with Metamask
                      </button>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div 
                      onClick={() => {
                        authenticate({
                          type: 'sol',
                          signingMessage: "Sign to log in to web3 dapp" 
                        })
                      }}
                      className="flex items-center space-x-4 px-2 hover:bg-slate-500 transition duration-500 rounded-xl">
                      <img src={phantom.src} alt="logo phantom" className="w-10 h-10"/>
                      <button
                        className='w-[220px] md:w-[320px] mx-auto text-black font-bold group flex w-full items-center rounded-md px-2 py-4 text-sm'
                      >
                        Connect with Phantom
                      </button>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>  
      </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Dashboard | web3</title>
      </Head>
      <div>
        <Header 
          loggingOut={isLoggingOut}
          logout={logout}
          user={user}
          />
          <div className="flex-1 bg-slate-800 h-screen px-32 py-24">
            <TabBox
              children={<Profile />} 
            />
          </div>
      </div>
    </>
  )
}

