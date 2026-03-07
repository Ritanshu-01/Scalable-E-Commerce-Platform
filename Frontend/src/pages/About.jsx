import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {



  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo enim facere odio at praesentium eius, esse illum non quasi maxime aut doloremque quo doloribus explicabo vel omnis reprehenderit maiores incidunt?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque esse libero doloribus quis sunt iusto! Repellendus perferendis provident inventore natus accusamus? Non, asperiores consectetur!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia quos necessitatibus aliquid dolor ad unde fuga ipsum asperiores aperiam.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque dolores magnam error magni, dolor esse at hic obcaecati quam corrupti voluptatem velit, vero provident minus delectus. Aliquid, porro atque?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque dolores magnam error magni, dolor esse at hic obcaecati quam corrupti voluptatem velit, vero provident minus delectus. Aliquid, porro atque?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque dolores magnam error magni, dolor esse at hic obcaecati quam corrupti voluptatem velit, vero provident minus delectus. Aliquid, porro atque?</p>
        </div>
          
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About