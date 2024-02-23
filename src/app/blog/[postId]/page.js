import Image from 'next/image';

const page = () => {
	return (
		<div className="py-10 w-3/4 mx-auto">
			<h2 className="text-3xl pb-10 font-bold">Support for App Router</h2>
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
					<p className="pb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
						aliquam, sint cupiditate animi in excepturi unde vero magnam id
						rerum consequatur saepe ipsum dicta. Quidem perferendis perspiciatis
						saepe aliquam quam!Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Accusantium aliquam, sint cupiditate animi in
						excepturi unde vero magnam id rerum consequatur saepe ipsum dicta.
						Quidem perferendis perspiciatis saepe aliquam quam!Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Accusantium aliquam, sint
						cupiditate animi in excepturi unde vero magnam id rerum consequatur
						saepe ipsum dicta. Quidem perferendis perspiciatis saepe aliquam
						quam!
					</p>
					<p className="pb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
						aliquam, sint cupiditate animi in excepturi unde vero magnam id
						rerum consequatur saepe ipsum dicta. Quidem perferendis perspiciatis
						saepe aliquam quam!Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Accusantium aliquam, sint cupiditate animi in
						excepturi unde vero magnam id rerum consequatur saepe ipsum dicta.
						Quidem perferendis perspiciatis saepe aliquam quam!Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Accusantium aliquam, sint
						cupiditate animi in excepturi unde vero magnam id rerum consequatur
						saepe ipsum dicta. Quidem perferendis perspiciatis saepe aliquam
						quam!
					</p>
					<p className="pb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
						aliquam, sint cupiditate animi in excepturi unde vero magnam id
						rerum consequatur saepe ipsum dicta. Quidem perferendis perspiciatis
						saepe aliquam quam!Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Accusantium aliquam, sint cupiditate animi in
						excepturi unde vero magnam id rerum consequatur saepe ipsum dicta.
						Quidem perferendis perspiciatis saepe aliquam quam!Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Accusantium aliquam, sint
						cupiditate animi in excepturi unde vero magnam id rerum consequatur
						saepe ipsum dicta. Quidem perferendis perspiciatis saepe aliquam
						quam!
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
