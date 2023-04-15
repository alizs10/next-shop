import { useState } from 'react';
import useAppStore from '../../../stores/app-store';

function Bars() {

    const { drawerVis, toggleDrawer } = useAppStore()
    const [isHover, setIsHover] = useState(false)

    function handleMouseEnter() {
        setIsHover(true)
    }

    function handleMouseLeave() {
        setIsHover(false)
    }

    return (
        <div className="col-span-1 flex lg:justify-end items-center">
            <div onClick={toggleDrawer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-[45px] p-1 flex flex-col gap-y-[6px] lg:w-[45px] cursor-pointer">
                <div className={`transition-all duration-300 self-end h-[2px] lg:h-[3.5px] w-1/2 rounded-r-full ${drawerVis || isHover ? 'bg-red-500' : 'bg-white'}`}></div>
                <div className={`transition-all duration-300 self-end h-[2px] lg:h-[3.5px] w-full ${drawerVis || isHover ? 'bg-red-500' : 'bg-white'}`}></div>
                <div className={`transition-all duration-300 h-[2px] lg:h-[3.5px] w-[35%] rounded-l-full ${drawerVis || isHover ? 'bg-red-500' : 'bg-white'}`}></div>
            </div>
        </div>
    );
}

export default Bars;