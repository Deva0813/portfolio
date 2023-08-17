"use client";
import {useState} from "react";
import { CertificateCard, CertificateCardBig, CertificateCardMobile } from "../CertificateComp/page";

//certification data
import certificateData from "../../assets/data/certData";

type Props = {};
export const CertificationSection = (props: Props) => {

	const [show, setShow] = useState(true);
	const [selectedCard, setSelectedCard] = useState(0);

	const handleShow = (index: number) => {
		setShow(false);
		setSelectedCard(index);
	};

	const handleClose = () => {
		setShow(true);
	};

	const data = certificateData;

	return (
		<section id="CertificationSection" className="bg-[#272829] relative min-h-[94vh] " >
			<div className="container p-10 md:p-10 mx-auto lapScreen " >
				<div className=" text-3xl md:text-5xl md:py-5 md:pt-10 w-full font-semibold md:font-bold text-white">
					CERTIFICATIONS
				</div>
				<div className=" text-sm md:text-lg font-medium italic py-5 text-[#AAA]  ">
					<p>
						&quot;Dive into My Achievements: Check out my certified
						skills and completed courses! From learning code to
						mastering design, each course I finish adds to my
						abilities. Let&apos;s celebrate milestones and keep
						aiming for more success together!&quot;
					</p>
				</div>

				<div className="md:py-10 grid place-content-center  w-full ">
                    <div className=" grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 w-fit max-md:hidden ">
                    {
						data.map((item, index) => {
							return (
								<CertificateCard
									key={index}
									image={item.image}
									title={item.title}
									tech={item.tech}
									onClick={() => {
										handleShow(index);
									}}
								/>
							);
						})
					}
					<CertificateCardBig image={data[selectedCard].image} title={data[selectedCard].title } tech={data[selectedCard].tech} hidden={show} onClick={()=>{handleClose()}} link={data[selectedCard].link} />
                    </div>
					<div className=" grid grid-cols-2  gap-7 scale-95 w-fit md:hidden " >
                    {
						data.map((item, index) => {
							return (
								<CertificateCardMobile
									key={index}
									image={item.image}
									title={item.title}
									tech={item.tech}
									onClick={() => {
										window.open(item.link, "_blank");
									}}
									
								/>
							);
						})
					}
                    </div>
                </div>

			</div>
		</section>
	);
};
