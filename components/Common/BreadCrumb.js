import Link from "next/link";
import PropTypes from 'prop-types'
import { useState } from "react";

function BCLink({ path, isLast, isFirst }) {

    const [isHover, setIsHover] = useState(false)

    function handleMouseIn() {
        setIsHover(true)
    }

    function handleMouseOut() {
        setIsHover(false)
    }

    return (
        <Link href={path.url}>
            <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} className={`relative h-fit bg-gray-100 cursor-pointer transition-all duration-300 ${path.current ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                <div className={`relative z-50 ${!isFirst && 'pl-12'} px-3 py-3`}>{path.name}</div>
                {!isLast && (
                    <div className={`absolute top-0 right-0 border-r-2 border-t-2 border-gray-300 translate-x-1/2 rotate-45 h-full aspect-square bg-gray-100 z-20 cursor-pointer transition-all duration-300 ${isHover && 'bg-gray-200'}`}></div>
                )}
            </div>
        </Link>
    )
}

function BreadCrumb({ paths }) {

    return (
        <div className="text-gray-800 w-fit overflow-hidden flex rounded-xl">
            {paths.map((path, index) => {
                let isLast = index === paths.length - 1 ? true : false
                let isFirst = index === 0 ? true : false
                return <BCLink key={index} path={path} isLast={isLast} isFirst={isFirst} />
            })}
        </div>
    );
}

BreadCrumb.propTypes = {
    paths: PropTypes.array
};

export default BreadCrumb;