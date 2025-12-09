import React from 'react'
import PreloadingpageCopy from "../preload/page";
import Index from "@/components/preloader/page";

const page = () => {
  return (
    <div className='bg-black'>
        <div className='z-0'>
        {/* <Index /> */}
        </div>
        <div className='z-10'>
      <PreloadingpageCopy />
      </div>
    </div>
  )
}

export default page
