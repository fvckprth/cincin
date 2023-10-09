import Image from 'next/image'
import Logo from '@/components/Logo'
import Video from '@/components/Video'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div>
      <Video />
      <div>
        <Logo />
        <Hero />
        <CTA />
      </div>
    </div>
  )
}