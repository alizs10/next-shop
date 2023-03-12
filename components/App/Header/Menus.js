function Menus() {
    return (
        <ul className="col-span-6 mx-auto hidden xl:flex flex-nowrap">
            <li className="cursor-pointer py-2 px-5 text-red-500 font-bold text-xl border-b-[3px] border-red-500">MEN</li>
            <li className="cursor-pointer py-2 px-5 text-white font-bold text-xl">WOMEN</li>
            <li className="cursor-pointer py-2 px-5 text-white font-bold text-xl">KIDS</li>
            <li className="cursor-pointer py-2 px-5 text-white font-bold text-xl">COLLECTIONS</li>
        </ul>
    );
}

export default Menus;