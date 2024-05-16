import { NavbarLink } from "./NavbarLink"
import { NavbarButton } from "./NavbarButton"

export const Sidebar = ({ isOpen, onClose }) => {

    const handleClose = () => {
        onClose()
    }

    return (
        <aside className={`fixed top-0 right-0 w-1/2 md:w-2/6 h-full bg-black transition-transform duration-300 transform flex flex-col justify-start items-center pt-16 gap-4 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute top-4 right-4 text-white" onClick={handleClose}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Links */}
            <NavbarLink to='/home' view='Home' onClick={handleClose}></NavbarLink>
            <NavbarLink to='/services' view='Services' onClick={handleClose}></NavbarLink>
            <NavbarLink to='/dashboard' view='Dashboard' onClick={handleClose}></NavbarLink>
            <NavbarLink to='/services-listing' view='Service Listing' onClick={handleClose}></NavbarLink>

            {/* Buttons */}
            <NavbarButton to='/contact' view='Contact us' onClick={handleClose}></NavbarButton>
            <NavbarButton to='/login' view='Sign up/login' onClick={handleClose}></NavbarButton>
        </aside>
    )
}