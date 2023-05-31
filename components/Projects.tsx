import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"

const Projects = () => {
  const projects = [
    {
      title: "Project A",
      description:
        "A sleek and modern web application built using React and Redux.",
      technologies: ["React", "Redux"],
    },
    {
      title: "Project B",
      description:
        "An interactive e-commerce platform developed with Angular and TypeScript.",
      technologies: ["Angular", "TypeScript"],
    },
    {
      title: "Project C",
      description:
        "A responsive landing page crafted using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
        Proyectos
      </h3>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              {project.technologies.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects
