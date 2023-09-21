import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { Header } from 'components/Header/Header';
import { MainImage } from 'components/MainImage/MainImage';
import { AboutBlock } from 'components/AboutBlock/AboutBlock';


export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      <MainImage />
      <AboutBlock text={setLocale(router.locale).about_text} link='about' />
    </>
  );
}
