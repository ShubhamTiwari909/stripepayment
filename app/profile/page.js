"use client"

import useStore from "../components/store"

const Profile = () => {
  const data = useStore(state => state.data)
  const value = useStore(state => state.value)

  return (
    <div className='grid place-items-center h-screen'>
      <div
        className="max-w-2xl mx-4 pb-2 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
        </div>
        <div className="text-center my-6">
          <h2 className="font-semibold">Name - {data.name}</h2>
          <p className="text-gray-500">Email - {data.email}</p>
          <p className="text-gray-500">Current Plan - ${value}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile