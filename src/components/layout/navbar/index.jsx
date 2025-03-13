import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import cn from "./style.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuToggleRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        const menuToggle = menuToggleRef.current;
        
        const toggleMenu = () => {
            setIsOpen((prev) => !prev);
        };

        menuToggle.addEventListener("click", toggleMenu);

        return () => {
            menuToggle.removeEventListener("click", toggleMenu);
        };
    }, []);

    // Function to close menu when clicking a link
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={clsx(cn["header"])}>
            <div className={clsx(cn["headerinfo"])}>
                <div className={clsx(cn["headerinfo1"])}>
                    <Link to="/">micheal-weaver</Link>
                </div>
                <button ref={menuToggleRef} className={clsx(cn["menu-toggle"])}>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <ul ref={navLinksRef} className={clsx(cn["headerinfoUl"], { [cn["open"]]: isOpen })}>
                    <li>
                        <Link to="/" onClick={closeMenu}>_hello</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>_about-me</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={closeMenu}>_projects</Link>
                    </li>
                    {/* Show headerContacts inside menu when open */}
                    {isOpen && (
                        <li className={clsx(cn["headerContacts"])}>
                            <Link to="/contact" onClick={closeMenu}>_contact-me</Link>
                        </li>
                    )}
                </ul>
            </div>

            {/* Show headerContacts only in desktop mode */}
            <div className={clsx(cn["headerContacts"], { [cn["hidden"]]: isOpen })}>
                <Link to="/contact">_contact-me</Link>
            </div>
        </header>
    );
}

export default Navbar;
