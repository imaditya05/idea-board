
import { List } from "./list";
import NewButton from "./newbutton";

export default function Sidebar (){

    return (
        <div className="fixed z-[1] left-0 bg-blue-950 h-full w-16 flex flex-col gap-y-4 p-3 text-white">
            <List />
            <NewButton />
        </div>
    )
} 