import { Input } from '@/shared/ui/components/input'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import faq from '../lib/faq'
import React from 'react'

const HelpPage = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center items-center gap-y-5 text-center'>
      <h1 className='font-bold text-6xl'>How can we help you?</h1>
      <div className='relative w-130 items-center mt-5 max-[622px]:w-72'>
        <SearchOutlinedIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-black' />

        <Input
          className='pl-10 !bg-white text-black'
          id="input-demo-api-key"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className='w-130 items-center max-[622px]:w-72'>
        {faq.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="flex items-center gap-3 py-3 border-b border-gray-600"
            >
              <Icon className="text-[oklch(0.852_0.199_91.936)] ml-3" />
              <a href='#' className="font-semibold">{item.text}</a>
            </div> // Adicionar link do href
          );
        })}
      </div>
      <div className='mt-5'>
        <p>Need more help? Contact us:</p>
        <p>aipodcastmaker@email.com</p> {/* Colocar email real */}
      </div>
    </div>
  )
}

export default HelpPage