import clsx from "clsx";
import cn from "./style.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className={clsx(cn["header"])}>
            <div className={clsx(cn["headerinfo"])}>
                <div>
                    <Link to="/">
                        micheal-weaver
                    </Link>
                </div>
                <ul>

                    <li>
                        <Link to="/">_hello</Link>
                    </li>
                    <li>
                        <Link to="/about">_about-me</Link>
                    </li>
                    <li>
                        <Link to="/projects">_projects</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/contact"> _contact-me</Link>
            </div>

        </header>
    );
}

export default Navbar;
