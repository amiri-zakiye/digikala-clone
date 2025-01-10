import Link from "next/link";
import Image from "next/image";

const LinkedImage = (
    {containerClassName,imageClassName,href,src,alt}: {
        containerClassName?: string,imageClassName?: string,href: string,src:string,width?: number,height?: number,alt?: string}
    ) => {
    return(
        <Link href={href} className={containerClassName}>
            <Image src={src} alt={alt || ""} width="195" height="30" className={imageClassName}/>
        </Link>
    )
}

export default LinkedImage;