export const getImage = async (text: string) => {
	try {
		const dataImage = await fetch(`https://cataas.com/cat/says/${text}`).then((res) => res.json());
		console.log(dataImage);
		return dataImage;
	} catch (error) {
		console.log('error', error);
		return error;
	}
};
