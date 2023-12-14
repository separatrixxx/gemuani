import axios, { AxiosResponse } from "axios";
import { Blog } from "interfaces/blog.interface";
import { setLocale } from "./locale.helper";
import { ToastError, ToastSuccess } from "components/Toast/Toast";


export async function getBlog(setBlog: (e: any) => void) {
	const { data: response }: AxiosResponse<Blog[]> = await axios.get('https://telegram.gemuani.com/app/blog/getall');

    setBlog(response);
}

export function showFile(event: any) {
    let file = event.target.files[0];
    // let reader = new FileReader();
    
    // reader.onload = function(event) {
    //     console.log(event.target?.result)
    // };

    // reader.readAsText(file);

    console.log(file);
  }

export async function addBlog(title: string, text: string, setErrorTitle: (e: any) => void, setErrorText: (e: any) => void,
    setLoading: (e: any) => void, router: any) {
    setErrorTitle(false);
    setErrorText(false);

    if (+title !== 0 && +text !== 0) {
        setLoading(true);

        let now = new Date();

        await axios.post('https://telegram.gemuani.com/app/blog/addone', {
            title: title,
            text: text,
            date: now,
            image: '',
        })
            .then(function () {
                setLoading(false);
                ToastSuccess(setLocale(router.locale).blog_locales.post_added_succesfully + '!');
            })
            .catch(function (error) {
                setLoading(false);
                console.log('Post adding error: ' + error);
                ToastError(setLocale(router.locale).blog_locales.post_added_error + ': ' + error);
            });
    } else {
        if (+title === 0) {
            setErrorTitle(true);
        }

        if (+text === 0) {
            setErrorText(true);
        }
    }
}
