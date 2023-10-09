import Image from "next/image"
import Link from "next/link"

export default function CTA() {
    return (
        <div className="flex items-center justify-center w-[85%] pb-12 z-[1000]">
            <Link href="http://www.google.com">
                <Image
                    src="/cincin-cta.png"
                    alt="CinCin CTA"
                    width={1113}
                    height={470}
                />
            </Link>            
        </div>
    )
}