import Link from "next/link"

const Navbar = () => {
    return (
        <div className="navbar text-neutral-content bg-slate-900 flex flex-col md:flex-row">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">StripePayment</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1" >
                    <li><Link className="hover:text-slate-200" href="/">Home</Link></li>
                    <li><Link className="hover:text-slate-200" href="/profile">Profile</Link></li>
                    <li><Link className="hover:text-slate-200" href="/login">Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar