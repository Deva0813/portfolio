"use client";
import Image from "next/image";
import * as React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

type Props = {
	year?: string;
	name?: string;
	location?: string;
	image: string;
	title?: string;
	detail_1?: string;
	detail_2?: string;
	className?: string;
};

export const TimelineCard = (props: Props) => {
	//use framer motion to animate the timeline card when it is in 50vh of viewport increase the opacity and scale of the card
	const ref = React.useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "5 1"],
	});

	//Offset config to values
	const scaleValue = useTransform(
		scrollYProgress,
		[0, 0.45, 0.55, 1],
		[0.7, 1, 1, 0.7],
	);
	const opacityValue = useTransform(
		scrollYProgress,
		[0, 0.45, 0.55, 1],
		[0.3, 1, 1, 0.3],
	);
	const filter = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"],
	);

	return (
		<motion.div
			ref={ref}
			style={{
				opacity: opacityValue,
				scale: scaleValue,
				// filter: filter,
			}}
			className=" flex p-10 items-center justify-center max-lg:hidden "
		>
			<div className=" w-[1000px] flex flex-row gap-20 items-center ">
				<div className="left w-full text-end ">
					<div className="text-lg font-semibold  ">{props.year}</div>
					<div className="text-2xl font-bold py-2 ">{props.name}</div>
					<div className="text-lg font-semibold text-[#787878] ">
						{props.location}
					</div>
				</div>
				<div className="right w-full flex ">
					<div className="w-[450px] bg-white drop-shadow-xl p-7 flex flex-row rounded-xl ">
						<div className=" w-32 flex items-center justify-center ">
							<Image
								src={props.image}
								alt="pic"
								width={100}
								height={100}
								className=""
								priority= {true}
							/>
						</div>
						<div className="w-full pl-7 font-medium">
							<div className=" text-sm w-[270px] ">
								{props.title}
							</div>
							<div className="text-[#787878] text-[12px] py-2 leading-3 ">
								{props.detail_1}
							</div>
							<div className="text-[#606060] text-[12px] py-1 leading-3 ">
								{props.detail_2}
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export const TimelineCardMobile = (props: Props) => {
	return (
		<div className=" flex ml-[20%] flex-col py-5 ">
			<div className="pl-2">
				<div className="text-xs font-semibold ">{props.year}</div>
				<div className="text-sm font-bold ">{props.name}</div>
				<div className="text-xs font-semibold text-[#787878] ">
					{props.location}
				</div>
			</div>
			<div className="w-full flex mt-3 ">
				<div className="w-[280px] bg-white drop-shadow-lg p-3 flex flex-row rounded-lg ">
					<div className=" flex items-start pt-2 justify-center w-56 ">
						<Image
							src={props.image || "/images/placeholder.png"}
							alt="pic"
							width={50}
							height={50}
							className=""
							priority= {true}
						/>
					</div>
					<div className="pl-3">
						<div className=" text-xs font-medium w-[180px] ">
							{props.title}
						</div>
						<div className="text-[#787878] text-[10px] py-1 ">
							{props.detail_1}
						</div>
						<div className="text-[#606060] text-[10px] ">
							{props.detail_2}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
