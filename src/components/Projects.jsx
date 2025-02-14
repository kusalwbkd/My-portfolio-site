import { projects } from '../assets/data';
import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="Web Creations" />

      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return (
            <ProjectsCard
              key={project.id}
              {...project}
              className="transform transition duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-200 shadow-xl"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
