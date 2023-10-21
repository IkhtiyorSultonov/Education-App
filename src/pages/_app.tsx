import '@/styles/globals.css'
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }:AppProps):JSX.Element {

 
  return<>
   <NextNProgress height={5} options={{ showSpinner: false }}/>
   <Component {...pageProps} />
  </>
}
