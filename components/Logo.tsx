import Image from "next/image"

export default function Logo() {
    return (
        <div className="flex items-center justify-center w-1/2 md:w-1/4 pb-12">
            <Image
                src="/cincin-logo.png"
                alt="CinCin Logo"
                width={592}
                height={288}
            />
        </div>
    )
}