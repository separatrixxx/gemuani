import { DotProps } from './Dot.props';
import styles from './Dot.module.css';
import { useResizeW } from 'hooks/useResize';


export const Dot = ({ top, left, hidden, setHidden, title, setTitle, text, setText,
    setTopBlock, setLeftBlock }: DotProps): JSX.Element => {
    const width = useResizeW();

	return (
		<span className={styles.dot} style={{ top: top, left: left }}
            onMouseOver={() => {
                if (width >= 1024) {
                    setTitle(title);
                    setText(text);
                    setTopBlock(top);
                    setLeftBlock(left);
                    setHidden(false);
                }
            }} onMouseOut={() => {
                if (width >= 1024) {
                    setHidden(true);
                }
            }} onClick={() => {
                if (width < 1024) {
                    setTitle(title);
                    setText(text);
                    setTopBlock(top);
                    setLeftBlock(left);
                    setHidden(!hidden);
                }
            }} />
	);
};