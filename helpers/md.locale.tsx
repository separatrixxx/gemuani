export function setMd(text: string): string {
	const accentRegexp = /\*\*(\S*)\*\*/gm;
    let newString: string = '';

    let accentArr = Array.from(text.matchAll(accentRegexp));

    
    for (let ra of accentArr) {
        newString = text.replace(ra[0], '<span style={{ color: var(--accent); fontWeight: 700; }}>' + ra[1] + '</span>');
    }

    return newString;
}