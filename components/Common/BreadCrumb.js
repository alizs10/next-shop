import Link from "next/link";
import PropTypes from 'prop-types'

function BreadCrumb({ paths }) {
    console.log(paths);
    return (
        <div className="mx-20 mt-20 text-gray-800 w-full flex gap-x-2">
            {paths.map((path, index) => {
                let isLast = index === paths.length - 1 ? true : false
                return (
                    <span className="flex gap-x-2" key={index}>
                        <Link className={`${path.current ? "text-blue-400" : "text-gray-800"}`} href={path.url}>{path.name}</Link>
                        {!isLast && (<span>/</span>)}
                    </span>
                )
            })}
        </div>
    );
}

BreadCrumb.propTypes = {
    paths: PropTypes.array
};

export default BreadCrumb;