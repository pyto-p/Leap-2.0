import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="h-80">
      <form>
        <div className="mb-8">
          <label
            htmlFor="username"
            className="block text-primary text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="input-forms h-16 text-primary"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-primary text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-forms h-16 text-primary"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="phone"
            className="block text-primary text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="input-forms h-16 text-primary"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-8">
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
        <div className="mb-8">
          <label
            htmlFor="confirmPassword"
            className="block text-primary text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="input-forms h-16 text-primary"
            placeholder="Confirm your password"
          />
        </div>
        <Link href="/auth/" className="btn-auth">
          Sign Up
        </Link>
      </form>
    </div>
  )
}
