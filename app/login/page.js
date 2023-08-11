"use client"
import React from 'react'
import { Tabs } from '@mantine/core';
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
const LoginPage = () => {

  return (
    <div className='py-10'>
      <Tabs color="indigo" defaultValue="login">
        <Tabs.List className='flex justify-center'>
          <Tabs.Tab value="login">Login</Tabs.Tab>
          <Tabs.Tab value="signup">Signup</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="login" pt="xs">
          <Login />
        </Tabs.Panel>

        <Tabs.Panel value="signup" pt="xs">
          <Signup />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

export default LoginPage