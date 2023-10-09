import Image from "next/image"

export default function Hero() {
    return (
        <div>
            <div>
                <Image
                    src="/cincin-hero.png"
                    alt="CinCin Mobile"
                    width={1100}
                    height={276}
                />
            </div>
        </div>
    )
}