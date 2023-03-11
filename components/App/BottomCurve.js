import Image from "next/image";

function BottomCurve() {
    return (
        <div className="hidden lg:block pr-6 rotate-[5deg]">
            <Image className="h-52" src='/assets/bottom-curve.png' height={400} width={200} />
        </div>
    );
}

export default BottomCurve;