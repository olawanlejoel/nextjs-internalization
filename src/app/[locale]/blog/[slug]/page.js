import Image from 'next/image';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

async function getPost(locale, slug) {
	const client = new ApolloClient({
		uri: 'https://api-sa-east-1.hygraph.com/v2/clt1kvvhp000008jt7siz2lui/master',
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			query PostQuery {
				post(
					where: { slug: "${slug}" }
					locales: [${locale}]
				) {
					id
					slug
					title
					content {
						html
					}
					coverImage {
						url
					}
				}
			}
		`,
	});

	return data.post;
}

const page = async ({ params }) => {
	const { locale, slug } = params;
	const post = await getPost(locale, slug);

	return (
		<div className="py-10 w-3/4 mx-auto">
			<h2 className="text-3xl pb-10 font-bold">{post.title}</h2>
			<div>
				<div className="">
					<Image
						src="/about.jpeg"
						width={1200}
						height={200}
						style={{
							objectFit: 'cover',
							height: '300px',
							width: '100%',
						}}
						sizes="(max-width: 768px) 100vw, 33vw"
						alt="Picture of the author"
						className="rounded"
					/>
				</div>
				<div className="pt-10">
					<div
						dangerouslySetInnerHTML={{
							__html: post.content.html,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default page;
