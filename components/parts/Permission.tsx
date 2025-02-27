import Link from 'next/link';
import React from 'react'
import { IoLogoGithub } from "react-icons/io";

const Permission = () => {
  return (
    <div className="permission text-white flex items-center gap-4  fixed right-4 bottom-4">
          <h1 className='text-3xl'>18+</h1>
          <Link href="https://github.com/mazegit1"><IoLogoGithub className='text-5xl hover:scale-105 hover:rotate-[360deg] transition-all ease-in-out duration-200'/></Link>
        </div>
  )
}

export default Permission
