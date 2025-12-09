import React from 'react'

const Card = () => {
  return (
    <div className='relative w-[35rem] bg-gray-200 border-2 border-black rounded-lg p-6'>
     <div className='flex items-center justify-end'>
     <div className='w-20 h-20 bg-black rounded-full text-center'>
        Photo
      </div>
     </div>
      <div className='gap-2 flex flex-row'>
      <div className='bg-black w-10 p-2' style={{
            clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
          }}>
        1
      </div>
      <div className='bg-black w-10 p-2' style={{
            clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
          }}>
        1
      </div>
      </div>
      <div className='mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt molestiae qui reiciendis magni id labore molestias debitis amet numquam eum accusamus, nulla nostrum pariatur alias omnis autem cum maxime! Quasi laborum et, omnis explicabo esse necessitatibus sunt praesentium eveniet in, adipisci aperiam dicta quod cum ad odit fugiat quaerat.
      </div>
      <div className='absolute bottom-6 right-4 gap-2 flex flex-row'>
      <div className='bg-black opacity-30 w-20 h-20' style={{
            clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
          }}>
        1
      </div>
      <div className='bg-black opacity-30 w-20 h-20' style={{
            clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
          }}>
        1
      </div>
      </div>
    </div>
  )
}

export default Card