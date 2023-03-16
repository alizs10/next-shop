import Image from "next/image";

function MainTitle() {
    return (

        <div className="p-3 xl:pl-20 col-span-7 z-10 lg:col-span-3 flex flex-col gap-y-4 font-sans">
            <Image className="w-14 mb-2" src='/assets/icons/nike-logo-text.png' width={80} height={60} />
            <span>
                <h1 className="flex flex-col lg:leading-[100px] xl:leading-[110px] 2xl:leading-[120px]">
                    <strong className="text-orange-200/90 inline-block text-5xl sm:text-9xl lg:text-[100px] 2xl:text-[120px] break-words font-bold">BORING</strong>
                    <strong className="text-orange-200/90 text-3xl lg:text-[80px] 2xl:text-[100px] sm:text-7xl font-bold">SHOES?</strong>
                </h1>
                <span className="text-white text-md sm:text-lg lg:text-xl xl:text-2xl">Let Us <strong>HELP</strong> you fix it...</span>
            </span>

            <button className="mt-4 w-fit text-xs sm:text-lg lg:text-xl font-semibold lg:font-bold text-white rounded-lg sm:rounded-xl bg-red-500/100 py-1 px-3 sm:py-2 sm:px-5">EXPLORE OUR STORE</button>
        </div>

    );
}

export default MainTitle;