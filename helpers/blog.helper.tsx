import axios, { AxiosResponse } from "axios";
import { Blog } from "interfaces/blog.interface";
import { setLocale } from "./locale.helper";
import { ToastError, ToastSuccess } from "components/Toast/Toast";

export async function getBlog(setBlog: (e: any) => void) {
	const blog1: Blog = {
        id: '0',
        image: '/BlogImg.webp',
        title: 'OPERA CROWN awards',
        text: 'At the 3rd Tbilisi International Voice Competition OPERA CROWN, our company Gemuani, represented by Archil Jaliashvili, proudly awarded the third prize to Dinmukhamed Koshkinbayev from Kazakhstan. 🏆 We extend our heartfelt congratulations to him 🌟 and wish all participants continued success and inspiration in their musical journeys. 🎶🌍💫',
        date: '2023-12-19',
    };

    setBlog([blog1]);
}

// export async function getBlog(setBlog: (e: any) => void) {
// 	const { data: response }: AxiosResponse<Blog[]> = await axios.get('https://telegram.gemuani.com/app/blog/getall');

//     setBlog(response);
// }

export async function addBlog(title: string, text: string, selectedFile: any, setTitleError: (e: any) => void, setTextError: (e: any) => void,
setLoading: (e: any) => void, router: any,) {
    setTitleError(false);
    setTextError(false);

    if (+title !== 0 && +text !== 0 && selectedFile) {
        setLoading(true);

        let now = new Date();

        const formData = new FormData();
        formData.append("file", selectedFile);

        console.log(selectedFile);
        console.log(formData)

        // await axios.post('https://telegram.gemuani.com/app/blog/addone', {
        //     title: title,
        //     text: text,
        //     date: now,
        //     image: '',
        // })
        // .then(function () {
        //     setLoading(false);
        //     ToastSuccess(setLocale(router.locale).blog_locales.post_added_succesfully + '!');
        // })
        // .catch(function (error) {
        //     setLoading(false);
        //     console.log('Post adding error: ' + error);
        //     ToastError(setLocale(router.locale).blog_locales.post_added_error + ': ' + error);
        // });
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
