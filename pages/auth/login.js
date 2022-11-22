import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Input, Button, InputGroup, InputRightElement, Stack, InputLeftAddon, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout'

function LoginPage() {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <AuthLayout>
      <div className='w-full px-20 pt-24 self-center'>
        <form className='w-full md:w-1/3 md:mx-auto flex justify-center flex-col gap-y-2'>
          <span className='text-3xl mb-4'>Login</span>

          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />}
              />
              <Input type='email' placeholder='example@example.con' />
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
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button className='mt-2' colorScheme='teal' variant='solid'>
            Login
          </Button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default LoginPage