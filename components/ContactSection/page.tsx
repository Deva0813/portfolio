"use client";
import Image from "next/image";
import {useState,useEffect,useRef} from "react";

import emailjs from "@emailjs/browser";

//images
import c1 from "../../public/images/contact/mail.png";
import c2 from "../../public/images/contact/linkedin-1.png";
import c3 from "../../public/images/contact/whatsapp.png";
import c4 from "../../public/images/contact/github.png";
import c5 from "../../public/images/contact/instagram-logo.png";
import c6 from "../../public/images/contact/facebook.png";
import Link from "next/link";

type Props = {};
export const ContactSection = (props: Props) => {
	const [clientName, setClientName] = useState("");
	const [clientEmail, setClientEmail] = useState("");
	const [clientMessage, setClientMessage] = useState("");
	const [clientdata, setClientdata] = useState({
		name: "",
		email: "",
		message: "",
		date: "",
	});

    
    const form = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        setClientdata({
          name: clientName,
          email: clientEmail,
          message: clientMessage,
          date: new Date().toLocaleString(),
        });
      }, [clientName, clientEmail, clientMessage]);

      const sendEmail = () => {
        emailjs.send("deva-portfolio","template_b0juhpq", clientdata , '1Uy71Cq80r9ITOrMG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
      const getClientData = () => {
        if (clientName === "" || clientEmail === "" || clientMessage === "") {
          alert("Please fill all the fields");
        } else {
          
          if (clientEmail.includes("@") && clientEmail.includes(".")) {
            sendEmail();
            alert("Message sent successfully");
			form.current?.reset();
          } else {
            alert("Please enter a valid email");
            }
    
          console.log(clientdata);
        }
      };

	return (
		<section id="ContactSection" className="bg-[#1E1E1E]">
			<div className="h-[93vh] relative  container mx-auto text-white flex flex-row lapScreen ">
				<div className="absolute left-[50%] translate-x-[-50%]  bottom-5 font-semibold text-[#6b6b6b] w-max ">
					Copyright ©️ 2023 Devanand
				</div>

				<div className=" w-full grid place-content-center lg:pt-28  ">
					<div className="w-[22rem]">
						<p className="text-2xl text-[#787878] font-semibold">
							Contact Me
						</p>
						<p className="text-5xl font-semibold flex flex-row items-center justify-between ">
							Let&apos;s chat.{" "}
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="90"
									height="90"
									viewBox="0 0 105 105"
									fill="none"
								>
									<circle
										cx="52.5"
										cy="52.5"
										r="36.5"
										transform="rotate(-45 52.5 52.5)"
										fill="white"
									/>
									<path
										d="M41.4558 61.4837C40.4795 62.46 40.4795 64.0429 41.4558 65.0192C42.4321 65.9955 44.015 65.9955 44.9913 65.0192L41.4558 61.4837ZM67.2265 41.7485C67.2265 40.3678 66.1072 39.2485 64.7265 39.2485H42.2265C40.8458 39.2485 39.7265 40.3678 39.7265 41.7485C39.7265 43.1292 40.8458 44.2485 42.2265 44.2485H62.2265V64.2485C62.2265 65.6292 63.3458 66.7485 64.7265 66.7485C66.1072 66.7485 67.2265 65.6292 67.2265 64.2485V41.7485ZM44.9913 65.0192L66.4943 43.5163L62.9587 39.9808L41.4558 61.4837L44.9913 65.0192Z"
										fill="black"
									/>
								</svg>
							</span>{" "}
						</p>
						<p className="text-4xl py-1 font-semibold">
							Tell me about your project.
						</p>
						<p className="text-xl pt-5 text-[#787878] ">
							Let&apos;s create something together
						</p>
						<div className="mt-10 grid grid-flow-col ">
							<p className="text-xl text-[#787878] font-semibold">
								Also in :
							</p>

							<Link href={"mailto:devanand151101@gmail.com"} target="_blank" >
								<Image
									src={c1}
									width={25}
									height={25}
									alt="mail"
								/>
							</Link>
							<Link href={"https://www.linkedin.com/in/devanand-m-9a22351b3/"} target="_blank">
								<Image
									src={c2}
									width={25}
									height={25}
									alt="linkedin"
								/>
							</Link>
							<Link href={"https://wa.me/919176204928"} target="_blank" >
								<Image
									src={c3}
									width={25}
									height={25}
									alt="whatsapp"
								/>
							</Link>
							<Link href={"https://github.com/Deva0813"} target="_blank" >
								<Image
									src={c4}
									width={25}
									height={25}
									alt="github"
								/>
							</Link>
							<Link href={"https://www.instagram.com/epic.dev"} target="_blank" >
								<Image
									src={c5}
									width={25}
									height={25}
									alt="instagram"
								/>
							</Link>
							<Link href={"https://www.facebook.com/epichunter.deva"} target="_blank" >
								<Image
									src={c6}
									width={25}
									height={25}
									alt="facebook"
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className=" relative w-full grid place-content-center  ">
					<div className=" absolute -left-[85%]  top-10  getTxt  text-[10rem] w-max font-semibold text-[#414243]   ">
						#GET IN TOUCH
					</div>
					<div className="w-[25rem] bg-[#3A3A3A] rounded-lg text-white/70 p-10 text-sm z-20 ">
						<form action="" ref={form!} >
							<label htmlFor="name" className="">
								What&apos;s your name ?
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="w-full bg-transparent border-b-[1px] border-white/30 focus:outline-none focus:border-white/70 mt-2 mb-7 p-1 "
                                onChange={(e) => setClientName(e.target.value)}
							/>
							<label htmlFor="email" className="">
								What&apos;s your email ?
							</label>
							<input
								type="text"
								name="email"
								id="email"
								className="w-full bg-transparent border-b-[1px] border-white/30 focus:outline-none focus:border-white/70 mt-2 mb-7 p-1"
                                onChange={(e) => setClientEmail(e.target.value)}
                            />
							<label htmlFor="message" className="">
								Tell me about your project :
							</label>
							<textarea
								name="message"
								id="message"
								className="w-full focus:outline-none text-black mt-3 p-3 mb-5 rounded-md resize-none font-medium "
								rows={8}
                                onChange={(e) => setClientMessage(e.target.value)}
							/>
						</form>
						<button className="bg-[#A8A8A8] text-[#3A3A3A] w-full py-2 rounded-md text-base font-semibold" onClick={getClientData} >
							Send Message{" "}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
