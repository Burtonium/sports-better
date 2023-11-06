import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between">
      <h1 className="text-4xl px-5 py-3 font-extrabold text-white">
        Sports <span className="text-primary">Better</span>
      </h1>
      <div className="flex items-center px-5 py-3">
      {!session && (
        <div className="flex flex-row gap-2">
          <Link href={"/login"} className="btn">
            Login
          </Link>
          <Link href={"/register"} className="btn">
            Register
          </Link>
        </div>
      )}
      {session && (
        <div className="flex space-x-5 items-center">
        <p>Welcome, {session.user.username}</p>
        <button onClick={() => signOut()} className="btn">
          Logout
        </button>
        </div>
      )}
      </div>
    </nav>
  )
}
export default Header;
