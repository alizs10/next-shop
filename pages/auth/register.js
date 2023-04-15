import Head from 'next/head'
import React, { useContext, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import PasswordInput from '../../components/Common/PasswordInput'
import { connectDatabase } from '../../util/database-util';
import Link from 'next/link';
import { LoadingContext } from '../../context/LoadingContext';
import { useRouter } from 'next/router';

function RegisterPage() {

  const { addLoading, closeLoading, loading } = useContext(LoadingContext)

  const initStates = {
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  }
  const [states, setStates] = useState(initStates)

  function handleChangeInput(e) {
    setStates(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const router = useRouter()

  async function handleSubmit(e) {
    if (loading) return

    e.preventDefault()
    addLoading("signing up")

    let result = await fetch('/api/auth/register', {
      method: "POST",
      body: JSON.stringify(states),
      headers: {
        "Content-Type": "application/json"
      }
    })

    let data = await result.json()

    if (result.status === 201) {
      closeLoading({ text: data.message, status: "success" })
      setTimeout(() => {
        router.push('/auth/login')
      }, 300)
    } else {
      closeLoading({ text: data.message, status: "error" })
    }

  }

  return (
    <>
      <Head>
        <title>
          Register | Nike's Shoes Shop
        </title>
        <meta name="description" content="Register page - Nike's Shoes Shop" />
      </Head>

      <div className='w-3/4 md:w-2/3 xl:w-1/3 mx-auto rounded-2xl bg-gray-700 shadow-md py-10 px-5 mt-20'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-10'>
          <h1 className='text-7xl text-red-500 font-bold text-center'>Register</h1>

          <div className='flex flex-col gap-y-2'>
            <div className="col-span-1 flex flex-col gap-y-1">
              <label className="text-lg text-gray-200">Full Name</label>
              <input type="text" name='fullName' value={states.fullName} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
            </div>
            <div className="col-span-1 flex flex-col gap-y-1">
              <label className="text-lg text-gray-200">Email</label>
              <input type="email" name='email' value={states.email} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
            </div>
            <div className="col-span-1 flex flex-col gap-y-1">
              <label className="text-lg text-gray-200">Password</label>
              <PasswordInput name='password' value={states.password} onChange={handleChangeInput} />
            </div>
            <div className="col-span-1 flex flex-col gap-y-1">
              <label className="text-lg text-gray-200">Confirm Password</label>
              <PasswordInput name='passwordConfirmation' value={states.passwordConfirmation} onChange={handleChangeInput} />
            </div>

            <button type='submit' disabled={loading} className={`${loading ? 'disabled' : ''} mt-2 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2`}>Register</button>

          </div>

          <div className='flex flex-col gap-y-2'>
            <div className='flex flex-col gap-y-0 mx-auto'>
              <span className='text-center text-gray-400'>Already a user?</span>
              <Link className='self-center' href="/auth/login">
                <button type='button' className="py-2 px-5 rounded-xl transition-all duration-300 hover:bg-gray-600 text-red-500 font-bold text-md">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export async function getServerSideProps({ req }) {

  await connectDatabase(process.env.DB_NAME)
  let user = await useAuth(req)

  if (user) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: {
      layoutType: "auth"
    }
  }
}

export default RegisterPage