export const convertToUSD = (price: number): string => {
	return price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.concat(' $');
};

export const dedectReview=(number:number):string=>{
		return number>1?'Reviews':'Review'
}