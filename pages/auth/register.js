import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useRef, useState } from 'react'

function RegisterPage() {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const fullNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()


  async function handleSubmit(e) {

    e.preventDefault()

    const userInputs = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    }


    let result = await fetch('/api/auth/register', {
      method: "POST",
      body: JSON.stringify(userInputs),
      headers: {
        "Content-Type": "application/json"
      }
    })

    let data = await result.json()

    if (result.status === 201) {
      alert(data.message)
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
      <div className='w-full px-20 pt-24 self-center'>
        <form onSubmit={handleSubmit} className='w-full md:w-1/3 md:mx-auto flex justify-center flex-col gap-y-2'>
          <span className='text-3xl mb-4'>Register</span>

          <Stack spacing={4}>
            <InputGroup>
              <Input type='text' placeholder='Full Name' name='fullName' ref={fullNameRef} />
            </InputGroup>
          </Stack>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />}
              />
              <Input type='email' name='email' ref={emailRef} placeholder='example@example.com' />
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
              name='password'
              ref={passwordRef}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup size='md'>
            <InputLeftElement
              pointerEvents='none'
              children={<LockIcon color='gray.300' />}
            />
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Confirm Password'
              name='passwordConfirmation'
              ref={passwordConfirmationRef}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" className='mt-2' colorScheme='teal' variant='solid'>
            Register
          </Button>
        </form>
      </div>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      layoutType: "auth",
      type: 0
    }
  }
}

export default RegisterPage