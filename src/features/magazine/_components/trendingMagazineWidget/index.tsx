
import {MagazinePosts} from "../../types";
import MagazineCard from "./_components/magazineCard";
import MagazinePostsTitle from "./_components/title";

const itemsCount = 4;

const TrendingMagazine = ({data} : {data: MagazinePosts}) => {
    return(
        <section className="container lg:px-4 pb-5">
            <MagazinePostsTitle />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-stretch lg:justify-around px-5 lg:px-0">
                {
                    data.news.slice(0,itemsCount).map(item => (
                        <MagazineCard magazine={item} key={item.title} />
                    ))
                }
            </div>
        </section>
    )
}
export default TrendingMagazine;