export default function ProjectPage({ params }) {
    return (
      <div>
        <h1>Projeto ID: {params.id}</h1>
        <p>Aqui você verá o gráfico de Gantt e poderá gerenciar tarefas.</p>
      </div>
    );
  }
  