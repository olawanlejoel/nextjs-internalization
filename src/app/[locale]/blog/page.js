import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

async function getPosts(locale) {
	const client = new ApolloClient({
		uri: 'https://api-sa-east-1.hygraph.com/v2/clt1kvvhp000008jt7siz2lui/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
			query PostsQuery {
				posts(locales: [${locale}]) {
					id
					title
					slug
					excerpt
				}
			}
		`,
	});

	return data.data.posts;
}

const page = async ({ params }) => {
	const { locale } = params;
	const posts = await getPosts(locale);
	console.log();

	return (
		<div className="py-10 w-3/4 mx-auto">
			<h2 className="text-3xl pb-10 font-bold">Blog</h2>
			<div className="flex flex-col space-y-5 text-black">
				{posts &&
					posts.map((post) => (
						<Link href={`/${locale}/blog/${post.slug}`} key={post.id}>
							<div className="bg-gray-300 p-6 rounded">
								<h3 className="text-xl font-bold mb-2">{post.title}</h3>
								<p>{post.excerpt}</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default page;
