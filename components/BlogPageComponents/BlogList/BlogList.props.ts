import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Blog } from 'interfaces/blog.interface';


export interface BlogListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	blog: Blog[],
}