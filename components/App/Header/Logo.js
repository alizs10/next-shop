import Image from "next/image";

function Logo() {
    return (
        <div className="col-span-2 flex items-center">
            <Image className='ml-20 w-24' src="/assets/icons/nike-white-logo.png" width={100} height={100} alt="nike logo" />
        </div>
    );
}

export default Logo;