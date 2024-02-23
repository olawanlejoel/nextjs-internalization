import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const page = () => {
	const t = useTranslations('Blog');

	const keys = ['post1', 'post2', 'post3', 'post4'];
	return (
		<div className="py-10 w-3/4 mx-auto">
			<h2 className="text-3xl pb-10 font-bold">{t('Title')}</h2>
			<div className="flex flex-col space-y-5 text-black">
				{keys.map((key, index) => {
					return (
						<Link href={`/blog`} key={index}>
							<div className="bg-gray-300 p-6 rounded">
								<h3 className="text-xl font-bold mb-2">
									{t(`Posts.${key}.Title`)}
								</h3>
								<p>{t(`Posts.${key}.Description`)}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default page;
