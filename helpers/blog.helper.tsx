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

export async function addBlog(title: string, text: string, setTitleError: (e: any) => void, setTextError: (e: any) => void,
setLoading: (e: any) => void, router: any) {
    setTitleError(false);
    setTextError(false);

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
            setTitleError(true);
        }

        if (+text === 0) {
            setTextError(true);
        }
    }
}

export async function deleteBlog(id: string, setIdError: (e: any) => void, setLoading: (e: any) => void, router: any) {
    setIdError(false);

    if (+id !== 0) {
        setLoading(true);

        await axios.post('https://telegram.gemuani.com/app/blog/deleteone?id=' + id)
            .then(function () {
                setLoading(false);
                ToastSuccess(setLocale(router.locale).blog_locales.post_deleted_succesfully + '!');
            })
            .catch(function (error) {
                setLoading(false);
                console.log('Post deleting error: ' + error);
                ToastError(setLocale(router.locale).blog_locales.post_deleted_error + ': ' + error);
            });
    } else {
        if (+id === 0) {
            setIdError(true);
        }
    }
}
