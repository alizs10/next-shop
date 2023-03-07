import Image from "next/image";
import Border from './Border'

function Main() {
    return (
        <div className="px-20 grid grid-cols-7 gap-2">

            <div className="pt-32 col-span-3 flex flex-col font-sans">
                <Image className="w-14 mb-2" src='/assets/icons/nike-logo-text.png' width={80} height={60} />
                <strong className="text-orange-200/90 inline-block text-[150px] leading-[120px] break-words font-bold">BORING</strong>
                <strong className="text-orange-200/90 text-[100px] leading-[120px] font-bold">SHOES?</strong>
                <span className="text-white text-2xl">Let Us <strong>HELP</strong> you fix it...</span>

                <button className="mt-10 w-fit text-md font-bold text-white rounded-xl bg-red-500/100 py-2 px-5">EXPLORE OUT STORE</button>
            </div>

            <div className="col-span-4 relative flex items-center">

                <div className="mt-40 flex justify-start ml-44 items-end text-white w-full h-full border-white z-0">
                    <Border />
                </div>

                <div className="absolute top-28 -left-32">
                    <Image className="rotate-[-30deg] scale-[140%]" src={'/assets/nike-shoe-rmed-bg.png'} width={600} height={600} />
                </div>


            </div>



        </div>
    );
}

export default Main;