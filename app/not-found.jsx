import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='my-20 overflow-hidden max-h-screen'>
      <div>

      {/* Dust particle */}
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      {/* Dust particle end */}

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      {/* END Lamp */}

      <section className="error">
        {/* Content */}
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Page Not Found</h1>
            <p className="message__text text-emerald-200">
              We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.
            </p>
          </div>
          <div className="">
            <Link href="/">
              <Button className="bg-emerald-800 hover:bg-emerald-600 ">Go Home</Button>
            </Link>
          </div>
        </div>
        {/* END Content */}
      </section>
    </div>
    </div>
  )
}

export default NotFound