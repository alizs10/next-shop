import React, { useContext, useEffect, useState } from 'react'
import ProductsContext from '../../context/ProductsContext'
import Page from './Page'

function Pagination() {

    const { pages, allProducts, currentPage, setPageNum } = useContext(ProductsContext)
    const [pagesArr, setPagesArr] = useState([])


    useEffect(() => {
        if (pages) {
            let pagesArray = []
            let i = 1;
            while (i <= pages) {
                pagesArray = [...pagesArray, i]
                i++;
            }
            setPagesArr(pagesArray)
        }
    }, [])

    if (!pages) return

    return (
        <section className='px-20 mt-14 w-full flex justify-end items-center'>

            <div className='p-3 flex gap-2 items-center'>
                <span className='flex items-center text-xs relative px-2'>
                    <span className='text-md'>{allProducts} products</span>
                    <div className='w-[5px] h-[5px] bg-gray-600 ml-2 rounded-full'></div>
                </span>
                {currentPage > 1 && (
                    <button
                        onClick={() => setPageNum(currentPage - 1)}
                        className='text-xs'>
                        Prev
                    </button>
                )}

                {pagesArr.map(pageNum => <Page key={pageNum} setPageNum={setPageNum} pageNum={pageNum} isActive={currentPage == pageNum ? true : false} />)}
                {currentPage < pages && (
                    <button
                        onClick={() => setPageNum(currentPage + 1)}
                        className='text-xs'>
                        Next
                    </button>
                )}
            </div>

        </section>
    )
}

export default Pagination