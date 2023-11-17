import Link from "next/link";


export default function Aboutus() {
  return (
    <div className="text-center mt-20">
        <h1>This is about page</h1>
        <Link href="/">Return to home</Link>
    </div>
  )
}

// we name as About as when go on the About route then this is the actual page which will be render
// as output of the webpage