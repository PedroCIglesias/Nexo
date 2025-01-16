import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
      <img src={project.thumbnail} alt={project.name} style={{ width: '100%' }} />
      <h3>{project.name}</h3>
      <Link href={`/dashboard/project/${project.id}`}>Ver Projeto</Link>
    </div>
  );
}
