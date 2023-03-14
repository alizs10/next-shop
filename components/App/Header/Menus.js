import { useState } from "react";

function Menus() {

    const [cats, setCats] = useState(['MEN', 'WOMEN', 'KIDS', 'COLLECTIONS'])
    const [selectedCat, setSelectedCat] = useState(0)

    function handleSelectCat(catIndex) {
        setSelectedCat(catIndex)
    }

    return (
        <ul className="col-span-6 mx-auto hidden xl:flex flex-nowrap">
            {cats.map((cat, index) => (
                <li onClick={() => handleSelectCat(index)} className={`transition-all duration-300 border-b-[3px] cursor-pointer py-2 px-5 font-bold text-xl ${index === selectedCat ? 'text-red-500 border-red-500' : 'text-white border-gray-800'}`}>{cat}</li>
            ))}
        </ul>
    );
}

export default Menus;