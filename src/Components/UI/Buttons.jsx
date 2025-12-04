
import Link from 'next/link'
import React from 'react'

const Buttons = ({
    title,
    link,

}) => {
    return (
        <div>
            <Link
                href={link}
            >
                <button className={`mt-2 cursor-pointer inline-flex items-center rounded-md bg-white text-[#2A6F7E] hover:bg-[#CFA77F] hover:text-white transition duration-100  px-6 py-1 shadow-sm`}>
                    {title}
                </button>
            </Link>
        </div>
    )
}

export default Buttons
