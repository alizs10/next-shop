import XIcon from "../ui/icons/XIcon";
import { motion } from 'framer-motion'
import { useState } from "react";
import CustomSlider from '../Common/CustomSlider';

function FiltersPopup({ toggleFilterPopup }) {

    const [priceValue, setPriceValue] = useState([100, 250]);
    const [sizeValue, setSizeValue] = useState([4, 16]);
    const [ratingValue, setRatingValue] = useState([4, 5]);

    const handleChangePriceRange = (event, newValue) => {
        setPriceValue(newValue);
    };
    const handleChangeSizeRange = (event, newValue) => {
        setSizeValue(newValue);
    };
    const handleChangeRatingRange = (event, newValue) => {
        setRatingValue(newValue);
    };

    const priceMarks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 300,
            label: '300 $',
        },
    ];

    const sizeMarks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 20,
            label: '20',
        },
    ];

    const ratingMarks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 5,
            label: '5',
        },
    ];


    return (
        <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [0.9, 1], opacity: [0, 1] }}
            exit={{ scale: [1, 0.9], opacity: [1, 0] }}
            transition={{ bounce: "spring", duration: "0.3" }}
            className='absolute top-0 right-0 p-5 w-[25rem] z-30 shadow-lg aspect-square rounded-3xl bg-slate-700'>
            <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-white">Filters</span>
                <span onClick={toggleFilterPopup} className='hover:bg-slate-800 transition-all duration-300 p-1 rounded-md cursor-pointer text-white scale-125'>
                    <XIcon />
                </span>
            </div>

            <div className="flex flex-col mt-6 gap-y-4">
                <span className="text-white font-bold text-md">Price Range</span>


                <CustomSlider
                    min={0}
                    step={10}
                    max={300}
                    value={priceValue}
                    onChange={handleChangePriceRange}
                    valueLabelDisplay="auto"
                    marks={priceMarks}

                />
            </div>

            <div className="flex flex-col mt-6 gap-y-4">
                <span className="text-white font-bold text-md">Size Range</span>
                <CustomSlider
                    getAriaLabel={() => 'Size range'}
                    min={0}
                    step={1}
                    max={20}
                    value={sizeValue}
                    onChange={handleChangeSizeRange}
                    valueLabelDisplay="auto"
                    marks={sizeMarks}
                />
            </div>

            <div className="flex flex-col mt-6 gap-y-4">
                <span className="text-white font-bold text-md">Rating</span>
                <CustomSlider
                    getAriaLabel={() => 'Rating range'}
                    min={0}
                    step={1}
                    max={5}
                    value={ratingValue}
                    onChange={handleChangeRatingRange}
                    valueLabelDisplay="auto"
                    marks={ratingMarks}
                />
            </div>

            <button className='mt-8 w-full py-2 rounded-xl text-xl font-bold bg-red-500 text-white'>
                Filter
            </button>
        </motion.div>
    );
}

export default FiltersPopup;