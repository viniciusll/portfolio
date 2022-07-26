import { Container } from "./styles";

const myProjects = [
  {
    name: "Avaliacao-Tecninca-Frontend",
    description: "In this project I created an e-commerce for front-end technical evaluation.",
    technologies: [
      {
        name: "ReactJs",
        image: ""
      }
    ],
    image: ""
  },
  {
    name: "Food Delivery",
    description: "I created this project for me to train my skills with NestJs and to study Prisma.",
    technologies: [
      {
        name: "NestJs",
        image: ""
      },
      {
        name: "Prisma",
        image: ""
      }
    ],
    image: ""
  },
  {
    name: "Library api",
    description: "I created this project to see how to make a backend application with NestJs using hexagonal architecture.",
    technologies: [
      {
        name: "NestJs",
        image: ""
      },
      {
        name: "Typeorm",
        image: ""
      }
    ],
    image: ""
  },
];

const Projects = () => {
    return (
      <Container data-section="projects" id='projects'>
        <h1 className="title">Projects</h1>
        {myProjects.map(project => (
          <div className="project-container" key={project.name}>
            <div className="project-image-container">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-body">
              <div className="project">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <div className="technologies">
                {project.technologies.map((technology, i) => (
                  <img key={i} src={technology.image} alt={technology.name} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Container>
    );
}

export default Projects;