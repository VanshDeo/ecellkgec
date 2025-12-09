import React from 'react'

const TeamFaculty = () => {
  return (
    <div className='flex flex-col my-8'>
        <h2 className='text-5xl font-bold text-center text-[#F7931E] mb-6'>Team Faculty</h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-6 p-10 lg:grid-cols-4 lg:grid-rows-1'>
          <div className='p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 text-center'>
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#F7931E]">
              <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742498415/65f9a6796939c371f4d7b849635c3d68_alfpgf.jpg" alt="Faculty 1" className="w-full h-full object-cover" />
            </div>
            <h3 className='text-xl font-semibold text-gray-800'>Faculty 1</h3>
            <p className='text-gray-600 mt-2'>Professor</p>
          </div>
          
          <div className='p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 text-center'>
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#F7931E]">
              <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742498192/Santanu_Das_sir_qfxfr6.jpg" alt="Faculty 2" className="w-full h-full object-cover" />
            </div>
            <h3 className='text-xl font-semibold text-gray-800'>Faculty 2</h3>
            <p className='text-gray-600 mt-2'>Associate Professor</p>
          </div>
          
          <div className='p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 text-center'>
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#F7931E]">
              <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742498192/Biswanath_Chakraborty_sir_hm8vhb.jpg" alt="Faculty 3" className="w-full h-full object-cover" />
            </div>
            <h3 className='text-xl font-semibold text-gray-800'>Faculty 3</h3>
            <p className='text-gray-600 mt-2'>Assistant Professor</p>
          </div>
          
          <div className='p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 text-center'>
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#F7931E]">
              <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742498192/MD._Iqbal_Quraishi_sir_zaefer.jpg" alt="Faculty 4" className="w-full h-full object-cover" />
            </div>
            <h3 className='text-xl font-semibold text-gray-800'>Faculty 4</h3>
            <p className='text-gray-600 mt-2'>Lecturer</p>
          </div>
        </div>
    </div>
  )
}

export default TeamFaculty
