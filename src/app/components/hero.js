const Hero = () => {
	return (
		<div className="w-3/4 mx-auto py-32 text-center">
			<h1 className="text-6xl font-bold">Next.js Internalization Demo</h1>
			<p className="pt-8 text-xl">
				This demo uses Next.js and the next-intl package to create a
				multi-language website. We later also explore how it works with Hygraph.
			</p>
			<a
				href="/about"
				className="px-4 py-4 mt-6 bg-blue-500 text-white rounded inline-block"
			>
				Read about us
			</a>
		</div>
	);
};

export default Hero;
