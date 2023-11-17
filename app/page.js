import Link from "next/link"

export default function Home() {
  return (
   <main>
   <p className="text-center text-3xl h-18 mt-20"> hello this is next js</p>
   <Link href="/about">Go to About page</Link>
   </main>
  )
}
