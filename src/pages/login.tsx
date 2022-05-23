import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PageLayout } from '../components/page-layout'
import FeaturedCard from '../components/featured-card'
import LogoSrc from '../assets/google_logo.webp'
import styled from 'styled-components'
import { UserIcon, KeyIcon } from '@heroicons/react/solid'

const Logo = styled.img`
  max-height: 48px;
  object-fit: contain;
`

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
      <FeaturedCard
        imageSrc={
          'https://images.unsplash.com/photo-1645382884164-55b6a32f698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80'
        }
        imageAlt="mountains"
      >
        <Logo src={LogoSrc} alt="company logo" />
        <h2 className="text-md mt-8">Welcome back, John Doe! 👋</h2>
        <form className="form mt-4" onSubmit={handleFormSubmit}>
          <label htmlFor="username" className="block text-sm">
            Username
          </label>
          <div className="flex mt-1">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <UserIcon className="h-4 w-4" />
            </span>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
            />
          </div>
          <label htmlFor="password" className="block text-sm mt-4">
            Password
          </label>
          <div className="flex mt-1">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <KeyIcon className="h-4 w-4" />
            </span>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="mt-8 ml-auto w-full md:w-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Log in
          </button>
        </form>
      </FeaturedCard>
    </PageLayout>
  )
}
