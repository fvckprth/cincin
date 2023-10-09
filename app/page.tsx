import Image from 'next/image'
import Logo from '@/components/Logo'
import Video from '@/components/Video'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <Video />
      <div className='flex flex-col justify-around items-center h-full'>
        <Logo />
        <Hero />
        <CTA />
      </div>
    </div>
  )
}