import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Sacramento } from 'next/font/google'

const sacramento = Sacramento({
  weight: "400",
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-sacramento',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sacramento.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
