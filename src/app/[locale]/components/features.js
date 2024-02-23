import { useTranslations } from 'next-intl';

const features = () => {
	const t = useTranslations('Home.Features');

	const keys = ['feature1', 'feature2', 'feature3'];

	return (
		<div className="flex space-x-10 text-black">
			{keys.map((key) => (
				<div className="bg-blue-100 p-6 rounded">
					<h3 className="text-lg font-bold mb-2">{t(`${key}.Title`)}</h3>
					<p>{t(`${key}.Description`)}</p>
				</div>
			))}
		</div>
	);
};

export default features;
