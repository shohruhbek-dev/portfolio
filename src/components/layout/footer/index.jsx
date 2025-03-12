import clsx from "clsx";

import cn from "./style.module.scss";

function Footer() {
    return (
        <footer className={clsx(cn["footer"])}>


            <div className={clsx(cn["footerAll"])}>
                <p>find me in:</p>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <div className={clsx(cn["footerGit"])}>
                <p>shohruhbek-dev<i class="fa-brands fa-github"></i>
                </p>
            </div>


        </footer>
    );
}

export default Footer;
