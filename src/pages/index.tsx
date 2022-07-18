import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import { RefreshIcon } from "@heroicons/react/solid"
import Head from "next/head"
import Header from "../components/Header"
import TabBox from "../components/TabBox"

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
          <button 
            onClick={() => authenticate({
              signingMessage: "Sign to log in web3 app"
            })}
            className="px-8 py-4 bg-slate-300 bg-gradient-to-r from-slate-500 rounded-xl flex justify-center font-bold w-[255px] md:w-[355px] hover:bg-slate-500 transition duration-300">
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
        <Header 
          loggingOut={isLoggingOut}
          logout={logout}
          user={user}
          />
          <div className="flex-1 w-full bg-slate-800 h-screen px-32 py-24">
            <TabBox />
          </div>
      </div>
    </>
  )
}

