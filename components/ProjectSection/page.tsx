import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import gitHubBtn from "../../public/images/gitbutton.png";
import { ProjectComp } from "../ProjectComp/page";

import { projectData } from "../../assets/data/projectData";

type Props = {};
export const ProjectSection = (props: Props) => {
	return (
		<section id="ProjectsSection" className=" overflow-hidden ">
			<div className="container mx-auto p-10 md:p-10 lapScreen ">
				<div className=" text-3xl md:text-5xl md:py-5 md:pt-10 w-full font-bold md:font-bold text-black">
					PROJECTS
				</div>
				<div className=" text-sm md:text-lg font-semibold italic py-5 text-[#787878]  ">
					<p>
						&quot;See my Project Works, where I combine technical skills
						and creativity. From coding to making ideas real, you&apos;ll
						witness my expertise and effort. Dive into the content
						below to view my achievements!&quot;
					</p>
				</div>
                <div className="flex items-center justify-between pb-6  md:py-5 ">
                    <div className=" text-xl md:text-4xl font-bold text-[#787878] ">#TOP WORKS</div>
                    <div className=" text-[#787878] font-semibold flex items-center gap-5 w-fit ">
                       <span className="max-md:hidden" >View more in my</span>  <span className="" > <Link href={"https://github.com/Deva0813"} target="_blank" > <Image src={gitHubBtn} alt="btn" width={113.9} height={39.1} className=" scale-90 hover:scale-100  "/> </Link> </span>
                    </div>
                </div>
                <div className="md:py-10 grid place-content-center  w-full ">
                    <div className=" grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 grid- gap-10 w-fit max-md:hidden ">
                    {
                        projectData.reverse().map((item, index) => {
							return(
								<ProjectComp key={index} image={item.image} title={item.title} link={item.link} />
							)
						})
                    }
                    </div>
					<div className=" flex flex-col w-fit md:hidden  " >
                    {
						projectData.map((item, index) => {
							return(
								<ProjectComp key={index} className="scale-75 -mt-8 "  image={item.image} title={item.title} link={item.link} />
							)
						})
					}
                    </div>
                </div>
			</div>
		</section>
	);
};
