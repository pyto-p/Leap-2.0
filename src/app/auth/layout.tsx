import Image from 'next/image';
import loginBanner from "../../../public/assets/loginBanner.png";
import loginLogo from "../../../public/assets/loginLogo.png";
import loginMantra from "../../../public/assets/loginMantra.png";

export const metadata = {
  title: 'Log In / Sign Up',
  description: 'Log In and Sign Up page for Leap',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">
        {/* Banner */}
        <div className="w-1/2 h-full relative hidden md:block">
          <Image 
            src={loginBanner} 
            alt='login banner'
            className="w-full h-full object-cover"
          />
        </div>
        {/* Content */}
        <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-12'>
          <div className='flex flex-col items-center gap-3'>
            <Image
              src={loginLogo}
              alt="login logo"
              className='w-auto'
            />
            <Image
              src={loginMantra}
              alt="login mantra"
              className='w-auto'
            />
          </div>
          <div className="w-11/12 overflow-y-auto p-5">{children}</div>
        </div>
      </body>
    </html>
  )
}
