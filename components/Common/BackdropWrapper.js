function BackdropWrapper({children, handleClick}) {
    return (
        <div onClick={handleClick} className="fixed z-50 overflow-y-scroll inset-0 flex justify-center items-center">
            {children}
        </div>
    );
}

export default BackdropWrapper;