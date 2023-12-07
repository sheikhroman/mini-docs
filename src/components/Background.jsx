import React from 'react'

function Background() {
    return (
        <>
            <div className="w-full h-screen fixed x-[2]">
                <div className="absolute top-[3%] w-full py-10 flex justify-center text-zinc-500 font-semibold text-xl">Documents.</div>
                <h1 className='text-zinc-500 top-1/2 left-1/2 translate-x-[-50%] font-semibold translate-y-[-50%] text-[14vw] leading-none tracking-tighter absolute'>Docs,</h1>
            </div>
        </>
    )
}

export default Background