import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type Props = {
    image: any;
    title: string;
    link : string;
	className?: string;
};
export const ProjectComp = (props: Props) => {
	return (
        <Link href={props.link} target="_blank" className={props.className} >
		<div className=" relative group w-[420px] h-[270px] overflow-hidden rounded-xl cursor-pointer  peer-[]: ">
			<Image
				src={props.image}
				alt="project"
				// width={420}
				// height={270}
                fill={true}
                sizes={"(max-width: 768px) 100vw, 420px"}
				className=" scale-100 group-hover:scale-125 transition-all ease-in-out duration-500 "
			/>
			<div className=" absolute top-0 left-0 bg-gradient-to-b from-transparent from-30%  to-black/70  w-[420px] h-[270px] ">
				<div className="text-lg absolute font-medium bottom-[1rem] left-[1rem] w-full text-white  ">
					<p className="text-ellipsis whitespace-nowrap w-[320px] overflow-hidden " >{props.title}</p>
				</div>
				<button className=" absolute bottom-[1rem] right-[1rem] " >
                <svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 35 35"
					fill="none"
				>
					<circle cx="17.5" cy="17.5" r="17.5" fill="white" />
					<path
						d="M10.71 16.785C10.039 16.785 9.49502 17.329 9.49502 18C9.49502 18.671 10.039 19.215 10.71 19.215L10.71 16.785ZM26.1492 18.8591C26.6237 18.3846 26.6237 17.6154 26.1492 17.1409L18.417 9.40865C17.9425 8.93416 17.1732 8.93416 16.6987 9.40865C16.2242 9.88313 16.2242 10.6524 16.6987 11.1269L23.5718 18L16.6987 24.8731C16.2242 25.3476 16.2242 26.1169 16.6987 26.5914C17.1732 27.0658 17.9425 27.0658 18.417 26.5914L26.1492 18.8591ZM10.71 19.215L25.29 19.215L25.29 16.785L10.71 16.785L10.71 19.215Z"
						fill="black"
					/>
				</svg>
                </button>
			</div>
		</div>
        </Link>
	);
};
