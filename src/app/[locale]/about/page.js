import Image from 'next/image';
import { useTranslations } from 'next-intl';

const page = () => {
	const t = useTranslations('About');

	const keys = ['paragraph1', 'paragraph2'];
	return (
		<div className="py-10">
			<h2 className="text-3xl pb-10 font-bold">{t('Title')}</h2>
			<div className="flex align-center justify-between space-x-10">
				<div className="text-xl">
					{keys.map((key) => (
						<p className="py-4">{t(`paragraphs.${key}`)}</p>
					))}
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
