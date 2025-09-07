import Link from 'next/link'
import React from 'react'

const ServicesLayout = ({children}) => {
  return (
    <section>
        <h3>Services Layout</h3>
        <div className='space-x-5 text-center py-5'>
            <Link href={'/services/web-dev'}>Web Dev</Link>
            <Link href={'/services/seo'}>SEO</Link>
        </div>
        {children}
    </section>
  )
}

export default ServicesLayout