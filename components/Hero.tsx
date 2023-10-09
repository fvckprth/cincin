import Image from "next/image"

export default function Hero() {
    return (
        <div className="flex items-center justify-center w-[75%] md:w-1/2 pb-12">
            <Image
                src="/cincin-hero.png"
                alt="CinCin Mobile"
                width={1100}
                height={276}
            />
        </div>
    )
}