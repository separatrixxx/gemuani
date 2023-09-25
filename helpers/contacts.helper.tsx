export function contactHelper(name: string, email: string, message: string,
    setErrorName: (e: any) => void, setErrorEmail: (e: any) => void, setErrorMessage: (e: any) => void) {

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    setErrorName(false);
    setErrorEmail(false);
    setErrorMessage(false);
    
    if (+name !== 0 && EMAIL_REGEXP.test(email) && +message !== 0) {
        alert('gg');
    } else {
        if (+name === 0) {
            setErrorName(true);
        }
        
        if (!EMAIL_REGEXP.test(email)) {
            setErrorEmail(true);
        }

        if (+message === 0) {
            setErrorMessage(true);
        }
    }
}