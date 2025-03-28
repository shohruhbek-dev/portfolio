
import clsx from "clsx";
import cn from "./style.module.scss"
import SnakeGame from "../../components/game";


function Home() {
    return (
        <div className={clsx(cn["home"])}>
            <div className={clsx(cn["homeText"])}>
                <p>Hi all. I am</p>
                <h1>Micheal Weaver</h1>
                <h3> > Front-end developer</h3>
                <div className={clsx(cn["homeTextGit"])}>
                    <p>// complete the game to continue</p>
                    <p>// you can also see it on my Github page</p>
                    <div className={clsx(cn["homeTextGitLink"])}>
                        <span>const </span>
                        <span>githubLink</span>
                        <span> = </span>
                        <a target="_blank" href="https://github.com/example/url">"https://github.com/example/url"</a></div>
                </div>
            </div>
            <div className={clsx(cn["homeGame"])}>

                <SnakeGame />
            </div>
        </div>
    );
}

export default Home;
