import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useCountdown } from '../hooks/CountdownTimer';
import dynamic from 'next/dynamic';
import HeartIcon from '@mui/icons-material/Favorite';
import { DiscussionEmbed } from "disqus-react"
import Link from 'next/link';
import Maps from '@/components/Maps';
import AudioPlayer from "./components/AudioPlayer";
import { MusicNote, MusicNoteOutlined, MusicNoteSharp, MusicNoteTwoTone } from '@mui/icons-material';
// import PauseCircleOutlineTwoToneIcon from '@mui/icons-material/PauseCircleOutlineTwoTone';

type Post = {
  id: string;
  title: string;
};

interface DisqusCommentsProps {
  post: Post;
}

// const DisqusComments = ({ post }: DisqusCommentsProps) => {
//   const disqusShortname = "nadian-wedding"
//   const disqusConfig = {
//     url: "https://nadian-wedding.disqus.com/embed.js",
//     identifier: post.id, // Single post id
//     title: post.title // Single post title
//   }
// }

  // const HomePage = ()=> {
  //   return (
  //     <div>
  //       <AudioPlayer/>
  //     </div>
  //   );
  // };

    // export default HomePage;

const inter = Inter({ subsets: ['latin'] })


export default function Home({ post }: DisqusCommentsProps)  {
  const [time, setTime] = useState("");
  const [copyIsSuccess, setCopyIsSuccess] = useState('');
  const [guestName, setGuestName] = useState('');
  const bcaRef = useRef(null);
  const bcaNumber = '3850612683';
  const mandiriNumber = '1440023673277';
  const { asPath } = useRouter();
  const getName = asPath.split('/').pop();
  const name = getName?.replace(/([a-z])([A-Z])/g, '$1 $2');


  useEffect(() => {
    setTime("Nov 19, 2023 13:00:00");
    disableScroll();
    setGuestName(String(name));
  }, [])
  const [days, hours, minutes, seconds] = useCountdown(time);

  const disqusShortname = "nadian-wedding"
  const disqusConfig = {
    url: "https://nadian-wedding.disqus.com/embed.js",
    // identifier: post.id, // Single post id
    // title: "Nadiah & Dian Wedding" // Single post title
  }
    

  const disableScroll = () => {
    const scrollTop = window.screenY || document.documentElement.scrollTop;
    const scrollLeft = window.screenX || document.documentElement.scrollLeft;

    const rootElement = document.documentElement;

    window.onscroll = function () {
      window.scrollTo(scrollTop, scrollLeft);
    }

    rootElement.style.scrollBehavior = 'auto';
  }

  const enableScroll = () => {
    const rootElement = document.documentElement;
    if (rootElement) {
      window.onscroll = null;
      rootElement.style.scrollBehavior = 'smooth';
    }
  }

  const copyToClipBoard = async (copyMe: any) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      alert('Copied to clipboard!');
      // setCopyIsSuccess('Tersalin!');
      // setTimeout(() => {
      //   setCopyIsSuccess('');
      // }
      //   , 3000);
    } catch (err) {
      alert('Failed to copy!');
      // setCopyIsSuccess('Gagal disalin!');
      // setTimeout(() => {
      //   setCopyIsSuccess('');
      // }
      //   , 3000);
    }
  };

  return (
    <div>

  
    <main
      className={`flex flex-col p-2 ${inter.className} bg-white`}
    >
      
      <div>
        {/* head section */}
        <div id='Home' className="w-full bg-bg-header bg-center bg-no-repeat bg-cover min-h-screen">
          <div className="backdrop-blur-sm w-100 h-screen">
            <div className="flex flex-row justify-between font-semibold backdrop-blur-lg">
              <h1 className="font-medium font-sacramento text-4xl p-2">Wedding </h1>
              {/* <div className="space-x-4 max-w-6xl">
                <button className='hover:bg-pink-light hover:p-1 hover:text-pink-primary'> HOME</button>
                <button className='hover:bg-pink-light hover:text-pink-primary'>STORY</button>
                <button className='hover:bg-pink-light hover:text-pink-primary'>GALLERY</button>
                <button className='hover:bg-pink-light hover:text-pink-primary'>CONTACT</button>
              </div> */}
            </div>

            <div className='text-center mt-20'>
              <p className='text-2xl mb-8 font-medium'>We Are Getting Maried</p>
              <h3 className='text-8xl text-pink-primary font-medium font-sacramento'> Nadiah & Dian </h3>
              <div className='simply-countdown'>
                <p className='animate-pulseNoTrans simply-section'>{days ? days : 0} <br /> Hari</p>
                <p className='animate-pulseNoTrans simply-section'>{hours ? hours : 0} <br /> Jam</p>
                <p className='animate-pulseNoTrans simply-section'>{minutes ? minutes : 0} <br /> Menit</p>
                <p className='animate-pulseNoTrans simply-section'>{seconds ? seconds : 0} <br /> Detik</p>
              </div>
              <div className='m-12 text-xl'>
                <p>Kepada <span>Bapak/Ibu/Saudara/i, </span></p>
                <label className='font-bold'>{guestName === '#profile' ? 'Tamu Undangan' : guestName}</label>
              </div>
              <Link href='#profile' scroll={false}>
                <button className='items-center bg-white text-pink-primary rounded-full w-48 py-1 m-auto text-center text-xl' onClick={enableScroll}>Buka Undangan</button>
              </Link>
            </div>
          </div>
        </div>
        {/* profile section */}
        <div id='profile' className='w-full my-36'>
          <div className='text-center py-6'>
            <h1 className='text-pink-primary mb-4 font-sacramento text-6xl font-medium'>Assalamualaikum Wr. Wb.</h1>
            <p className='text-grey text-xl'>Dengan memohon Rahmat dan Ridho Allah SWT,.</p>
            <label className='text-grey text-xl'>Kami bermaksud menyelenggarakan
              Acara pernikahan putra-putri kami </label>
          </div>
          <div className='profile-section space-x-2'>
            <div className="flex flex-row space-x-2 pb-6">
              <section>
                <h2 className='text-pink-primary font-sacramento text-5xl'>Nadiah Nahdah Anisah</h2>
                <p className='text-grey text-xl'>Putri Pertama dari Bpk. Hanafi & Ibu Etik Susilowati</p>
              </section>
              <div style={{ overflow: 'hidden', width: '120px', height: '120px' }} className="rounded-full">
                <Image alt='pic1'
                  src="/bride5.jpg"
                  // objectFit='cover'
                  width="120"
                  height="120" />
              </div>
            </div>
            {/* heart icon */}
            <div className="animate-pulseNoTrans bg-pink-light p-3 heart"><HeartIcon sx={{ color: '#f266ab' }} />
            </div>
            {/* bride */}
            <div className="flex flex-row space-x-2">
              <div style={{ overflow: 'hidden', width: '120px', height: '120px' }} className="rounded-full">
                <Image
                  alt='pic2'
                  src="/groom3.JPG"
                  // objectFit='cover'
                  width="120"
                  height="120"
                />
              </div>
              <section>
                <h2 className='text-pink-primary font-sacramento text-5xl'>Alfa Riskika Dian Asmara</h2>
                <p className='text-grey text-xl'>Putra Pertama dari Bpk. Suwardi & Ibu Emik Setyowati</p>
              </section>
            </div>
          </div>
        </div>

        {/* event details */}
        <div className="eventDetailsWrapper bg-header2 text-center bg-cover bg-center text-pink-light my-40">
          <div className='backdrop-brightness-50 w-full h-full'>
            <h4 className='font-bold pt-12'>Our Special Events</h4>
            <h1 className='font-sacramento text-5xl py-8'>Acara Pernikahan</h1>
            <div className="eventDetails mt-20 sm:space-x-48">
              {/* table1 */}
              
              <table className='border'>
                <tbody>
                  <tr>
                    <th className='border font-bold'>AKAD</th>
                  </tr>
                  <tr>
                    <td className='py-4'>19 November 2023, 09.00 AM - Done</td>
                  </tr>
                  <tr>
                    <td className='p-6 pb-6'>
                      Omah Sinten <br />
                      Jl. Apel Raya no. 100 RT 4 RW 1, Ds. Semanding, <br />
                      Kel. Sumbersekar, Kec. Dau</td>
                  </tr>
                </tbody>
              </table>
              
              {/* table2 */}
              <table className='border mb-4'>
                <tbody>
                  <tr>
                    <th className='border font-bold'>RESEPSI</th>
                  </tr>

                  <tr>
                    <td className='py-4'>19 November 2023, 13.00 AM - 16.00</td>
                  </tr>
                  <tr>
                    <td className='p-6 pb-6'>Omah Sinten <br />
                      Jl. Apel Raya no. 100 RT 4 RW 1, Ds. Semanding,<br />
                      Kel. Sumbersekar, Kec. Dau</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link href='https://maps.app.goo.gl/wiN9jRJtCtQqJsgw5' scroll={false} target='_blank'>
              <button className='bg-pink-light hover:bg-pink-primary text-pink-primary hover:text-white rounded-full w-48 py-1 m-auto text-center text-xl mt-14'>Buka Peta</button>
            </Link>

          </div>
        </div>

        {/* location */}
        {/* <div className='my-32 text-grey text-center'>
          <h1 className='text-6xl font-sacramento text-pink-primary mb-6'>Lokasi Acara</h1>
          <Link href='https://maps.app.goo.gl/wiN9jRJtCtQqJsgw5' scroll={false} target='_blank'>
            <button className='bg-pink-light hover:bg-pink-primary hover:text-white rounded-full w-48 py-1 m-auto text-center text-xl'>Buka Peta</button>
          </Link> */}
        {/* <Maps /> */}
        {/* <iframe src="https://storage.googleapis.com/maps-solutions-7bixh8psy2/locator-plus/ew1m/locator-plus.html"
            width="97%" height="50%"
            style={{ border: 0 }}
            loading="lazy">
          </iframe> */}
        {/* </div> */}

        {/* gallery */}
        <div className='my-8 text-grey text-center'>
          <h1 className='text-6xl font-sacramento text-pink-primary my-12'>Our Memories</h1>
          <div className='grid grid-cols-3 justify-center gap-2'>
            <Image alt='pic3' src="/memories1.jpg" className="" width="720" height="720" />
            <Image alt='pic4' src="/memories2.jpg" className="" width="720" height="720" />
            <Image alt='pic5' src="/memories3.jpg" className="" width="720" height="720" />
            <Image alt='pic6' src="/memories1.jpg" className="" width="720" height="720" />
            <Image alt='pic7' src="/memories2.jpg" className="" width="720" height="720" />
            <Image alt='pic8' src="/memories3.jpg" className="" width="720" height="720" />
          </div>
        </div>

        {/* amplop online */}
        <div className='my-8 text-grey text-center'>
          <h1 className='text-6xl font-sacramento text-pink-primary my-12'>Amplop Online</h1>
          <p className='text-xl'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
          <section className='mt-6 text-xl'>
            <Image alt='pic9' src="/bca.png" className="m-auto py-6" width="100" height="50" />
            <p ref={bcaRef}>{bcaNumber}</p>
            <p>a.n. Nadiah Nahdah Anisah</p>
            <div>
              <button className='bg-pink-light hover:bg-pink-primary text-pink-primary hover:text-white rounded-full w-48 py-1 m-auto text-center text-xl mt-2'
                onClick={() => copyToClipBoard(bcaNumber)}
              >Salin No. Rek</button><br />
              {copyIsSuccess}
            </div>
          </section>
          <p className="py-10 text-xl">atau</p>
          <section className='mb-32 text-xl'>
            <Image alt='pic10' src="/mandiri.jpg" className="m-auto" width="100" height="50" />
            <p>{mandiriNumber}</p>
            <p>a.n. Alfa Riskika Dian Asmara</p>
            <button className='bg-pink-light hover:bg-pink-primary text-pink-primary hover:text-white rounded-full w-48 py-1 m-auto text-center text-xl mt-2'
              onClick={() => copyToClipBoard(mandiriNumber)}
            >Salin No. Rek</button><br />
            {copyIsSuccess}
          </section>
        </div>

        {/* disqus */}
        <div className='text-center'>
          <h1 className='text-6xl font-sacramento text-pink-primary my-12'>Tinggalkan Pesan atau Ucapan</h1>
          <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
   <div>         
      <AudioPlayer audioSrc="./LAGU.mp3" />
   </div>
   

      </div>
    </main>
    </div>
  )
}
