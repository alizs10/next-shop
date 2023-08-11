import Head from 'next/head'
import React, { useContext, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import PasswordInput from '../../components/Common/PasswordInput'
import Link from 'next/link'
import { connectDatabase } from '../../util/database-util'
import useAuth from '../../hooks/useAuth'
import { LoadingContext } from '../../context/LoadingContext'
import { clearCart, getCartItems } from '../../helpers/cart-helpers';
import { handleSyncCart } from '../../helpers/api-helpers';

function LoginPage() {

  const { addLoading, closeLoading, loading } = useContext(LoadingContext)

  const initStates = {
    email: "",
    password: "",
  }
  const [states, setStates] = useState(initStates)

  function handleChangeInput(e) {
    setStates(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const router = useRouter()

  async function handleSubmit(e) {
    if (loading) return

    e.preventDefault();

    addLoading("signing in")

    let result = await signIn('credentials', {
      redirect: false,
      ...states
    })

    if (result.error) {
      console.log(result);
      closeLoading({ text: result.error, status: "error" })

    } else {
      // we should save cart items if has any
      let cartItems = getCartItems()
      if (cartItems.length > 0) {

        let res = await handleSyncCart(cartItems)

        if (res.status !== 200) {
          closeLoading({ text: "error while syncing user data", status: "error" })
        }

        if (res.status === 200) {
          clearCart()
        }

      }

      closeLoading({ text: "logged in", status: "success" })
      setTimeout(() => {
        router.push('/')
      }, 300)

    }


  }


  return (
    <>
      <Head>
        <title>
          Login | Nike's Shoes Shop
        </title>
        <meta name="description" content="Login page - Nike's Shoes Shop" />
      </Head>

      <div className='w-4/5 md:w-2/3 xl:w-1/3 mx-auto rounded-2xl bg-gray-700 shadow-md py-10 px-5 mt-5 md:mt-20'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-8'>
          <h1 className='text-5xl md:text-7xl text-red-500 font-bold text-center'>Login</h1>

          <div className='flex flex-col gap-y-2'>
            <div className="col-span-1 flex flex-col gap-y-1">
              <label className="text-md sm:text-lg text-gray-300">Email</label>
              <input type="email" name='email' value={states.email} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
            </div>
            <div className="col-span-1 flex flex-col gap-y-1">
              <label className="text-md sm:text-lg text-gray-300">Password</label>
              <PasswordInput name="password" value={states.password} onChange={handleChangeInput} />
              {/* <input type="password" name='password' value={states.password} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" /> */}
            </div>

            <button type='submit' className="mt-2 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2">Login</button>
            <span className='text-md font-bold text-red-500 self-end'>forgot password?</span>

          </div>

          <div className='flex flex-col gap-y-2'>
            <div className='flex flex-col gap-y-0 mx-auto'>
              <span className='text-center text-gray-400'>Not a user?</span>
              <Link className='self-center' href="/auth/register">
                <button type='button' className="py-2 px-5 rounded-xl transition-all duration-300 hover:bg-gray-600 text-red-500 font-bold text-md">
                  Register
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
      layoutType: "auth",
    }
  }
}

export default LoginPage