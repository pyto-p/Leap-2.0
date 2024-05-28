import Image from "next/image";
import Link from "next/link";
import {
  BiBarChartAlt2,
  BiCodeAlt,
  BiCodeBlock,
  BiColor,
  BiData,
  BiLayer,
  BiLayout,
  BiMapAlt,
  BiSearch,
  BiServer,
  BiTachometer,
} from "react-icons/bi";
import elemOne from "../../public/assets/elementBanner.png";
import FeaturedJobCard from "./components/FeaturedJobCard";

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<section className="flex-grow bg-secondary h-screen flex">
				<div className="bg-secondary w-1/2 py-40 px-16 flex flex-col gap-y-3.5">
					<h2 className="font-bold text-5xl bg-secondary text-primary">
						Elevate Your Career: Leap Where Opportunities Take Flight.
					</h2>
					<p className="bg-secondary text-white text-justify text-xl mt-2">
						Secure Your Next Career Move or Share a Job Opportunity.
					</p>
					<div className="flex gap-8 bg-secondary">
						<Link
							href="/auth/"
							className="w-40 text-xl btn h-16 bg-primary text-white hover:bg-white hover:text-primary"
						>
							Browse Job
						</Link>

						<Link
							href="/auth/"
							className="w-40 text-xl btn h-16 bg-primary text-white hover:bg-white hover:text-primary"
						>
							Post Job
						</Link>
					</div>
				</div>

				<div className="bg-secondary w-1/2">
					<Image
						src={elemOne}
						alt="element one"
						className="w-full h-full object-cover bg-secondary"
					/>
				</div>
			</section>

			<section className="flex-grow bg-primary p-10">
				<div className="flex p-12 bg-tertiary rounded-xl justify-around items-center">
					<input
						type="text"
						id="job-title"
						className="h-16 p-3 flex-1 text-white bg-tertiary border-b-2 border-secondary focus:outline-none"
						placeholder="Job Title, Company, or Keywords"
					/>
					<div className="flex-1 flex gap-2 items-center justify-center bg-tertiary w-auto">
						<ul className="w-auto menu menu-horizontal px-1 bg-tertiary hover:rounded-lg">
							<li className="w-full text-white flex-row hover:rounded-lg">
								<details className="w-full bg-tertiary text-white hover:bg-secondary hover:text-white hover:rounded-lg">
									<summary className="bg-secondary w-full h-16 p-9 text-white flex items-center justify-center border-b-2 border-secondary text-base hover:bg-secondary hover:text-white hover:rounded-lg active:border-none">
										<BiCodeAlt className="bg-secondary text-tertiary size-6" />
										Job Categories / Skills
									</summary>

									<ul className="p-2 bg-primary text-white w-full">
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiServer className="bg-primary text-secondary size-6" />
												Back-End Developer
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiData className="bg-primary text-secondary size-6" />
												CMS Developer
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiCodeBlock className="bg-primary text-secondary size-6" />
												Front-End Developer
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiTachometer className="bg-primary text-secondary size-6" />
												Front-End Engineer
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiLayer className="bg-primary text-secondary size-6" />
												Full-Stack Developer
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiSearch className="bg-primary text-secondary size-6" />
												SEO Specialist
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiLayout className="bg-primary text-secondary size-6" />
												UI/UX Designer
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiBarChartAlt2 className="bg-primary text-secondary size-6" />
												Web Analyst
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												<BiColor className="bg-primary text-secondary size-6" />
												Web Designer
											</Link>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>

					<div className="flex-1 flex gap-2 items-center justify-center bg-tertiary w-auto">
						<ul className="w-auto menu menu-horizontal px-1 bg-tertiary hover:rounded-lg">
							<li className="w-full text-white flex-row hover:rounded-lg">
								<details className="w-full bg-tertiary text-white hover:bg-secondary hover:text-white hover:rounded-lg">
									<summary className="bg-secondary w-full h-16 p-9 text-white flex items-center justify-center border-b-2 border-secondary text-base hover:bg-secondary hover:text-white hover:rounded-lg active:border-none">
										<BiMapAlt className="bg-secondary text-tertiary size-6" />
										Location
									</summary>

									<ul className="p-2 bg-primary text-white w-full">
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Bacolod
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Cebu
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Davao
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Iloilo
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Makati
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Mandaluyong
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Metro Manila
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Quezon City
											</Link>
										</li>
										<li className="bg-primary text-white">
											<Link href="" className="bg-primary text-white">
												Taguig City
											</Link>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="flex flex-col items-center flex-grow h-auto bg-primary py-10 gap-y-10">
				<h2 className="font-bold text-5xl bg-primary text-secondary">
					Featured <span className="bg-primary text-white">Jobs</span>
				</h2>
				<div>
					<div className="flex gap-5 bg-primary">
						<FeaturedJobCard
							jobTitle="Full Stack Developer"
							company="Tech Company Inc."
							location="Manila, Philippines"
							jobType="Full-Time"
							salary="₱50,000 - ₱70,000"
							workSetup="Remote"
						/>
						<FeaturedJobCard
							jobTitle="Graphic Designer"
							company="Creative Studio"
							location="Cebu, Philippines"
							jobType="Part-Time"
							salary="Negotiable"
							workSetup="On-site"
						/>
						<FeaturedJobCard
							jobTitle="Project Manager"
							company="Business Solutions Ltd."
							location="Davao, Philippines"
							jobType="Full-Time"
							salary="₱80,000 - ₱100,000"
							workSetup="Remote"
						/>
					</div>
				</div>
        <h2 className="font-bold text-5xl bg-primary text-secondary">
					Featured <span className="bg-primary text-white">Companies</span>
				</h2>
				<div>
					<div className="flex gap-5 bg-primary">
						<FeaturedJobCard
							jobTitle="Full Stack Developer"
							company="Tech Company Inc."
							location="Manila, Philippines"
							jobType="Full-Time"
							salary="₱50,000 - ₱70,000"
							workSetup="Remote"
						/>
						<FeaturedJobCard
							jobTitle="Graphic Designer"
							company="Creative Studio"
							location="Cebu, Philippines"
							jobType="Part-Time"
							salary="Negotiable"
							workSetup="On-site"
						/>
						<FeaturedJobCard
							jobTitle="Project Manager"
							company="Business Solutions Ltd."
							location="Davao, Philippines"
							jobType="Full-Time"
							salary="₱80,000 - ₱100,000"
							workSetup="Remote"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
