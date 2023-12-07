import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"

function Card({data, reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.5} dragTransition={{bounceStiffness: 200, bounceDamping: 20}} className=" relative w-60 flex-shrink-0 text-white h-72 rounded-[25px] px-8 py-10 bg-zinc-900">
            <FaFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className="footer absolute bottom-0 w-full left-0">
                <div className="flex items-center py-3 px-8 justify-between">
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
                        {data.close ? <MdClose /> : <MdFileDownload size=".8em" color='#fff' />}
                    </span>
                </div>
                {data.tag.isOpen && (<div className={`tag w-full py-5 flex items-center justify-center h-15 ${data.tag.tagcolor==="blue" ? "bg-blue-500" : "bg-green-500"} rounded-b-[25px]`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                </div>) }
            </div>
        </motion.div>
    )
}

export default Card