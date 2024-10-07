import React from 'react'

type RadioProps = {
    index: string;
    name: string;
    value: string;
}

export const Radio = ({ index, name, value }: RadioProps) => {
    return (
        <div className='w-[45%]'>
            <label className="w-full flex items-center">
                <span className="font-bold text-black mr-3">{index}</span>
                <input type="radio" name={name} value={value} className="peer hidden" />
                <div className="w-full bg-white text-black py-2 px-4 rounded  cursor-pointer peer-checked:bg-black peer-checked:text-white transition duration-200">
                    {value}
                </div>
            </label>
        </div>
    )
}
