import Image from "next/image"

export default function CTA() {
    return (
        <div className="flex items-center justify-center w-[85%] pb-12">
            <Image
                src="/cincin-cta.png"
                alt="CinCin CTA"
                width={1113}
                height={470}
            />            
        </div>
    )
}