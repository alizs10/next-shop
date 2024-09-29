import InstagramIcon from '../../components/ui/icons/InstagramIcon';
import TwitterIcon from '../../components/ui/icons/TwitterIcon';
import FacebookIcon from '../../components/ui/icons/FacebookIcon';
import Bars from './Header/Bars';

function Sidebar() {
    return (
        <aside className="fixed top-0 bottom-0 left-0 flex-col items-start hidden p-5  w-[8%] 2xl:w-[5%] xl:flex">
            <div className="flex items-center justify-center w-full h-16">
                <Bars />
            </div>

            <ul className="flex flex-col items-center justify-center w-full my-auto gap-y-8 ">
                <li className="text-2xl text-white vertical-text w-fit">DELIVERY</li>
                <li className="text-2xl text-red-500 vertical-text w-fit">PACKAGING</li>
                <li className="text-2xl text-white vertical-text w-fit">FAQ</li>
            </ul>
            <div className="flex flex-col items-center justify-center w-full mt-auto gap-y-4">
                <button className='transition-all duration-300 hover:fill-red-500 fill-white'>
                    <TwitterIcon />
                </button>
                <button className='transition-all duration-300 hover:fill-red-500 fill-white'>
                    <InstagramIcon />
                </button>
                <button className='transition-all duration-300 hover:fill-red-500 fill-white'>
                    <FacebookIcon />
                </button>
            </div>
        </aside>

    );
}

export default Sidebar;