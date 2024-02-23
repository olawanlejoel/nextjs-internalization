const features = () => {
	const Features = [
		{
			Title: 'Enhanced App Router Integration',
			Description:
				"The next-intl package, coupled with Hygraph, offers seamless integration with Next.js's App Router, enabling dynamic routing capabilities tailored for multilingual applications. This integration simplifies the development of internationalized routes, enhancing user navigation and experience.",
		},
		{
			Title: 'Static Rendering Support',
			Description:
				"Leverage the power of Next.js's static rendering for faster page loads and improved SEO. The next-intl package and Hygraph support static site generation (SSG), ensuring your internationalized content is pre-rendered for optimal performance and accessibility.",
		},
		{
			Title: 'Advanced Navigation Solutions',
			Description:
				"Equip your multilingual site with advanced navigation features. The integration of next-intl and Hygraph facilitates the creation of intuitive, language-specific navigational structures, making it easier for users to explore your site's diverse content.",
		},
	];
	return (
		<div className="flex space-x-10 text-black">
			{Features.map((feature) => (
				<div className="bg-blue-100 p-6 rounded">
					<h3 className="text-lg font-bold mb-2">{feature.Title}</h3>
					<p>{feature.Description}</p>
				</div>
			))}
		</div>
	);
};

export default features;
