import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Input, Button, InputGroup, InputRightElement, Stack, InputLeftAddon, InputLeftElement } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

function LoginPage() {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const emailRef = useRef()
  const passwordRef = useRef()

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value
    });

    let result = await signIn('credentials', {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value
    })

    if (result.error) {
      console.log(result);
    }


    router.replace('/')
  }


  return (
    <>
      <Head>
        <title>
          Login | Nike's Shoes Shop
        </title>
        <meta name="description" content="Login page - Nike's Shoes Shop" />
      </Head>
      <div className='w-full px-20 pt-24 self-center'>
        <form onSubmit={handleSubmit} className='w-full md:w-1/3 md:mx-auto flex justify-center flex-col gap-y-2'>
          <span className='text-3xl mb-4'>Login</span>

          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />}
              />
              <Input type='email' ref={emailRef} placeholder='example@example.con' />
            </InputGroup>
          </Stack>
          <InputGroup size='md'>
            <InputLeftElement
              pointerEvents='none'
              children={<LockIcon color='gray.300' />}
            />
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              ref={passwordRef}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" className='mt-2' colorScheme='teal' variant='solid'>
            Login
          </Button>
        </form>
      </div>
    </>
  )
}


export async function getServerSideProps({ req }) {

  let session = await getSession({ req })

  if (session) {
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
      type: 1
    }
  }
}

export default LoginPage