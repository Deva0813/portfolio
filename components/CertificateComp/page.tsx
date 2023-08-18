import Image from 'next/image';
import * as React from 'react';

import Link from 'next/link';

type Props = {
    image: any;
    title: string;
    tech?: string;
    link?: string;
    hidden?: boolean;
    className?: string;
    onClick?: () => void;
};
export const CertificateCard = (props: Props) => {
    return (
        <div className={props.className} >
        <div className=' w-min ' >
            <div className=" relative w-[300px] h-[200px]" onClick={props.onClick} >
                <Image src={props.image} alt="Cert_Image" className='rounded-xl cursor-pointer hover:border-4 border-white ' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <p className='text-sm text-white font-medium text-center pt-2 ' >{props.title}</p>
        </div>
        </div>
    );
};

export const CertificateCardBig = (props: Props) => {
    return (
        <div className="" hidden={props.hidden} >
        <div className=' absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  w-min py-10 px-7 bg-[#e0e0e0] rounded-2xl  shadow-2xl shadow-black ' >
            <div className="title pb-7 pl-2 ">
                <p className='text-2xl font-semibold' >{props.title}</p>
                <p className='text-sm font-medium pt-7 pb-5 text-[#787878] leading-8 ' > <span className='text-lg text-[#616161] ' >Tech Learned:</span> <br /> {props.tech}</p>
                <div className=" flex  items-center ">
                <Link href={props.link || "/error" } className='text-sm font-medium text-white py-2 px-4 rounded-full bg-[#606060] 'target='_blank' >View Credentials</Link> 
                <button className='text-lg text-[#606060] font-medium pl-5  ' onClick={props.onClick} >Close</button>
                </div>
            </div>
            
            <div className=" relative w-[450px] h-[300px] bg-white border-2 border-black/50 rounded-xl " >
                <Image src={props.image} alt="Cert_Image" className='rounded-xl' fill={true} style={{objectFit:"contain"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <p className='text-xs pt-2 text-end pr-2' >Don&apos;t Misuse the above details</p>
        </div>
        </div>
    );
};

export const CertificateCardMobile = (props: Props) => {
    return (
        <div className={props.className} >
        <div className=' w-min' >
            <div className=" relative w-[150px] h-[100px] " onClick={props.onClick} >
                <Image src={props.image} alt="Cert_Image" className='rounded-md cursor-pointer ' fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <p className='text-xs text-white font-normal text-center pt-2 ' >{props.title}</p>
        </div>
        </div>
    );
};