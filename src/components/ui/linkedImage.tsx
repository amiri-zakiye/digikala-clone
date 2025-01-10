import Image from "next/image";
import Link from "next/link";

const LinkedImage = (
    {containerClassName,imageClassName,href,src,alt,width,height,loading}: {
        containerClassName?: string,imageClassName?: string,href: string,src:string,width: number,height: number,alt?: string,loading ?: "lazy" | "eager"}
    ) => {
   
    return(
        <Link href={href} className={containerClassName}>
            <Image src={src} alt={alt || ""} width={width} height={height} className={imageClassName} loading={loading} />
        </Link>
    )

}

export default LinkedImage;