import Image from "next/image";
import Marquee from "react-fast-marquee";

//tech stack images
import tech1 from "../../../public/homeicons/image 1.png";
import tech2 from "../../../public/homeicons/image 2.png";
import tech3 from "../../../public/homeicons/image 3.png";
import tech4 from "../../../public/homeicons/image 4.png";
import tech5 from "../../../public/homeicons/image 5.png";
import tech6 from "../../../public/homeicons/image 6.png";
import tech7 from "../../../public/homeicons/image 7.png";

import heroPic from "../../../public/homePic.png";

type Props = {};
export const HomeSection = (props: Props) => {
	return (
		<section id="HomeSection" className="relative overflow-hidden ">
			<div className="container mx-auto  lg:h-[94vh] flex flex-col md:flex-row ">


				<div className="leftDiv w-full flex items-center  justify-center flex-col">
					<div className=" p-10 lg:p-5 max-w-[39rem] md:scale-[.75] 2xl:scale-90 ">
                        
                        <div className= "relative h-[250px] md:hidden overflow-hidden leading-snug mb-5">
                            <span className="text-[40px] text-black/30 font-bold ">#FULL STACK </span>
                            <span className="text-[60px] text-black/25 font-bold ">#GRAPH </span>
                            <span className="text-[30px] text-black/30 font-bold ">#ETHICAL HACK </span>
                            <span className="text-[50px] text-black/40 font-bold ">#GAMER </span>
                            <Image className="absolute top-0 right-0" src={heroPic} alt="heroPic" height={250} />
                        </div>

						<div className=" text-lg lg:text-[35px] 2xl:text-[40px]  font-bold py-2 ">
							Hi there, I&apos;m
						</div>
						<div className=" text-5xl lg:text-8xl font-bold text-[#393E46] py-2">
							Devanand
						</div>
						<div className=" text-lg lg:text-[35px] 2xl:text-[40px] font-bold text-[#606060] py-2 ">
							I&apos;m a{" "}
							<span className="text-black">
								Full Stack Developer
							</span>
						</div>
						<div className=" text-[12px] lg:text-xl font-semibold py-2">
							Welcome to My Portfolio: Where Creativity Comes to
							Life!
						</div>
						<div className="text-[#646464] text-[12px] md:text-[16px] font-semibold py-2  ">
							Step into the dynamic world of web development as I
							showcase my portfolio of innovative projects. From
							front-end finesse to back-end brilliance, each
							creation tells a story of code and creativity. Ready
							to collaborate or have a question? Hit the
							&quot;Contact Me&quot; button below.
						</div>
						<div className="text-white">
							<button className="bg-blue-700 hover:bg-blue-600 hover:scale-100 scale-95 px-2 py-1 md:px-4 md:py-2 rounded-lg lg:text-xl font-semibold my-2 md:my-5">
								Contact Me
							</button>
						</div>
						<div className=" lg:text-xl font-semibold py-2">
							TECH STACK:
						</div>
						<div className="grid grid-flow-col gap-5 py-3 lg:py-5 w-fit ">
							<Image
								src={tech1}
								alt="tech1"
								className= " md:w-10 md:h-10"
							/>
							<Image
								src={tech2}
								alt="tech2"
								className="md:w-10 md:h-10"
							/>
							<Image
								src={tech3}
								alt="tech3"
								className=" md:w-16 md:h-10"
							/>
							<Image
								src={tech4}
								alt="tech4"
								className="md:w-10 md:h-10"
							/>
							<Image
								src={tech5}
								alt="tech5"
								className="md:w-9 md:h-10"
							/>
							<Image
								src={tech6}
								alt="tech6"
								className="md:w-10 md:h-10"
							/>
							<Image
								src={tech7}
								alt="tech7"
								className="md:w-10 md:h-10"
							/>
						</div>
					</div>
				</div>
				<div className="rightDiv w-full md:flex items-center justify-center hidden ">
					<Image src={heroPic} className="w-[35%]" alt="heroPic" />
				</div>
			</div>

			<div className=" absolute top-[40%] invisible md:visible -rotate-45 left-[35%] 2xl:top-[25%] w-full -z-10  leading-tight h-fit ">
				<Marquee className="text-[150px] h-fit " autoFill={true}>
					<span className="text-black/20 font-bold">
						#FULL STACK DEVELOPER&nbsp;
					</span>
				</Marquee>
				<Marquee
					className="text-[200px] h-fit "
					direction="right"
					speed={60}
					autoFill={true}
				>
					<span className="text-black/25 font-bold ">
						#GRAPHICS DESIGNER&nbsp;
					</span>
				</Marquee>
				<Marquee
					className="text-[100px] h-fit "
					speed={70}
					autoFill={true}
				>
					<span className="text-black/40 font-bold ">
						#ETHICAL HACKER&nbsp;
					</span>
				</Marquee>
				<Marquee
					className="text-[125px] h-fit "
					speed={50}
					autoFill={true}
				>
					<span className="text-black/50 font-bold ">
						#GAMER&nbsp;
					</span>
				</Marquee>
			</div>
		</section>
	);
};
