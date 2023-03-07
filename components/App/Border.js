import Image from "next/image";

function Border({ deg }) {
    return (
        <div className="pr-16" style={{ transform: 'rotate(' + deg + 'deg)' }}>
            <Image className="w-48" src='/assets/curve.png' height={400} width={200} />
        </div>
    );
}

export default Border;