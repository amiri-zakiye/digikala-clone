import { ArticlePosts } from "./articles.types";
import ArticleCard from "./components/articleCard";
import ArticleSectionHeader from "./components/sectionHeader";

const itemsCount = 4;

const TrendingArticles: React.FC<{ data: ArticlePosts }> = ({
  data,
}: {
  data: ArticlePosts;
}) => {
  return (
    <section className="container lg:px-4 pb-5">
      <ArticleSectionHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-stretch lg:justify-around px-5 lg:px-0">
        {data.news.slice(0, itemsCount).map((item) => (
          <ArticleCard magazine={item} key={item.title} />
        ))}
      </div>
    </section>
  );
};
export default TrendingArticles;
