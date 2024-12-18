import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { LayoutDashboardIcon, PenBoxIcon } from 'lucide-react';


const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-gray-600  ">
      <nav className="px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image className="cursor-pointer object-contain invert" src="/logo.webp" alt="Penny Plan" width={60} height={60} />
          <span className="text-2xl font-bold">Penny Plan</span>
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-800 flex items-center gap-2">
              <Button variant="outline">
                <LayoutDashboardIcon size={20}/>
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-800 flex items-center gap-2">
              <Button variant="outline">
                <PenBoxIcon size={20}/>
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>


        <SignedOut>
          <SignInButton forceRedirectUrl='/dashboard'>
          <Button variant="outline">Log In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{ elements: { avatarBox: "h-10 w-10" } }}/>
        </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header