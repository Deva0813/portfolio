"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};
export const NavbarSection = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="sticky top-0 bg-white/80 backdrop-blur-sm  ">
			{/* Desktop & Tablet Navbar */}
			<div className=" max-sm:hidden container px-5 mx-auto min-h-[65px] flex flex-row justify-between items-center ">
				<div className="title">
					<h1 className="text-2xl font-bold text-slate-900">deva.</h1>
				</div>
				<div className="list flex flex-row gap-5 items-center text-[#787878] font-semibold">
					<Link
						href={"#HomeSection"}
						className=" hover:text-black/70 hover:scale-105"
					>
						Home
					</Link>
					<Link
						href={"#AboutSection"}
						className=" hover:text-black/70 hover:scale-105"
					>
						About
					</Link>
					<Link
						href={"#TimelineSection"}
						className=" hover:text-black/70 hover:scale-105"
					>
						Timeline
					</Link>
					<Link
						href={"#CertificationSection"}
						className=" hover:text-black/70 hover:scale-105"
					>
						Certification
					</Link>
					<Link
						href={"#ProjectsSection"}
						className=" hover:text-black/70 hover:scale-105"
					>
						Projects
					</Link>
					<Link
						href={"#ContactSection"}
						className=" hover:text-black/70 hover:scale-105"
					>
						Contact
					</Link>
					<button className="px-2 py-1 text-white bg-blue-700 ml-5 rounded-md scale-95 hover:scale-100 hover:bg-blue-600 hover:drop-shadow-md ">
						Download CV
					</button>
				</div>
			</div>

			{/* Mobile Navbar */}
			<motion.div
				initial={{
					height: "8svh",
					backgroundColor: "rgb(255 255 255 / 0.8)",
				}}
				animate={
					isOpen
						? {
								height: "100vh",
								backgroundColor: [
									"rgb(255 255 255 / 0.8)",
									"#272829",
								],
						  }
						: {
								height: "8svh",
								backgroundColor: [
									"#272829",
									"rgb(255 255 255 / 0.8)",
								],
						  }
				}
				className=" sticky max-sm:block hidden bg-white/80 backdrop-blur-sm  overflow-y-hidden"
			>
				<div className="flex flex-row justify-between items-center p-5 h-[8svh] ">
					<div className="title">
						<motion.h1
							initial={{ color: "#0F172A" }}
							animate={
								isOpen
									? { color: "#fff" }
									: { color: "#0F172A" }
							}
							transition={{ duration: 0.3 }}
							className="text-2xl font-bold text-slate-900"
						>
							deva.
						</motion.h1>
					</div>
					<div className="flex flex-row  gap-4">
						<button className="px-2 py-1 text-white bg-blue-700 rounded-md scale-90 hover:bg-blue-600 hover:drop-shadow-md ">
							Download CV
						</button>
						<button className="w-8 text-center" onClick={toggle}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="-2 0 24 24"
								id="bars"
							>
								<path
									fill={isOpen ? "#fff" : "#0F172A"}
									style={{ transition: "fill 0.3s ease" }}
									d="M3,8H16a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H16a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H16a1,1,0,0,0,0-2Z"
								></path>
							</svg>
						</button>
					</div>
				</div>
				<motion.div
                    initial={{ opacity: 0 }}
					animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
					className="list flex flex-col gap-5 p-10 text-2xl items-start justify-start text-[#787878] font-semibold h-[92svh] "
				>
					<Link
						href={"#HomeSection"}
						className=" hover:text-white hover:scale-105"
					>
						Home
					</Link>
					<Link
						href={"#AboutSection"}
						className=" hover:text-white hover:scale-105"
					>
						About
					</Link>
					<Link
						href={"#TimelineSection"}
						className=" hover:text-white hover:scale-105"
					>
						Timeline
					</Link>
					<Link
						href={"#CertificationSection"}
						className=" hover:text-white hover:scale-105"
					>
						Certification
					</Link>
					<Link
						href={"#ProjectsSection"}
						className=" hover:text-white hover:scale-105"
					>
						Projects
					</Link>
					<Link
						href={"#ContactSection"}
						className=" hover:text-black/70 hover:scale-105"
					>
						Contact
					</Link>
				</motion.div>
				<motion.div
                    initial={{ opacity: 0 }}
					animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
					className="absolute bottom-10  text-center w-full text-[#787878]"
				>
					Copyright ©️ 2023 Devanand
				</motion.div>
			</motion.div>
		</div>
	);
};
