import { useState } from "react";

function Menus() {

    const [cats, setCats] = useState(['MEN', 'WOMEN', 'KIDS', 'COLLECTIONS'])
    const [selectedCat, setSelectedCat] = useState(0)

    function handleSelectCat(catIndex) {
        setSelectedCat(catIndex)
    }

    return (
        <ul className="hidden col-span-7 mx-auto xl:flex flex-nowrap">
            {cats.map((cat, index) => (
                <li key={index} onClick={() => handleSelectCat(index)} className={`transition-all duration-300 border-b-[3px] cursor-pointer py-2 px-5 font-bold text-xl ${index === selectedCat ? 'text-red-500 border-red-500' : 'text-white border-transparent'}`}>{cat}</li>
            ))}
        </ul>
    );
}

export default Menus;