import '../styles/globals.css'
import AuthLayout from '../components/Layouts/AuthLayout'
import AppLayout from '../components/App/AppLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAppStore from '../stores/app-store';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const { clickOutside, setClickOutside } = useAppStore()

  useEffect(() => {

    if(clickOutside)
    {
      setClickOutside(false)
    }

  }, [router.pathname])

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
    getLayout(<Component {...pageProps} />, pageProps)
  )
}

export default MyApp
