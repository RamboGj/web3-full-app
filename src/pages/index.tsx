import { useState } from "react"
import { useMoralis } from "react-moralis"
import { RefreshIcon } from "@heroicons/react/solid"
import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
  const { authError, authenticate, isAuthenticating, isAuthenticated } = useMoralis()

  if (!isAuthenticated) {
    return (
      <>
      <Head>
        <title>Login | web3</title>
      </Head>
      <div className="h-screen flex">
        <div className="m-auto space-y-12">
          <h1 className="text-5xl font-bold text-slate-300 flex mx-auto justify-center">
            Hello, web3
          </h1>
          <button 
            onClick={() => authenticate()}
            className="px-8 py-4 bg-slate-300 bg-gradient-to-r from-slate-500 rounded-xl flex justify-center font-bold w-[355px] hover:bg-slate-500 transition duration-300">
            {isAuthenticating ? <RefreshIcon className="animate-spin w-8 h-8 text-slate-900" aria-hidden="true"/> : 'Connect your wallet'}
          </button>
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
        <Header />
      </div>
    </>
  )
}

