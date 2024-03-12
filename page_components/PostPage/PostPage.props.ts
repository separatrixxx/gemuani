import { Links } from "interfaces/blog.interface";


export interface PostPageProps {
	id: string,
	image: string[],
	title: string,
	text: string,
    date: string,
	links: Links | undefined,
}