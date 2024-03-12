export interface Blog {
	id: string,
	image: string[],
	title: string,
	text: string,
	date: string,
	links?: Links,
}

export interface Links {
	fb?: string[],
	ig?: string[],
	yt?: string[],
	tw?: string[],
}
