import {Magazine} from "./types";
import Image from "next/image";

const MagazineCard = ({magazine} : {magazine: Magazine}) => {
    return (
        <a
            className="bg-white mb-1 border rounded-sm border-neutral-200 user-select-none rounded-medium flex flex-col h-full overflow-hidden"
            target="_blank" href={magazine.url.uri}>
            <Image 
                className="w-full object-cover inline-block"
                src={magazine.image}
                alt={magazine.title}
                width={100}
                height={100}
            />
            <div className="mt-2 mb-3 px-4 ellipsis-2 text-body-2 text-neutral-900 w-full text-right">
                {magazine.title}
            </div>
        </a>
    )
}
export default MagazineCard