import Image from "next/image";

function TopCurve() {
    return (
        <div className="hidden lg:block pr-8 -rotate-[10deg]">
            <Image className="h-52" src='/assets/top-curve.png' alt="top-curve" height={400} width={200} />
        </div>
    );
}

export default TopCurve;