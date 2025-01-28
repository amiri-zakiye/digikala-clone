import { pageContext } from "@/utils/serverContext";
import { getComments } from "../../apiLayer";
import SortComments from "../sortComments";
import Comments from "../comments";

const CommentSection = async () => {
  const { params } = await pageContext.get();
  const { id: productId } = params;
  const { data } = await getComments(productId, 1);
  const { pager, comments, sort_options } = data;

  return (
    <>
      <SortComments options={sort_options} />
      <Comments comments={comments} />
    </>
  );
};
export default CommentSection;
