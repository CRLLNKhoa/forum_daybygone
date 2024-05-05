import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='flex items-center justify-center border-t h-24'>
        <p className='text-sm flex items-center gap-2'><BsCodeSlash className='w-5 h-5' /> Coded by Lương Khoa 🎉</p>
    </div>
  )
}
