import Link from "next/link"
import TicketCard from "./[component]/TicketCard"

export default function Home() {
  return (
  
    <div className="p-6">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
      <TicketCard/>
      </div>
      </div>
  

  )
}
