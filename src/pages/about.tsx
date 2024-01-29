import { Heading, Select, Stack } from '@chakra-ui/react';
import YandexMaps from '~/UI/Yandex/YandexMaps';
import { CityState, useCity } from '~/store/useCity';

const AboutPage = () => {
	const { city, setCity } = useCity();
	return (
		<Stack mx={5}>
			<Heading
				textColor="blackAlpha.700"
				textAlign="center"
				fontSize="lg"
			>
				Где мы находимся?
			</Heading>
			<Select
				onChange={(e) => setCity(e.target.value as CityState['city'])}
                defaultValue={city}
			>
				<option value='sev'>Севастополь</option>
				<option value='sar'>Саратов</option>
			</Select>
			<YandexMaps />
		</Stack>
	);
};
export default AboutPage;
