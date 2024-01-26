import React, { useState, useEffect, Fragment } from 'react'

import { CategoriesData } from '../Data/CategoriesData'
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon, CheckIcon } from '@heroicons/react/solid'
import { FaAngleDown, FaCheck } from "react-icons/fa";

const YearData = [
    { title: 'Sort by Year' },
    { title: '1970 - 1800' },
    { title: '1980 - 1990' },
    { title: '1990 - 2000' },
    { title: '2000 - 2010' },
    { title: '2010 - 2020' },
    { title: '2020 - 2030' },
]

const TimeData = [
    { title: 'Sort by Hours' },
    { title: '1 - 5 Hours' },
    { title: '5 - 10 Hours' },
    { title: '10 - 15 Hours' },
    { title: '15+ Hours' },
]


const RateData = [
    { title: 'Sort by Rates' },
    { title: '1 Star' },
    { title: '2 Star' },
    { title: '3 Star' },
    { title: '4 Star' },
    { title: '5 Star' },
]

const Filters = () => {
    const [category, setCategory] = useState({ ...CategoriesData, title: 'Category' })
    const [year, setYear] = useState(YearData[0])
    const [time, setTime] = useState(TimeData[0])
    const [rate, setRate] = useState(RateData[0])
    const Filter = [
        {
            value: category,
            onChange: setCategory,
            items: CategoriesData
        },
        {
            value: year,
            onChange: setYear,
            items: YearData
        },
        {
            value: rate,
            onChange: setRate,
            items: RateData
        },
        {
            value: time,
            onChange: setTime,
            items: TimeData
        },
    ]

    return (
        <div className='bg-dry text-dryGray border-gray-800 border grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
            {
                Filter.map((item, index) => (
                    <Listbox key={index} value={item.value} onChange={item.onChange}>
                        <div className="relative">
                            <Listbox.Button className={'relative border border-gray-800 text-sm w-full text-white bg-main py-4 pl-6 pr-10 text-left '}>
                                <span>{item.value.title}</span>
                                <span className='absolute inset-y-0 right-0 flex items-center'>
                                    <FaAngleDown className='w-5 h-5' aria-hidden={'true'} />
                                </span>
                            </Listbox.Button>
                            <Transition
                                // show={true}
                                enter="transition-opacity duration-75"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className={'absolute rounded-lg bg-white z-10 mt-1 max-h-60 w-full overflow-y-auto ring-opacity-5 focus:outline-none sm:text-sm border border-gray-800 shadow-xl'} >
                                    {
                                        item.items.map((item, index) => {
                                            console.log(item)
                                            return (
                                                <Listbox.Option value={item} key={index} className={({ active }) => `relative cursor-default select-none py-2 px-3 ${active ? 'bg-subMain text-dryGray' : 'text-main'}`}>
                                                    {({ selected }) => (
                                                        <>
                                                            <span className={`block truncated ${selected ? 'font-semibold' : 'font-normal'}`}> {item.title}</span>
                                                            {selected ? (
                                                                <span className='absolute inset-y-0 right-0 pr-6 flex items-center pl-3'>
                                                                    <FaCheck size={15} />
                                                                </span>
                                                            ) : <></>}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            )
                                        })
                                    }
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                ))
            }
        </div>
    )
}

export default Filters
