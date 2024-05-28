import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/navLogo.png";
import "./global.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", 
})

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
			<body className="h-screen poppins">
				<nav className="sticky top-0 bg-primary px-5">
					<div className="navbar bg-primary">
						<div className="navbar-start bg-primary">
							<div className="dropdown">
								<div
									tabIndex={0}
									role="button"
									className="btn btn-ghost lg:hidden"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6h16M4 12h8m-8 6h16"
										/>
									</svg>
								</div>
								<ul
									tabIndex={0}
									className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<a>Item 1</a>
									</li>
									<li>
										<a>Parent</a>
										<ul className="p-2">
											<li>
												<a>Submenu 1</a>
											</li>
											<li>
												<a>Submenu 2</a>
											</li>
										</ul>
									</li>
									<li>
										<a>Item 3</a>
									</li>
								</ul>
							</div>
							<Link href="/auth">
								<Image
									src={logo}
									alt="logo"
									className="bg-primary w-auto h-14"
								/>
							</Link>
						</div>

						<div className="navbar-center hidden lg:flex">
							<ul className="menu menu-horizontal gap-16 px-1 bg-primary">
								<li className="bg-primary text-white">
									<Link href="" className="btn-nav">Home</Link>
								</li>
								<li className="bg-primary text-white">
									<Link href="" className="btn-nav">Find Jobs</Link>
								</li>
                <li className="bg-primary text-white">
									<Link href="" className="btn-nav">Post a Job</Link>
								</li>
								<li className="bg-primary text-white">
									<Link href="" className="btn-nav">About Us</Link>
								</li>
							</ul>
						</div>

						<div className="navbar-end bg-primary">
							<ul className="menu menu-horizontal px-1 bg-primary">
                <li className="bg-primary text-white">
                  <details className="bg-primary text-white">
                    <summary className="bg-primary text-white">Parent</summary>
                    <ul className="p-2 bg-primary text-white">
                      <li className="bg-primary text-white">
                        <Link href="" className="bg-primary text-white">Log In</Link>
                      </li>
                      <li className="bg-primary text-white">
                      <Link href="" className="bg-primary text-white">Sign Up</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
						</div>
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}
