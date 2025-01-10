import Link from "next/link";
import Image from "next/image";

const LinkedImage = (
    {className,href,src,alt}: {
    className: string,href: string,src:string,width?: number,height?: number,alt?: string}
    ) => {
    return(
        <Link href={href} className={className}>
            <Image src={src} alt={alt || ""} width="195" height="30"/>
        </Link>
    )
}

export default LinkedImage;