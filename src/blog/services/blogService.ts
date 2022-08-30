import Post, { Slug } from '../interfaces/post'


interface IBlogServices {
	GetPostBySlug(slug: Slug): Promise<Post>
	GetAllPost(): Promise<Post[]>
}


class BlogServices implements IBlogServices {
	public async GetPostBySlug(slug: Slug): Promise<Post> {
		const post: Post = { slug: 'primer-post', title: 'primet post', markDown: '### primer post', html: "<p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>" }
		return post
	}

	public async GetAllPost(): Promise<Post[]> {
		return [{ title: "Como Configurar Metricas a Typescript", html: "<p>hola<p>", markDown: "# hola", slug: "metric" }, { title: "Como Configurar Metricas a Typescript", html: "<p>hola<p>", markDown: "# hola", slug: "metric" }, {
			title: "Hola Mundo",
			html: "<p>Hola Mundo</p>", markDown: "### Hola Mundo", slug: "hola-mundo"
		}]
	}
}

export default BlogServices;




