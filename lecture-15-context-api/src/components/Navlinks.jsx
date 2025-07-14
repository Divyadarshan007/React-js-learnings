import { useContext } from "react"
import { AppContext } from "../App";

const Navlinks = () => {

    const { user, handleLogout } = useContext(AppContext);


    return (
        <div className="flex items-center gap-10">
            <ul className="flex items-center gap-5">
                <li className="font-normal text-xl">Home</li>
                <li className="font-normal text-xl">About</li>
                <li className="font-normal text-xl">Service</li>
                <li className="font-normal text-xl">Blogs</li>
                <li className="font-normal text-xl">Contact</li>
            </ul>
            <div className="flex items-center gap-4">
                <div className="font-medium underline">
                    {
                        user?.name?.toUpperCase()
                   }
                </div>
                <button className="border py-2 px-6" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navlinks