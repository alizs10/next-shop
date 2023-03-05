import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import AuthLayout from '../components/Layouts/AuthLayout'
import AppLayout from '../components/Layouts/AppLayout';

function MyApp({ Component, pageProps }) {

  let getLayout;

  switch (pageProps.layoutType) {

    case "auth":
      getLayout = ((page) => (<AuthLayout type={pageProps.type} children={page} />))
      break;
    case "app":
      getLayout = ((page) => (
        <AppLayout children={page} user={pageProps.user} />
      ))
      break;
    default:
      getLayout = ((page) => page)
      break;
  }


  return (
    <ChakraProvider>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ChakraProvider>
  )
}

export default MyApp
