import { NavLink } from "react-router-dom"

/**
 * @param {string} to - The destination URL.
 * @param {string} children - The text content of the button.
 */

export const NavbarButton = ({ to, view, onClick }) => {

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <NavLink
            className='text-xs md:text-sm text-black font-bold text-center rounded py-3 px-4 bg-white hover:bg-customOrange hover:text-white transition-all duration-300'
            to={to}
            title={view}
            onClick={handleClick}>
            {view}
        </NavLink>
    )
}