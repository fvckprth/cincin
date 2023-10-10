import Image from "next/image"
import Link from "next/link"

export default function CTA() {
    return (
        <div className="flex items-center justify-center w-[35%] md:w-[15%] pb-12 z-[1000]">
            <Link href="https://invite.cincin.nyc/october-12">
                <Image
                    src="/cincin-cta-rsvp.png"
                    alt="CinCin CTA"
                    width={1113}
                    height={470}
                />
            </Link>            
        </div>
    )
}