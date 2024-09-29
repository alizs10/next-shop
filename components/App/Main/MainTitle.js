import Image from "next/image";

function MainTitle() {
    return (

        <div className="z-10 flex flex-col col-span-7 font-sans lg:col-span-3 gap-y-4">
            <Image className="hidden md:block md:w-10" src='/assets/icons/nike-logo-text.png' alt="nike-logo-with-text" width={80} height={60} />
            <div className="flex flex-col items-center md:items-start gap-y-4">
                <span className="flex flex-col justify-center gap-x-2 md:justify-start">
                    <strong className="text-orange-200/90 inline-block text-5xl sm:text-7xl lg:text-[100px] 2xl:text-[120px] break-words font-bold">BORING</strong>
                    <strong className="text-orange-200/90 text-5xl lg:text-[80px] 2xl:text-[100px] sm:text-7xl font-bold">SHOES?</strong>
                </span>
                <span className="text-base text-white capitalize sm:text-lg lg:text-xl xl:text-2xl">let us help you fix it</span>

                <button className="px-3 py-1 font-semibold text-white rounded-lg w-fit sm:text-lg lg:text-xl lg:font-bold sm:rounded-xl bg-red-500/100 sm:py-2 sm:px-5">EXPLORE OUR STORE</button>
            </div>
        </div>

    );
}

export default MainTitle;