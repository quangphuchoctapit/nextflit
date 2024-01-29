import React from 'react'
import Select from 'react-select';

export const Message = ({ placeholder, label }) => {
    return (
        <div className='text-lg w-full'>
            <label htmlFor="" className='text-gray-400 font-semibold'>{label}</label>
            <textarea placeholder={placeholder} className='w-full h-40 p-6 border text-border border-border rounded'></textarea>
        </div>
    )
}

export const SelectInput = ({ label, options, onChange }) => {
    return (
        <>
            <div className="my-5">
                <label className='text-gray-400 text-lg font-semibold'>{label}</label>
                <select
                    onChange={onChange}
                    className='sm:w-[300px] w-full flex flex-col mt-2 px-6 py-4 text-main bg-white border border-border rounded appearance-none'
                >
                    {options.map((option, index) => (
                        <option
                            key={index}
                            value={option.value}
                            className='text-main w-[100px]'  // You can adjust the color here
                        >
                            {option.title}
                        </option>
                    ))}
                </select>
            </div>

        </>
    )
}
