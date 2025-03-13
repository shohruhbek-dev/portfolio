
import clsx from "clsx";
import cn from "./style.module.scss"
import ProjectCard from "../../components/card/projectCard";
import Dropdown from "../../components/card/dropdown";


function Projects() {
  const dropdownItems = [
    { id: "React", name: "React", checked: true },
    { id: "HTML", name: "HTML", checked: false },
    { id: "CSS", name: "CSS", checked: false },
    { id: "Vue", name: "Vue", checked: true },
    { id: "Angular", name: "Angular", checked: false },
    { id: "Gatsby", name: "Gatsby", checked: false },
    { id: "Flutter", name: "Flutter", checked: false }
  ];

  const projectCards = [
    {
      title: <><span>Project 1</span> // _ui-animations</>,
      description: "Duis aute irure dolor in velit esse cillum dolore.",
      imageUrl: "/src/assets/project1.png",
      projectLink: "#",
      span: <i className="fa-brands fa-react"></i>
    },
    {
      title: <><span>Project 2</span> // _ui-animations</>,
      description: "Duis aute irure dolor in velit esse cillum dolore.",
      imageUrl: "/src/assets/project2.png",
      projectLink: "#",
      span: <i className="fa-brands fa-react"></i>
    },
    {
      title: <><span>Project 3</span> // _ui-animations</>,
      description: "Duis aute irure dolor in velit esse cillum dolore.",
      imageUrl: "/src/assets/project3.png",
      projectLink: "#",
      span: <i className="fa-brands fa-vuejs"></i>
    }
    ];

  return (
    <div className={clsx(cn["Projects"])}>
      <div className={clsx(cn["ProjectsLeftBAr"])}>
        <Dropdown
          mainText={
            <>
              <i className="fa-solid fa-caret-down"></i> projects
            </>
          }
          dropdownItems={dropdownItems.map((item) => (
            <div key={item.id}>
              <input type="checkbox" id={item.id} name={item.name} checked={item.checked} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))}
        />
      </div>
      <div className={clsx(cn["projectsTop"])}>
        <div>
          <p>React; Vue</p>
        </div>
      </div>
      <div className={clsx(cn["projectsCenter"])}>
        {projectCards.map((card, index) => (
          <ProjectCard
            key={index}
            title={<>{card.title}</>}
            description={card.description}
            imageUrl={card.imageUrl}
            projectLink={card.projectLink}
            span={card.span}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
