import { toFarsiNumber } from "@/utils/formatters";
import type { Comment as TComment } from "../commentSection/comment.types";
import ProductStars from "../productStars";

const Comments = ({ comments }: { comments: TComment[] }) => {
  return (
    <>
      {comments.map((item) => {
        return <Comment key={item.id} {...item} />;
      })}
    </>
  );
};

const Comment = ({
  id,
  rate,
  is_buyer,
  created_at,
  body,
  title,
  user_name,
}: TComment) => {
  return (
    <div className="py-3 border-neutral-200 border-b">
      <div>
        <div className="flex items-center">
          <p className="text-caption text-neutral-400 inline">
            {user_name || "کاربر دیجی‌کالا"}
          </p>
          {is_buyer ? (
            <div className="inline-flex items-center mr-2 px-2 text-caption-strong text-">
              <p className="inline-block text-hint-success bg-hint-success-light px-3 rounded-sm text-caption-strong">
                خریدار
              </p>
            </div>
          ) : null}
          <div className="flex my-2 mx-2">
            <svg width={16} height={16} className="fill-icon-disable">
              <use xlinkHref="#dotOutline"></use>
            </svg>
          </div>
          <p className="text-caption text-neutral-400 inline">
            {toFarsiNumber(created_at)}
          </p>
        </div>
        <ProductStars rate={rate} />
      </div>
      <div className="gap-y-3 flex flex-col">
        <p className="font-normal text-body-1 text-neutral-900 mb-1 break-words">
          {body}
        </p>
      </div>
      <div className="w-full flex items-center flex-row mt-3">
        <div className="flex items-center">
          <div className="flex text-neutral-700 ml-2">
            <svg width={18} height={18} className="fill-icon-high-emphasis">
              <use xlinkHref="#seller"></use>
            </svg>
          </div>
          <p className="text-caption text-neutral-700 inline">برترین کیفیت</p>
          <div className="flex lg:mx-2 border-100">
            <svg width={16} height={16} className="fill-icon-disable">
              <use xlinkHref="#dotOutline"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
