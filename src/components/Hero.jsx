import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Summarizer,an open-source article summarizer that transforms lengthy article into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero