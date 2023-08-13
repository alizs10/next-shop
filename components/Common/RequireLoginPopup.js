import { useRouter } from 'next/router';
import useAppStore from '../../stores/app-store';
import XIcon from '../ui/icons/XIcon';
import BackdropWrapper from './BackdropWrapper'
import { motion } from 'framer-motion';

function RequireLoginPopup() {


    const { setRequireLogin, setRequireLoginMessage, requireLoginMessage: message } = useAppStore()

    const router = useRouter()

    function handleCloseWarning() {
        setRequireLogin(false)
        setTimeout(() => {
            setRequireLoginMessage('')
        }, 500)
    }

    function handleRedirect() {
        router.push('/auth/login')
    }

    return (
        <BackdropWrapper handleClick={handleCloseWarning}>
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [0.9, 1], opacity: [0, 1] }}
                exit={{ scale: [1, 0.9], opacity: [1, 0] }}
                transition={{ bounce: "spring", duration: "0.3" }}
                onClick={e => e.stopPropagation()} className='self-center mx-auto min-w-[450px] p-5 text-white shadow-2xl bg-slate-700 rounded-3xl'>
                <div className='flex justify-between items-center'>
                    <div className="flex gap-x-2 items-end">
                        <span className='text-white text-xl font-semibold'>
                            Login Required
                        </span>
                    </div>
                    <span onClick={handleCloseWarning} className='hover:bg-slate-800 transition-all duration-300 p-1 rounded-md cursor-pointer text-gray-300 scale-125'>
                        <XIcon />
                    </span>
                </div>

                <div className='flex flex-col gap-y-2 mt-6'>
                    <p className='text-lg'>{message}</p>
                    <button onClick={handleRedirect} className='w-full mt-2 py-2 rounded-xl text-xl font-bold bg-red-500 text-white'>
                        Login
                    </button>
                </div>

            </motion.div>
        </BackdropWrapper>
    );
}

export default RequireLoginPopup;