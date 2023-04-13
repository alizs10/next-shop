function Switch({ handleChange, value }) {

    return (
        <div
            onClick={() => handleChange(!value)}
            className={`cursor-pointer w-12 h-fit rounded-full p-1 transition-all duration-300 ${value == 1 ? 'bg-red-500' : 'bg-gray-200'}`}>
            <span className={`w-5 aspect-square shadow-md block bg-white rounded-full transition-all duration-300 ${value == 1 && 'ml-5'}`}></span>
        </div>
    )
}

export default Switch