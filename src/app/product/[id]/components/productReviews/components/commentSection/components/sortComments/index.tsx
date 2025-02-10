import { SortOption } from "../commentSection/comment.types";

const SortComments = ({ options }: { options: SortOption[] }) => {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <SortCommentsTitle />
      <div className="contents">
        {options.map((item) => {
          return <SortCommentOption item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
const SortCommentsTitle = () => {
  return (
    <div className="break-words py-3">
      <div className="flex items-center grow">
        <svg width={24} height={24} className="fill-icon-high-emphasis">
          <use xlinkHref="#sort" />
        </svg>
        <p className="grow mr-2 cursor-pointer whitespace-nowrap text-neutral-700 relative text-body2-strong">
          مرتب سازی:
        </p>
      </div>
    </div>
  );
};

const SortCommentOption = ({ item }: { item: SortOption }) => {
  return (
    <span className="cursor-pointer whitespace-nowrap text-body-2 text-neutral-500">
      {item.title}
    </span>
  );
};
export default SortComments;
