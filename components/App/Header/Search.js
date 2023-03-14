import { useEffect, useRef, useState } from "react";
import SearchIcon from "../../ui/icons/SearchIcon";
import XIcon from "../../ui/icons/XIcon";

function Search() {

    const [isExpanded, setIsExpanded] = useState(false)

    const searchInputRef = useRef(null)

    function toggleSearch() {
        setIsExpanded(prevState => !prevState)
    }

    useEffect(() => {

        if (!isExpanded) return

        searchInputRef.current.focus()

    }, [isExpanded])

    return (
        <div className="relative mr-3">
            <div onClick={toggleSearch} className="lg:scale-125 w-10 cursor-pointer text-red-500">
                {isExpanded ? <XIcon /> : <SearchIcon />}
            </div>

            {isExpanded && (
                <div className="absolute bottom-0 right-full mr-4 flex gap-x-2 items-end">
                    <span className="text-red-500 scale-125 cursor-pointer">
                        <SearchIcon />
                    </span>
                    <input ref={searchInputRef} className="py-2 px-3 border-2 border-red-500 bg-gray-700 rounded-xl text-md text-red-400 outline-none" />
                </div>
            )}
        </div>
    );
}

export default Search;