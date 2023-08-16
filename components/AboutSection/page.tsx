import * as React from "react";
type Props = {};
export const AboutSection = (props: Props) => {
	return (
		<section id="AboutSection" className=" bg-[#272829]">
			<div className="container mx-auto flex flex-col 2xl:flex-row md:py-20 lapScreen ">
				<div className="leftDiv flex flex-col w-full px-10 pt-10 md:p-10 2xl:max-w-[650px] items-center justify-center ">
					<div className= " text-3xl md:text-5xl md:py-5 w-full font-bold text-[#787878]">
						ABOUT ME
					</div>
					<div className=" py-5 font-normal text-white">
						<p className="text-justify leading-loose text-xs md:text-[16px] font-light ">
							<span className="font-semibold md:text-xl pl-10">
								Welcome
							</span>{" "}
							to my world of creativity and innovation! I&apos;m
							Devanand, a passionate and accomplished computer
							science engineer with a strong background in full
							stack web development, AI, ML, UI/UX designing,
							gaming, ethical hacking, and cyber security. With my
							extensive knowledge and skills in these areas, I
							strive to push the boundaries of technology and
							create immersive digital experiences. When I&apos;m
							not crafting captivating websites or diving into the
							latest advancements in tech, you can find me on the
							football field or embarking on thrilling video game
							adventures. As an Oracle Certified Associate, I
							possess the expertise to tackle complex challenges
							head-on. My programming arsenal includes Python,
							Java, JavaScript, PHP, and more. Join me on this
							exciting journey as we transform ideas into reality,
							one line of code at a time.
						</p>
					</div>
				</div>
				<div className="rightDiv w-full flex flex-col md:flex-row ">
					<div className="w-full px-10 pt-5 md:p-10 ">
						<div className="text-3xl  md:text-5xl md:py-5 w-full font-bold text-[#787878]">
							PROFILE
						</div>
						<div className="py-5 border-b-2 border-[#A7A7A7] text-sm  md:leading-[inherit] md:text-[16px] uppercase ">
							<table className="text-[#A7A7A7] ">
								<tbody>
									<tr>
										<td className=" font-medium">Name</td>
										<td className="px-2">:</td>
										<td className=" font-light">
											Devanand
										</td>
									</tr>
									<tr>
										<td className="font-medium">Age</td>
										<td className="px-2">:</td>
										<td className=" font-light">22</td>
									</tr>
									<tr>
										<td className="font-medium">Gender</td>
										<td className="px-2">:</td>
										<td className="font-light">Male</td>
									</tr>
									<tr>
										<td className="font-medium">Qualif.</td>
										<td className="px-2">:</td>
										<td className="font-light">B.E. CSE</td>
									</tr>
									<tr>
										<td className="font-medium">
											Location
										</td>
										<td className="px-2">:</td>
										<td className="font-light">
											Chennai, T.N.
										</td>
									</tr>
									<tr>
										<td className="font-medium">
											Nationality
										</td>
										<td className="px-2">:</td>
										<td className="font-light">Indian</td>
									</tr>
									<tr>
										<td className="font-medium">Ph.No.</td>
										<td className="px-2">:</td>
										<td className="font-light">
											+91 9176204928
										</td>
									</tr>
									<tr>
										<td className="font-medium">Email</td>
										<td className="px-2">:</td>
										<td className="font-light lowercase ">
											devanand151101@gmail.com
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="w-full py-7 ">
							<div className=" text-xs md:text-sm font-medium flex gap-3 flex-wrap">
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									React.js
								</div>
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									Graphics Designing
								</div>
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									Next.js
								</div>
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									Java
								</div>
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									Python
								</div>
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									AI/ML
								</div>
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									Springboot
								</div>
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									Ethical Hacking
								</div>
								<div className="bg-white w-fit px-3 py-1 rounded-full">
									Cyber Security
								</div>
							</div>
						</div>
					</div>
					<div className="w-full px-10 pt-5 md:p-10 ">
						<div className="text-3xl  md:text-5xl md:py-5 w-full font-bold text-[#787878]">
							SKILLS
						</div>
						<div className="w-full flex flex-col gap-7 pb-10 scale-90 lg:scale-100 ">
							<div className="w-full text-[#A5A5A5] ">
								<div className="flex items-center justify-between p-2 ">
									<div className="">Graphics Designing</div>
									<div className="">95%</div>
								</div>
                                <div className="w-full h-2 bg-white rounded-full">
                                    <div className="w-[95%] h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-l-full"></div>
                                </div>
							</div>
                            <div className="w-full text-[#A5A5A5] ">
								<div className="flex items-center justify-between p-2 ">
									<div className="">Web Developement</div>
									<div className="">90%</div>
								</div>
                                <div className="w-full h-2 bg-white rounded-full">
                                    <div className="w-[90%] h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-l-full"></div>
                                </div>
							</div>
                            <div className="w-full text-[#A5A5A5] ">
								<div className="flex items-center justify-between p-2 ">
									<div className="">Java</div>
									<div className="">75%</div>
								</div>
                                <div className="w-full h-2 bg-white rounded-full">
                                    <div className="w-[75%] h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-l-full"></div>
                                </div>
							</div>
                            <div className="w-full text-[#A5A5A5] ">
								<div className="flex items-center justify-between p-2 ">
									<div className="">Python</div>
									<div className="">80%</div>
								</div>
                                <div className="w-full h-2 bg-white rounded-full">
                                    <div className="w-[80%] h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-l-full"></div>
                                </div>
							</div>
                            <div className="w-full text-[#A5A5A5] ">
								<div className="flex items-center justify-between p-2 ">
									<div className="">Backend (SQL, NOSQL, etc,..)</div>
									<div className="">75%</div>
								</div>
                                <div className="w-full h-2 bg-white rounded-full">
                                    <div className="w-[75%] h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-l-full"></div>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
