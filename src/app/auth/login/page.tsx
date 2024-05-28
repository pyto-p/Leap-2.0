import Link from "next/link";

export default function LogInPage() {
	return (
		<div>
			<form>
				<div className="mb-8">
					<label
						htmlFor="email"
						className="block text-primary text-sm font-bold mb-2"
					>
						Email Address
					</label>
					<input
						type="email"
						id="email"
						className="input-forms h-16 text-primary"
						placeholder="Enter your email address"
					/>
				</div>
				<div className="mb-12">
					<label
						htmlFor="password"
						className="block text-primary text-sm font-bold mb-2"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						className="input-forms h-16 text-primary"
						placeholder="Enter your password"
					/>
				</div>
				<Link
					href="/auth/"
					className="btn-auth"
				>
					Log In
				</Link>
			</form>
		</div>
	);
}
