import { useState } from "react";
import cn  from "./style.module.scss";
import clsx from "clsx";

const Dropdown = ({ mainText, dropdownItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={clsx(cn.dropdown, { [cn.dropdownOpen]: isOpen })}>
            <button onClick={() => setIsOpen(!isOpen)} className={cn.dropdownButton}>
                {mainText}
            </button>
            {isOpen && (
                <ul className={cn.dropdownList}>
                    {dropdownItems.map((item, index) => (
                        <li key={index} className={cn.dropdownItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
