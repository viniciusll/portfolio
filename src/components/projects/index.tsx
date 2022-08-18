import { Container, CardContainer } from "./styles";
import { Card } from "./card";

const myProjects = [
  {
    name: "Store",
    description: "In this project I created an e-commerce for front-end technical evaluation.",
    technologies: [
      {
        name: "ReactJs",
        image: ""
      }
    ],
    image: "https://user-images.githubusercontent.com/40804611/185440873-ac61db40-3f3b-40db-8671-e9ab2d4343da.png",
    linkWebsite: "https://avaliacao-tecninca-frontend-a7c760n97-viniciusll.vercel.app/",
    linkRepository: "https://github.com/viniciusll/store/tree/main"
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
    image: "",
    linkWebsite: "https://avaliacao-tecninca-frontend-a7c760n97-viniciusll.vercel.app/",
    linkRepository: "https://avaliacao-tecninca-frontend-a7c760n97-viniciusll.vercel.app/"
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
    image: "",
    linkWebsite: "https://avaliacao-tecninca-frontend-a7c760n97-viniciusll.vercel.app/",
    linkRepository: "https://avaliacao-tecninca-frontend-a7c760n97-viniciusll.vercel.app/"
  },
];

const Projects = () => {
    return (
      <Container data-section="projects" id='projects'>
        {myProjects.map(project => (
          <CardContainer>
            <Card 
              title={project.name} 
              imgUrl={project.image} 
              description={project.description} 
              linkRepository={project.linkRepository}
              linkWebsite={project.linkWebsite}
            />
          </CardContainer>
        ))}
      </Container>
    );
}

export default Projects;