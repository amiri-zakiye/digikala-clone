import { pageContext } from "@/utils/serverContext";
import { getComments } from "@/app/product/[id]/apiLayer";
import SortComments from "./components/sortComments";
import Comments from "./components/comments";

const CommentSection = async () => {
  const { params } = await pageContext.get();
  const { id: productId } = params;
  const { data } = await getComments(productId, 1);
  const { comments, sort_options } = data;

  return (
    <>
      <SortComments options={sort_options} />
      <Comments comments={comments} />
    </>
  );
};
export default CommentSection;
