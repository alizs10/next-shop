import { useEffect, useState } from "react";

function SizeInput({ size, handleSelectSize, selectedSizes }) {

    useEffect(() => {

        let isSelected = selectedSizes.find(selectedSize => selectedSize.sizeId === size._id)

        if (isSelected) {
            setSelected(isSelected)
            setPriceIncreaseInpVis(true)
        }
    }, [])


    const [selected, setSelected] = useState(null)
    function handleChangeSelected(value) {
        setSelected({ sizeId: size._id, price_increase: value })
    }

    useEffect(() => {

        if (selected) {
            handleSelectSize(selected)
        }

    }, [selected])

    const [priceIncreaseInpVis, setPriceIncreaseInpVis] = useState(false)
    function toggleSelect() {
        setPriceIncreaseInpVis(prevState => !prevState)
    }

    return (
        <div className='col-span-1 flex flex-col gap-y-2'>
            <span onClick={toggleSelect} className={`col-span-1 cursor-pointer p-3 flex justify-center items-center text-white bg-gray-600 rounded-md border-[3px] ${priceIncreaseInpVis ? 'border-emerald-400' : 'border-gray-600'}`}>
                {size.size}
            </span>
            {priceIncreaseInpVis && (
                <input
                    value={selected?.price_increase ?? ""}
                    onChange={e => handleChangeSelected(e.target.value)}
                    className='col-span-1 bg-gray-600 text-white outline-none rounded-md px-3 py-1 text-md' placeholder='price increase' />
            )}
        </div>
    );
}

export default SizeInput;