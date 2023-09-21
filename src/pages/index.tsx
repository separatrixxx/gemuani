import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';


export default function Home() {
  const router = useRouter();

  return (
    <>
      {setLocale(router.locale).language}
    </>
  );
}
