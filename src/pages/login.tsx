import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PageLayout } from '../components/page-layout'

export const LoginScreen = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (username && password) {
      history.push('/dashboard')
    }
  }

  return (
    <PageLayout className="login">
      <div className="bg-white rounded-md shadow-xs overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48 lg:w-96 xl:w-full"
              src={`https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80`}
              alt="Mountains"
            />
          </div>
          <div className="p-8 md:h-full md:w-48 lg:w-96 xl:w-full">
            <h1 className="text-2xl">Welcome back 👋</h1>
            <form className="form mt-8" onSubmit={handleFormSubmit}>
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="appearance-none relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              />
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              />
              <button
                type="submit"
                className="group relative sm:w-full flex justify-center mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
