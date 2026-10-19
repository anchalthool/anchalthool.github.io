import type { Metadata } from 'next';
import './fonts.css';
import './globals.css';
const origin='https://anchalthool.github.io';
export const metadata: Metadata = {
 metadataBase:new URL(origin),title:'Anchal Thool — The Art of Making Systems',description:'Software engineer building dependable backend systems, intelligent applications, and cloud infrastructure. Explore the work of Anchal Thool.',
 openGraph:{title:'Anchal Thool — The Art of Making Systems',description:'An exhibition of code, curiosity, and dependable systems.',url:origin,type:'website',images:[{url:'/og-image.jpg',width:1200,height:630,alt:'Anchal Thool — The Art of Making Systems'}]},
 twitter:{card:'summary_large_image',title:'Anchal Thool — The Art of Making Systems',images:['/og-image.jpg']},alternates:{canonical:origin},icons:{icon:'/favicon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
