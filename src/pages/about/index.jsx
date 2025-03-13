import { useEffect, useState } from "react";
import clsx from "clsx";
import cn from "./style.module.scss";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Dropdown from "/src/components/card/dropdown";

function About() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const [activeDetail, setActiveDetail] = useState(null);

    const handleClick = (index) => {
        setActiveDetail(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className={clsx(cn["about"])}>

            <div className={clsx(cn["aboutBAr"])}>
                <Dropdown
                    mainText={<><i className="fa-solid fa-caret-down"></i> personal-info</>}
                    dropdownItems={[
                        <p key="bio"><i className="fa-solid fa-file"></i> bio</p>,
                        <p key="interests"><i className="fa-solid fa-file"></i> interests</p>,
                        <Dropdown
                            key="education"
                            mainText={<><i className="fa-solid fa-caret-down"></i> education</>}
                            dropdownItems={[
                                <p key="high-school"><i className="fa-solid fa-file"></i> high-school</p>,
                                <p key="university"><i className="fa-solid fa-file"></i> university</p>
                            ]}
                        />
                    ]}
                />
                <Dropdown
                    mainText={<><i className="fa-solid fa-caret-down"></i> contacts</>}
                    dropdownItems={[
                        <a key="email" href="#"><i className="fa-solid fa-envelope"></i> user@gmail.com</a>,
                        <a key="phone" href="#"><i className="fa-solid fa-phone"></i> +3598246359</a>,
                    ]}
                />
            </div>

            <div className={clsx(cn["abouttop"])}>
                <p>personal-info</p>
            </div>

            <div className={clsx(cn["aboutCenter1"])}>
                <span> 1    /** </span>
                <span> 2    * About me </span>
                <span> 3    * I have 5 years of еxperience in web </span>
                <span> 4    * development lorem ipsum dolor sit amet, </span>
                <span> 5    * consectetur adipiscing elit, sed do eiusmod </span>
                <span> 6    * tempor incididunt ut labore et dolore </span>
                <span> 7    * magna aliqua. Ut enim ad minim veniam, </span>
                <span> 8    * quis nostrud exercitation ullamco laboris </span>
                <span> 9    * nisi ut aliquip ex ea commodo consequat. </span>
                <span> 10   * Duis aute irure dolor in reprehenderit in </span>
                <span> 11   * voluptate velit esse cillum dolore eu fugiat </span>
                <span> 12   * nulla pariatur. Excepteur sint occaecat </span>
                <span> 13   * officia deserunt mollit anim id est laborum. </span>
                <span> 14   */ </span>
            </div>

            <div className={clsx(cn["aboutCenter2"])}>
                <p className={clsx(cn["aboutCenterp"])}> // Code snippet showcase:</p>

                {[1, 2].map((item, index) => (
                    <div key={index} className={clsx(cn["aboutCenter2Sec"])}>

                        <div className={clsx(cn["aboutCenter2SecProfile"])}>

                            <div className={clsx(cn["aboutCenter2Sec2Img"])}>
                                <img src="/src/assets/profile.png" alt="Profile" />
                                <div>
                                    <span>@username</span>
                                    <p>Created 5 months ago</p>
                                </div>
                            </div>

                            <div className={clsx(cn["aboutCenter2Sec2detail"])}>
                                <p onClick={() => handleClick(index)} style={{ cursor: "pointer" }}>
                                    <i className="fa-solid fa-comment"></i> details
                                </p>
                                <p>
                                    <i className="fa-solid fa-star"></i> {index === 0 ? "3 stars" : "0 stars"}
                                </p>
                            </div>
                        </div>

                        <div className={clsx(cn["aboutCenter2Sec2Code"])}>
                            <pre>
                                <code className="language-javascript">
                                    {index === 0 ? `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
    const value: T = parseModel(chunk._response, chunk._value);
    const initializedChunk: InitializedChunk<T> = (chunk: any);
    initializedChunk._status = INITIALIZED;
    initializedChunk._value = value;
    return value;
}` :
                                        `export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}`}
                                </code>
                            </pre>
                        </div>

                        {activeDetail === index && (
                            <div className={clsx(cn["aboutCenter2Sec2Detail"])}> 
                                <p>
                                    My work here was 5 months ago. It was for the project called “...”. 
                                    Some other text can be placed here.
                                </p>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
