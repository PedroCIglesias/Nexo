'use client';

import { Box, Flex } from '@chakra-ui/react';
import ProjectHeader from '@/components/ProjectHeader';
import PhaseList from '@/components/PhaseList';
import GanttChart from '@/components/GanttChart';

export default function ProjectPage() {
  return (
    <Flex direction="column" h="100vh">
      {/* Header da página do projeto */}
      <ProjectHeader />

      {/* Conteúdo principal */}
      <Flex flex="1" p="6" gap="4">
        {/* Lista de Fases e Tarefas */}
        <Box flex="1.5">
          <PhaseList />
        </Box>

        {/* Gráfico de Gantt */}
        <Box flex="2">
          <GanttChart />
        </Box>
      </Flex>
    </Flex>
  );
}
