import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"


function TicketCard() {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-lg shadow-lg p-4 m-3">
        <div className="flex mb-4">
        <PriorityDisplay/>
        <div className="ml-auto">
        <DeleteBlock/>
        </div>
        </div>
        <h3 className="h-px border-0 font-bold text-3xl">Ticket Title</h3>
        <p className="whitespace-pre-wrap text-sm">Ticket Description</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-2">17.11.2023</p>
            <ProgressDisplay/>
          </div>
          <div className="ml-auto flex items-end">
          <StatusDisplay/>
          </div>
        </div>
        
       
    </div>
  )
}

export default TicketCard