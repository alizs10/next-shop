import React, { useEffect, useRef, useState } from 'react'
import Page from './Page'

function Pagination(props) {

    const [pagesArr, setPagesArr] = useState([])

    useEffect(() => {
        if (props.pages) {
            let pagesArray = []
            let i = 1;
            while (i <= props.pages) {
                pagesArray = [...pagesArray, i]
                i++;
            }
            setPagesArr(pagesArray)
        }
    }, [])
    return (
        <section className='px-20 mt-14 w-full flex justify-end items-center'>

            <div className='p-3 flex gap-2 items-center'>
                <span className='flex items-center text-xs relative px-2'>
                    <span className='text-md'>{props.allProducts} products</span>
                    <div className='w-[5px] h-[5px] bg-gray-600 ml-2 rounded-full'></div>
                </span>
                {props.currentPage > 1 && (
                    <button className='text-xs'>
                        Prev
                    </button>
                )}

                {pagesArr.map(pageNum => <Page pageNum={pageNum} isActive={props.currentPage == pageNum ? true : false} />)}


                {props.currentPage < props.pages && (
                    <button className='text-xs'>
                        Next
                    </button>
                )}
            </div>

        </section>
    )
}

export default Pagination