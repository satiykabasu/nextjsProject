import Link from "next/link";


export default function Nav() {
  return (
   <nav className="flex justify-between bg-nav p-4 ">
    <div className="flex items-center space-x-4">
    <Link href="/">Home</Link>
    <Link href="/ticketpage/new">Ticket Page</Link>
      </div>
      <div>
<p className="text-default-text">email@gmail.com</p>
      </div>
    
   </nav>
  )
}

