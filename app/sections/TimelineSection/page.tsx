import * as React from "react";
import timelineData from "../../../assets/data/timelineList.json";
import {
	TimelineCard,
	TimelineCardMobile,
} from "../../components/TimeLineComp/page";

type Props = {};

interface TimelineData {
	id: string;
	year: string;
	name: string;
	location: string;
	image: string;
	title: string;
	detail_1: string;
	detail_2: string;
}

const timelineDataString: string = JSON.stringify(timelineData);

const timelineDataParsed = JSON.parse(timelineDataString) as TimelineData[];

export const TimelineSection = (props: Props) => {
	return (
		<section id="TimelineSection" className="relative bg-[#EEEEEE] -z-50 ">
			<div className="mx-auto p-10 lg:p-20 z-10 bg-gradient-to-b from-[#EEE] from-70% to-transparent pb-[15vh] flex lg:text-center lg:justify-center ">
				<div className="">
					<div className="text-3xl lg:text-5xl font-bold ">
						TIMELINE
					</div>
					<div className="text-sm lg:text-lg py-5 lg:py-10 lg:pb-28 text-[#787878] max-w-2xl font-semibold italic ">
						&quot;Discover my learning and journey through
						experience. From curiosity to expertise, each step
						shapes my path. Let&apos;s explore together how passion
						and dedication drive my evolution.&quot;
					</div>
				</div>
			</div>
			<div>
				{/* Mobile */}
				<div className="relative -z-40 lg:hidden mt-[-15vh] ">
					<div className="absolute h-full w-2 bg-white left-10 top-0 timeLineShadow ">
						<div className=" mt-[-50vh] sticky h-[50vh] w-2 bg-gradient-to-b from-[#D9D9D900] from-0% via-[#FF00C7] via-50% to-[#AD00FF] to-100% top-0 "></div>
						<div className="sticky scale-75 h-8 w-8 bg-white drop-shadow-lg rounded-full top-[49vh] ml-[-11px] mt-[15vh] flex items-center justify-center ">
							<div className="h-6 w-6 bg-gradient-to-b  from-[#FF00C7] from-20% to-[#AD00FF] to-100% rounded-full "></div>
						</div>
					</div>
					<div className="py-28">
						{timelineDataParsed.map((data) => {
							return (
								<TimelineCardMobile
									key={data.id}
									year={data.year}
									name={data.name}
									location={data.location}
									image={data.image}
									title={data.title}
									detail_1={data.detail_1}
									detail_2={data.detail_2}
								/>
							);
						})}
					</div>
					
				</div>

				{/* Desktop */}
				<div className="relative -z-40 max-lg:hidden mt-[-15vh] ">
					<div className="absolute h-full w-2 bg-white left-[49.75%] top-0 timeLineShadow">
						<div className=" mt-[-50vh] sticky h-[50vh] w-2 bg-gradient-to-b from-[#D9D9D900] from-0% via-[#FF00C7] via-50% to-[#AD00FF] to-100% top-0 "></div>
						<div className="sticky scale-75 h-8 w-8 bg-white drop-shadow-lg rounded-full top-[49vh] ml-[-11px] mt-[19vh] flex items-center justify-center ">
							<div className="h-6 w-6 bg-gradient-to-b  from-[#FF00C7] from-20% to-[#AD00FF] to-100% rounded-full "></div>
						</div>
					</div>

					<div className="py-20">
						{timelineDataParsed.map((data) => {
							return (
								<TimelineCard
									key={data.id}
									year={data.year}
									name={data.name}
									location={data.location}
									image={data.image}
									title={data.title}
									detail_1={data.detail_1}
									detail_2={data.detail_2}
								/>
							);
						})}
					</div>
				</div>
				<div className=" h-[15vh] mt-[-15vh] bg-gradient-to-b from-transparent from-20% to-[#EEE] to-70% "></div>
			</div>
		</section>
	);
};
