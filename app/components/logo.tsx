import type { ComponentPropsWithoutRef } from 'react'
import LogoLight from '../../public/larry/LarryLogoLight.png'
import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
} & ComponentPropsWithoutRef<'svg'>

export const Logo = ({ width, height, ...props }: LogoProps) => {
  width = 96
  height = 96
  return (
    <div className=''>
      <Image src={LogoLight} alt='' height={height} width={width} />
    </div>
  )
}
export default Logo
