import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full">
      <nav>
        <Link href="/">
          <Image className="cursor-pointer duration-200 ease-in-out hover:scale-105" src="/logo.webp" alt="logo" width={60} height={60} />
        </Link>
      </nav>
    </div>
  )
}

export default Header