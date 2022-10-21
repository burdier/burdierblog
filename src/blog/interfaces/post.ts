export type MarkDown = string
export type Slug = string
export type Title = string
export type HTML = string
type Post = {
    title: Title; 
    slug: Slug;
    markDown: MarkDown;
    html: HTML; 
    date: string;
}
export default Post;

