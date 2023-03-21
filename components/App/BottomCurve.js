import Image from "next/image";

function BottomCurve() {
    return (
        <div className="hidden lg:block pr-8 rotate-[10deg]">
            <Image className="h-52" src='/assets/bottom-curve.png' alt="bottom-curve" height={400} width={200} />
        </div>
    );
}

export default BottomCurve;