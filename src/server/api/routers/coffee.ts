import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import axios from 'axios';
import { env } from '~/env';

export const coffeeRoute = createTRPCRouter({
	get: publicProcedure.query(async () => {
		const coffee = await axios.get(env.API_CALL, {
			method: 'GET',
		});
		return coffee.data.result.data.json.map((item) => ({
			id: item.id,
			name: item.name,
			img: item.img,
			description: item.description,
			acidity: item.acidity,
			density: item.density,
			price: item.price,
			type: item.type,
			info: item.info,
		}));
	}),
});
