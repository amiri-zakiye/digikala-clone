export type SortOption = {
  id: string;
  title: string;
};
export type Comment = {
  rate: number;
  is_buyer: boolean;
  id: number;
  body: string;
  title: string;
  user_name: string;
  created_at: string;
};
export type CommentPager = {
  current_page: number;
  total_pages: number;
  total_items: number;
};
export type CommentApi = {
  data: {
    sort_options: SortOption[];
    comments: Comment[];
    pager: CommentPager;
  };
};
