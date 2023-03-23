import Image from "next/image";
import Link from "next/link";

function Logo() {

        return (
            <div className="col-span-2 flex items-center">
                <Link href="/">
                    <Image className='ml-4 lg:ml-20 w-10 lg:w-24' src="/assets/icons/nike-white-logo.png" width={100} height={100} alt="nike logo" />
            </Link>
        </div>
    );
}

export default Logo;