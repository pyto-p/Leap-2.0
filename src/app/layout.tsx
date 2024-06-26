import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiBuildings, BiUser } from "react-icons/bi";
import dl from "../../public/assets/dlApp.png";
import logo from "../../public/assets/navLogo.png";
import "./global.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export const metadata = {
	title: "Leap",
	description: "This is the landing page of Leap",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={poppins.variable}>
			<body className="flex flex-col min-h-screen poppins">
				<nav className="sticky top-0 bg-primary px-5 z-50">
					<div className="navbar bg-primary">
						<div className="navbar-start bg-primary">
							
							<Link href="/auth">
								<Image
									src={logo}
									alt="logo"
									className="bg-primary w-auto h-14 max-sw:h-auto"
								/>
							</Link>
						</div>

						<div className="navbar-center hidden lg:flex">
							<ul className="menu menu-horizontal gap-16 px-1 bg-primary">
								<li className="bg-primary text-white">
									<Link href="/" className="btn-nav">
										Home
									</Link>
								</li>
								<li className="bg-primary text-white">
									<Link href="/browse" className="btn-nav">
										Find Jobs
									</Link>
								</li>
								<li className="bg-primary text-white">
									<Link href="/post" className="btn-nav">
										Post a Job
									</Link>
								</li>
								
							</ul>
						</div>

						<div className="navbar-end bg-primary max-sm:hidden">
							<ul className="menu menu-horizontal px-1 bg-primary">
								<li className="bg-primary text-white flex-row">
									<details className="bg-primary text-white">
										<summary className="bg-primary text-white">
											<BiBuildings className="bg-primary size-6" />
											Job Seekers
										</summary>

										<ul className="p-2 bg-primary text-white">
											<li className="bg-primary text-white">
												<Link href="/auth/login" className="bg-primary text-white">
													Log In
												</Link>
											</li>
											<li className="bg-primary text-white">
												<Link href="/auth/signup" className="bg-primary text-white">
													Sign Up
												</Link>
											</li>
										</ul>
									</details>

									<details className="bg-primary text-white">
										<summary className="bg-primary text-white">
											<BiUser className="bg-primary size-6" />
											Employers
										</summary>
										<ul className="p-2 bg-primary text-white">
											<li className="bg-primary text-white">
												<Link href="" className="bg-primary text-white">
													Log In
												</Link>
											</li>
											<li className="bg-primary text-white">
												<Link href="" className="bg-primary text-white">
													Sign Up
												</Link>
											</li>
										</ul>
									</details>
								</li>
							</ul>
						</div>

					</div>
				</nav>
				<main className="flex-grow">
          {children}
        </main>
				<footer className="h-auto footer pt-10 bg-secondary flex flex-col items-center">
					<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 bg-secondary place-items-center items-start max-sm:p-5">
						<div className="bg-secondary text-primary flex flex-col items-center">
							<Image src={logo} alt="logo" className="bg-secondary w-auto" />
							<p className="bg-secondary text-justify text-base text-white">
								Leap is a specialized online job board web application
								specifically designed for full-stack web development bootcamp
								graduates for them to find jobs faster.{" "}
							</p>
						</div>
						{/* Column 2 */}
						<div className="flex flex-col gap-5 items-center bg-secondary">
							<h2 className="font-bold text-3xl bg-secondary text-white">
								<span className="bg-secondary text-primary">Download </span>The
								App Now
							</h2>
							<div>
								<div className="flex gap-3 bg-secondary">
									<p className="bg-secondary text-white text-justify text-base mt-2">
										Get notifications straight to your phones. DOWNLOAD and grab
										unlimited opportunities NOW! Available in all platforms.
									</p>
									<Image
										src={dl}
										alt="download images"
										className="bg-secondary"
									/>
								</div>
							</div>
						</div>
						{/* Column 3 */}
						<div className="flex flex-col items-center bg-secondary gap-3">
							<h2 className="font-bold text-3xl bg-secondary text-white">
								Get In Touch
							</h2>
							<p className="bg-secondary text-white text-justify text-base mt-2">
								Are you interested in new features and updates?
							</p>
							<div className="w-full bg-secondary">
								<form className="bg-secondary flex flex-col gap-3">
									<div className="bg-secondary">
										<input
											type="email"
											id="email"
											className="input-forms h-16 text-primary"
											placeholder="Enter your email address"
										/>
									</div>
									<Link href="/auth/" className="btn h-16 bg-primary text-white hover:bg-white hover:border-2 hover:text-primary">
										Subscribe
									</Link>
								</form>
							</div>
						</div>
					</div>
					<aside className="bg-primary w-full flex flex-col items-center p-10 gap-3 max-sm:p-5">
            <div className="navbar-center hidden lg:flex">
							<ul className="menu menu-horizontal gap-16 px-1 bg-primary">
								<li className="bg-primary text-white">
									<Link href="" className="btn-nav">
										Home
									</Link>
								</li>
								<li className="bg-primary text-white">
									<Link href="" className="btn-nav">
										Find Jobs
									</Link>
								</li>
								<li className="bg-primary text-white">
									<Link href="" className="btn-nav">
										Post a Job
									</Link>
								</li>
							
							</ul>
						</div>
            <p className="bg-primary text-white text-base max-sm:w-full">
							Copyright © 2024 - All right reserved by Leap Inc.
						</p>
					</aside>
				</footer>
			</body>
		</html>
	);
}
