import React from 'react'

const Likes = async() => {
    await new Promise((res) => setTimeout(res, 3000));
    return (
        <div className=' text-center'>
            <h1 className='mt-7 text-red-600'>Likes:200k</h1>
        </div>
    )
}

export default Likes
