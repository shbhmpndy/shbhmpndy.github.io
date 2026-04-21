import  ProjectCard  from "./ProjectCard";
import { projects } from '@/contents/projects'

export default function ProjectSection() {
    return(
      <section id="projects" className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Featured Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        A selection of projects showcasing my work in machine learning, data engineering, and AI systems
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0,6).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>  
    )
}