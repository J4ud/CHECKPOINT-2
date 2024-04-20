export const getFact = async () => {
	try {
		const dataFact = await fetch(`https://catfact.ninja/fact`).then((res) => res.json());
		console.log(dataFact);
		return dataFact.fact;
	} catch (error) {
		console.log('error', error);
		return error;
	}
};
