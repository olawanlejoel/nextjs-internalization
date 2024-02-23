import Image from 'next/image';

const page = () => {
	return (
		<div className="py-10">
			<h2 className="text-3xl pb-10 font-bold">About this demo</h2>
			<div className="flex align-center justify-between space-x-10">
				<div className="text-xl">
					<p>
						This demonstration highlights the robust capabilities of the
						next-intl package, a premier internationalization framework designed
						for Next.js applications. By synergizing with Hygraph, this package
						delivers an all-encompassing toolkit for crafting multilingual
						websites. Key features include sophisticated app router integration,
						full support for static site generation (SSG) to enhance performance
						and SEO, and innovative navigation solutions that cater to a global
						audience.
					</p>
					<p>
						Beyond showcasing the technical synergies between next-intl and
						Hygraph, this demo elucidates how these tools collectively
						facilitate the development of multi-language platforms. They
						streamline the internationalization process, making it more
						accessible for developers to implement complex linguistic features,
						while ensuring users enjoy a fluid, intuitive browsing experience
						across diverse language settings.
					</p>
				</div>
				<Image
					src="/about.jpeg"
					width={500}
					height={500}
					alt="Picture of the author"
					className="rounded"
				/>
			</div>
		</div>
	);
};

export default page;
