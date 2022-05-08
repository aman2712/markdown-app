import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '../markdown-styles.module.css'

const MainEditor = () => {
    const [markdown, setMarkdown] = useState('# Hello World')


    return (
        <div className='flex flex-1'>
            <div className='flex-1 h-full flex flex-col border-r border-solid border-gray-600'>
                <div style={{ backgroundColor: '#1E1F23' }}>
                    <p className='tracking-widest text-white text-sm p-2'>MARKDOWN</p>
                </div>
                <textarea className='w-full flex-1 resize-none outline-none text-slate-100 p-2' style={{ backgroundColor: '#15161A' }} value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
            </div>
            <div className='flex-1 h-full flex flex-col'>
                <div style={{ backgroundColor: '#1E1F23' }}>
                    <p className='tracking-widest text-white text-sm p-2'>PREVIEW</p>
                </div>
                <div className={styles.reactMarkDown}>
                    <ReactMarkdown className='prose prose-invert'>
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default MainEditor