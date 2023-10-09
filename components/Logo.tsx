import Image from "next/image"

export default function Logo() {
    return (
    <div>
        <Image
            src="/cincin-logo.png"
            alt="CinCin Logo"
            width={592}
            height={288}
        />
    </div>
    )
}