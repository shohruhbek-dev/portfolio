
import clsx from "clsx";
import cn from "./style.module.scss"
import Dropdown from "../../components/dropdown";
import ProjectCard from "../../components/card/projectCard";


function Projects() {
  return (
    <div className={clsx(cn["Projects"])}>
      <div className={clsx(cn["ProjectsLeftBAr"])}>
        <Dropdown mainText={<><i className="fa-solid fa-caret-down"></i> projects</>} dropdownItems={[

          <div>
            < input type="checkbox" id="React" name="React"  checked/>
            <label for="React">React</label>
          </div>, <div>
            < input type="checkbox" id="HTML" name="HTML" />
            <label for="HTML">HTML</label>
          </div>, <div>
            < input type="checkbox" id="CSS" name="CSS" />
            <label for="CSS">CSS</label>
          </div>, <div>
            < input type="checkbox" id="Vue" name="Vue"  checked/>
            <label for="Vue">Vue</label>
          </div>, <div>
            < input type="checkbox" id="Angular" name="Angular" />
            <label for="Angular">Angular</label>
          </div>, <div>
            < input type="checkbox" id="Gatsby" name="Gatsby" />
            <label for="Gatsby">Gatsby</label>
          </div>, <div>
            < input type="checkbox" id="Flutter" name="Flutter" />
            <label for="Flutter">Flutter</label>
          </div>



        ]}></Dropdown>

      </div>
      <div className={clsx(cn["projectsTop"])}> <div>
        <p>React; Vue</p></div></div>
      <div className={clsx(cn["projectsCenter"])}>
        <ProjectCard title={<>"<span>Project 1</span> // _ui-animations"</>} description="Duis aute irure dolor in velit esse cillum dolore." imageUrl="/src/assets/project1.png" projectLink="#" span={<i className="fa-brands fa-react"></i>} />
        <ProjectCard title={<>"<span>Project 2</span> // _ui-animations"</>} description="Duis aute irure dolor in velit esse cillum dolore." imageUrl="/src/assets/project1.png" projectLink="#" span={<i className="fa-brands fa-react"></i>} />
        <ProjectCard title={<>"<span>Project 3</span> // _ui-animations"</>} description="Duis aute irure dolor in velit esse cillum dolore." imageUrl="/src/assets/project1.png" projectLink="#" span={<i class="fa-brands fa-vuejs"></i>} />
      </div>

    </div>
  );
}

export default Projects;
