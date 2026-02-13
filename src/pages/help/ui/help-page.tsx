import { Input } from '@/shared/ui/components/input'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
    </div>
  )
}

export default HelpPage