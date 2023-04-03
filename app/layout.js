import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Fruit shop',
  description: 'Hyperinflated fruit store - best prices 2023',
}

import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>


      <body className={'min-h-screen flex flex-col relative' + inter.className}>
        <Header />
        <div className='flex-1'>
          {children}

        </div>

        <Footer />

        <div id='portal' className=''>

        </div>
      </body>

    </html>
  )
}
