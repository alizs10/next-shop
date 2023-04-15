import Image from "next/image";

function Logo() {

    return (
        <Image className='w-10 lg:w-24' src="/assets/icons/nike-white-logo.png" width={100} height={100} alt="nike logo" />
    );
}

export default Logo;