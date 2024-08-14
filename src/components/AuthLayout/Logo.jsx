import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate =useNavigate()
    return (
        <div>
            <div className='flex items-center'>
                <div 
                onClick={()=>{ navigate('/');}}
                className='text-2xl font-bold text-blue-500 cursor-pointer hover:text-black'>
                    <span className='text-green-700'> &lt;
                    </span>
                    TodoOP
                    <span className='text-green-700'>
                        /&gt;
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Logo
