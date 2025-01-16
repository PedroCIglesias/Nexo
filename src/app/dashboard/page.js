import ProjectCard from '@/components/ProjectCard';

export default function Dashboard() {
  const projects = [
    { id: '1', name: 'Projeto 1', thumbnail: '/logo.png' },
    { id: '2', name: 'Projeto 2', thumbnail: '/logo.png' },
  ];

  return (
    <div>
      <h1>Seus Projetos</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
