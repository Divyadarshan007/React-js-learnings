import Navlinks from "./Navlinks"

const Header = () => {
    return (
        <div className="container mx-auto flex justify-between items-center py-5">
            <div className="font-bold text-2xl">
                LOGO
            </div>
            <Navlinks/>
        </div>
    )
}

export default Header