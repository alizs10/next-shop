import InstagramIcon from '../../components/ui/icons/InstagramIcon';
import TwitterIcon from '../../components/ui/icons/TwitterIcon';
import FacebookIcon from '../../components/ui/icons/FacebookIcon';

function Sidebar() {
    return (
        <aside className="col-span-1 grid-rows-6 h-[calc(100vh_-_5rem)] lg:grid hidden">
            <ul className="row-span-4 flex flex-col justify-center items-end gap-y-8">
                <li className="vertical-text text-2xl w-fit text-white">DELIVERY</li>
                <li className="vertical-text text-2xl w-fit text-red-500">PACKAGING</li>
                <li className="vertical-text text-2xl w-fit text-white">FAQ</li>
            </ul>
            <div className="row-span-2 flex flex-col gap-y-4 items-end justify-center">
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