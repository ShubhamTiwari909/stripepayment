"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import useStore from "./components/store"
import Dashboard from "./components/dashboard/Dashboard"

export default function Home() {
  const router = useRouter()
  const data = useStore(state => state.data)

  useEffect(() => {
    if(data.length === 0){
      router.push("/login")
    }
  }, [])
  
  return (
    <main className='min-h-screen'>
      <Dashboard />
    </main>
  )
}
