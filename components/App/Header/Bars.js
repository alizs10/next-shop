function Bars() {
    return (
        <div className="col-span-1 flex justify-end items-center">

            <div className="col-span-1 flex flex-col gap-y-[6px] w-[45px] cursor-pointer">
                <div className="self-end h-[3.5px] w-1/2 bg-white rounded-r-full"></div>
                <div className="self-end h-[3.5px] w-full bg-white"></div>
                <div className="h-[3.5px] w-[35%] bg-white rounded-l-full"></div>
            </div>
        </div>
    );
}

export default Bars;