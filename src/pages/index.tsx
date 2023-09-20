import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useCountdown } from '../hooks/CountdownTimer';
import dynamic from 'next/dynamic';
import HeartIcon from '@mui/icons-material/Favorite';

const inter = Inter({ subsets: ['latin'] })

// const Countdown = dynamic(() => import('../hooks/CountdownTimer'), {ssr: false})

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime("Nov 19, 2023 13:00:00");
  }, [])
  const [days, hours, minutes, seconds] = useCountdown(time);

  return (
    <main
      className={`flex flex-col p-2 ${inter.className} bg-white`}
    >
      <div>
        {/* head section */}
        <div className="bg-header2 bg-center bg-no-repeat bg-cover h-[35rem]">
          <div className="flex flex-row justify-between font-semibold">
            <h1 className="font-bold"> Our Wedding </h1>
            <div className="space-x-4 hover:shadow-lg max-w-6xl">
              <button className='hover:bg-pink-light hover:text-pink-primary'> HOME</button>
              <button className='hover:bg-pink-light hover:text-pink-primary'>STORY</button>
              <button className='hover:bg-pink-light hover:text-pink-primary'>GALLERY</button>
              <button className='hover:bg-pink-light hover:text-pink-primary'>CONTACT</button>
            </div>
          </div>

          <div className='text-center mt-16'>
            <h3 className='text-4xl text-pink-primary font-bold'> DIAN & NADIAH </h3>
            <p>We Are Getting Maried</p>
            <div className='text-center flex flex-column justify-center my-4'>
              <p className='animate-pulseNoTrans m-2 p-6 w-[100px] h-[100px] text-lg bg-pink-primary rounded-full'>{days ? days : 0} <br /> Days</p>
              <p className='animate-pulseNoTrans m-2 p-6 w-[100px] h-[100px] text-lg bg-pink-primary rounded-full'>{hours ? hours : 0} <br /> Hours</p>
              <p className='animate-pulseNoTrans m-2 p-6 w-[100px] h-[100px] text-lg bg-pink-primary rounded-full'>{minutes ? minutes : 0} <br /> Minutes</p>
              <p className='animate-pulseNoTrans m-2 p-6 w-[100px] h-[100px] text-lg bg-pink-primary rounded-full'>{seconds ? seconds : 0} <br /> Seconds</p>
            </div>
            <div className='items-center bg-white text-pink-primary rounded-full w-40 py-1 m-auto text-center'>SAVE THE DATE</div>
          </div>
        </div>
        {/* profile section */}
        <div className='my-8'>
          <div className='text-center'>
            <h1 className='text-pink-primary mb-4'>Hello!</h1>
            <p className='text-black'>November 19th 2023, Sumbersekar, Dau </p>
            <label className='text-grey'>We invited you to celebrate our wedding</label>
          </div>
          <div className='flex flex-row space-x-2 justify-center mt-8'>
            <div className="flex flex-row space-x-2">
              <section>
                <h2 className='text-pink-primary'>Alfa Riskika Dian Asmara</h2>
                <p className='text-grey'>The Son of Mr. Suwardi & Mrs. Emik Setyowati</p>
              </section>
              <div style={{ overflow: 'hidden', width: '120px', height: '120px' }} className="rounded-full">
                <Image alt='pic1'
                  src="/groom3.jpg"
                  // objectFit='cover'
                  width="120"
                  height="120" />
              </div>
            </div>
            {/* heart icon */}
            <div className="animate-pulseNoTrans bg-pink-light p-3 rounded-full relative top-10 left-0 right-0 z-99 h-[42.5px] text-center"><HeartIcon sx={{ color: '#f266ab' }} />
            </div>
            {/* bride */}
            <div className="flex flex-row space-x-2">
              <div style={{ overflow: 'hidden', width: '120px', height: '120px' }} className="rounded-full">
                <Image
                  alt='pic2'
                  src="/bride5.jpg"
                  // objectFit='cover'
                  width="120"
                  height="120"
                />
              </div>
              <section>
                <h2 className='text-pink-primary'>Nadiah Nahdah Anisah</h2>
                <p className='text-grey'>The Daughter of Mr. Hanafi & Mrs. Etik Susilowati</p>
              </section>
            </div>
          </div>
        </div>

        {/* event details */}
        <div className="bg-header2 text-center p-6 h-[45rem] bg-cover bg-center">
          <div>
            <h4 className='font-bold mt-6'>Our Special Events</h4>
            <h1 className='text-3xl font-bold my-8'>Wedding Events</h1>
            <div className="flex flex-row mt-10 justify-center items-center space-x-48">
              {/* table1 */}
              <table className='border font-bold '>
                <tbody>
                  <tr>
                    <th className='border'>AKAD</th>
                  </tr>
                  <tr>
                    <td className='py-4'>19 November 2023, 08.00 AM - Done</td>
                  </tr>
                  <tr>
                    <td className='p-4 pb-6'>
                      Omah Sinten <br />
                      Jl. Apel Raya no. 100 RT 4 RW 1, Ds Semanding, Kel. Sumbersekar, Kec. Dau</td>
                  </tr>
                </tbody>
              </table>
              {/* table2 */}
              <table className='border font-bold'>
                <tbody>
                  <tr>
                    <th className='border'>WEDDING RECEPTION</th>
                  </tr>

                  <tr>
                    <td className='py-4'>19 November 2023, 13.00 AM - 16.00</td>
                  </tr>
                  <tr>
                    <td className='p-4 pb-6'>Omah Sinten <br />
                      Jl. Apel Raya no. 100 RT 4 RW 1, Ds Semanding, Kel. Sumbersekar, Kec. Dau</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* our story */}
        <div className='mt-8 text-grey text-center'>
          <h1 className='text-3xl font-bold text-pink-primary'>Our Story</h1>
          <p>First Meet</p>
          <p>First Date</p>
          <p>In A Relationship</p>
        </div>

        {/* gallery */}
        <div className='mt-8 text-grey text-center'>
          <h1 className='text-3xl font-bold text-pink-primary'>Our Memories</h1>
          <div className='justify-center space-x-2'>
            <Image alt='pic3' src="/memories1.jpg" className="" width="750" height="750" /> <br />
            <Image alt='pic4' src="/bride.jpg" className="" width="50" height="50" />
            <Image alt='pic5' src="/dian.jpg" className="" width="50" height="50" />
            <Image alt='pic6' src="/bride.jpg" className="" width="50" height="50" />
          </div>
        </div>


      </div>
    </main>
  )
}
