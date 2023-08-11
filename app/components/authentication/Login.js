import React, { useState } from 'react'
import useStore from '../store'
import { useRouter } from 'next/navigation'

const Login = () => {
  const data = useStore(state => state.data)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [message, setMessage] = useState("hidden");
  const toggleMessage = () => {
    setMessage("block")
    setTimeout(() => {
      setMessage("hidden")
    }, 3000);
  }
  const router = useRouter()

  return (
    <div className="relative flex flex-col justify-center py-4">
      <p className={`text-center text-semibold text-2xl text-red-600 mb-3 ${message}`}>Wrong Credentials, Try Again</p>
      <div className="w-80 lg:w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input type="text" placeholder="Email Address" className="w-full input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <button className="btn btn-block" onClick={(e) => {
              e.preventDefault()
              if (Object.values(data).filter(value => value === email).length === 0) {
                toggleMessage()
              }
              router.push("/plans")
            }}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login