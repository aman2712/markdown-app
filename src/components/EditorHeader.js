import React from 'react'
import { HiOutlineDocument } from 'react-icons/hi'

const EditorHeader = () => {
    return (
        <div className='text-slate-50 flex justify-between py-3 px-6 items-center' style={{ backgroundColor: '#2C2D31' }}>
            <div className='flex items-center'>
                <p className='tracking-widest text-xl font-bold'>MARKDOWN</p>
                <div className='ml-5 pl-4 border-l border-solid border-gray-600 flex items-center'>
                    <HiOutlineDocument size={21} />
                    <div className='ml-3'>
                        <p className='text-xs text-gray-500'>Document Name</p>
                        <p className='text-sm'>welcome.md</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-10 h-10 rounded-full bg-orange-300 flex items-center justify-center z-20'>A</div>
                <div className='w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center z-10' style={{ marginLeft: -15 }}>B</div>
                <div className='w-10 h-10 rounded-full bg-green-300 flex items-center justify-center' style={{ marginLeft: -15 }}>C</div>
            </div>
        </div>
    )
}

export default EditorHeader