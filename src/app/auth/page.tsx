import Link from 'next/link';



export default function AuthPage() {
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <Link href="auth/signup" className="btn-auth">Sign Up</Link>
        <Link href="auth/login" className="btn-auth">Log In</Link>
      </div>
    </div>
  )
}
