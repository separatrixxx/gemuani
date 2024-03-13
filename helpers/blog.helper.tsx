import axios, { AxiosResponse } from "axios";
import { Blog } from "interfaces/blog.interface";
import { setLocale } from "./locale.helper";
import { ToastError, ToastSuccess } from "components/Toast/Toast";


export function getBlog(): Blog[] {
    const blog1: Blog = {
        id: '0',
        image: ['/BlogImg2.webp', '/BlogImg2_1.webp', '/BlogImg2_2.webp'],
        title: 'GOOLFOOD 2024',
        text: "Gemuani, the leader in Georgian freeze-dried fruits and vegetables 🍇🍎, are pleased to join GULFOOD 2024 in Dubai 🌍 from 19 to 23 February 2024, a major global food and beverage exhibition 🥘🌐.\nGemuani will present its high-quality freeze-dried Georgian products 🍒🥦 at GULFOOD 2024, presenting Georgia's culinary heritage and innovation in the country pavilion👩‍🍳.\nOur presence at GULFOOD 2024 reflects our commitment to promoting Georgian products around the world 🌏 and our desire to explore new opportunities and share our culinary passion ❤️🍴.\nJoin us at GULFOOD 2024, where tradition meets innovation, and experience the taste of Georgia with Gemuani 🤝🍽.",
        date: '2024-02-19',
    };

    const blog2: Blog = {
        id: '1',
        image: ['/BlogImg3.webp'],
        title: 'Grüne Woche 2024',
        text: "Our company Gemuani is participating in the prestigious Grüne Woche 2024! 🌱🚜 A hub for innovation in food, agriculture and horticulture, this international exhibition is perfectly aligned with our values ​​​​and goals. Join us from 19 to 28 January in Berlin as we showcase our products and network with global industry leaders. 🌍",
        date: '2024-01-19',
        links: {
            fb: ['https://m.facebook.com/story.php?story_fbid=pfbid0JcKvbRmy6FSiJgGDYX6f4QCyY2EwGWeLEiL95a8fCE7e7Qsj7uVZE4o4jyq8HhJWl&id=100070763990011&mibextid=WC7FNe'],
        }
    };

    const blog3: Blog = {
        id: '2',
        image: ['/BlogImg4.webp'],
        title: 'Partnership with Pigo',
        text: "Mr. Goran, CEO of Pigo company, very often visits our factory to show what high-level product can be done, visit was with new possible buyer of Pigo. 🏭🤝 Wish to our partner success. 🌟 We are happy to choose Pigo, Italy company as our partner.",
        date: '2023-12-07',
    };

    const blog4: Blog = {
        id: '3',
        image: ['/BlogImg1.webp', '/BlogImg1_1.webp', '/BlogImg1_2.webp'],
        title: 'OPERA CROWN awards',
        text: 'The winners of the III Tbilisi International Opera Crown Voice Competition, held on November 25, 2023, were announced as follows: \n\n1st Prize - Elmina Hasan (Georgia-Azerbaijan), awarded by Tamar Tsulukidze, Head of the Department for the Promotion of the Creative Process at the Ministry of Culture.\n2nd Prize - Ana Palavandishvili (Georgia), awarded by Abdulaziz Hassan Zakri, founder and CEO of Al-Mutafarrda.\n3rd Prize - Dinmukhamed Koshkinbayev (Kazakhstan), awarded by Archil Jaliashvili, founder of Gemuani.\nTbilisi State Opera and Ballet Theater Prize: Alikhan Zeinolla (Kazakhstan), presented by Badri Maisuradze, the artistic director of the theater.\n\nCongratulations to all the participants for their outstanding performances and dedication to the art of opera. Your talent and hard work are truly inspiring, and we look forward to seeing your future contributions to the world of music. Keep up the great work!',
        date: '2023-11-25',
        links: {
            fb: ['https://www.facebook.com/share/v/M4dikBW37YuyYsV1/?mibextid=Na33Lf', 'https://fb.watch/qMeUxUgUod/?mibextid=KD2nqW',
                'https://www.facebook.com/share/v/YfYjnt9MUwCmDbaB/?mibextid=WC7FNe'],
            yt: ['https://youtu.be/FR1QcNl6dZs'],
            tw: ['https://x.com/sabqorg/status/1726152973787566424?s=20'],
        }
    };

    return [blog1, blog2, blog3, blog4];
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
