import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-900 text-slate-100 rounded">
            <div className="grid grid-flow-col gap-4">
                <Link className="hover:text-slate-200" href="/">Home</Link>
                <Link className="hover:text-slate-200" href="/profile">Profile</Link>
                <Link className="hover:text-slate-200" href="/login">Logout</Link>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by StripePayment Ltd</p>
            </div>
        </footer>
    )
}

export default Footer