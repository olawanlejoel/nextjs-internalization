import { useTranslations } from 'next-intl';

const Hero = () => {
	const t = useTranslations('Home.Hero');

	return (
		<div className="w-3/4 mx-auto py-32 text-center">
			<h1 className="text-6xl font-bold">{t('Title')}</h1>
			<p className="pt-8 text-xl">{t('Subtitle')}</p>
			<a
				href="/about"
				className="px-4 py-4 mt-6 bg-blue-500 text-white rounded inline-block"
			>
				{t('CallToAction')}
			</a>
		</div>
	);
};

export default Hero;
