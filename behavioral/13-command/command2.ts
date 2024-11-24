namespace Command2 {
	class BlogService {
		save() {}
		update() {}
		delete() {}
		getPost() {}
		getPosts() {}
		titleToSlug() {}
		dateToHumanize() {}
		getMostViewedPosts() {}
		getFeaturedPosts() {}
		getMonetizedPosts() {}
	}

	interface BlogPost {
		execute(params: any): any;
	}

	class SaveBlogPost implements BlogPost {
		execute() {
			const blog = new BlogService();
			blog.titleToSlug();
			blog.update();
		}
	}

	new SaveBlogPost().execute();
}
