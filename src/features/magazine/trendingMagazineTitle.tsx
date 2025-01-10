import Link from "next/link"

const MagazinePostsTitle = () => {
    return (
        <div className="flex justify-between py-4 items-center px-5">
            <div className="text-h5 text-neutral-900">خواندنی&zwnj;ها</div>
            <Link
                className="inline-flex items-center cursor-pointer text-secondary-700 text-button-2"
                href="/mag/"><span>مطالب بیشتر در دیجی&zwnj;کالا مگ</span>
                <svg width={18} height={18} className={"fill-secondary-700"}>
                    <use
                        xlinkHref="#chevronLeft"></use>
                </svg>
            </Link>
        </div>
    )
}
export default MagazinePostsTitle