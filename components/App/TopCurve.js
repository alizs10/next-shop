import Image from "next/image";

function TopCurve() {
    return (
        <div className="pr-6 -rotate-[5deg]">
            <Image className="h-52" src='/assets/top-curve.png' height={400} width={200} />
        </div>
    );
}

export default TopCurve;