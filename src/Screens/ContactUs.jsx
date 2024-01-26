import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Head'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
    const contactData = [
        {
            id: 1,
            title: 'Email Us',
            info: `Email us if you need any help.`,
            icon: HiOutlineMail,
            contact: 'tommyle@gmail.com'
        },
        {
            id: 2,
            title: 'Call Us',
            info: `Call us if you seek assistance.`,
            icon: FaPhone,
            contact: '+84 7171164'
        },
        {
            id: 3,
            title: 'Location',
            info: `Visit our place for face-to-face assistance and inquiries, as our team is ready to help you in person.`,
            icon: FaLocationDot,
            contact: 'Banana Hill, Quahog, 122 Peteriffin'
        },
    ]
    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Head title={'Contact Us'} />
                <div className="my-16 md:grid-cols-2 grid lg:grid-cols-3 gap-4 xl:gap-8">
                    {
                        contactData.map((item) => (
                            <div className="border border-border flex flex-col items-center justify-center p-3 pb-6 bg-dry rounded-lg" key={item.id}>
                                <span className='flex flex-col items-center justify-center w-20 h-20 rounded-full bg-main text-subMain text-2xl'>
                                    {<item.icon />}
                                </span>
                                <h4 className='text-text text-lg font-semibold'>{item.title}</h4>
                                <p>
                                    <a href={`mailto:${item.contact}`} className='text-blue-500'>{item.contact}</a>
                                </p>
                                <p className='text-sm'>{item.info}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs
