'use client';
import { Box, Text, Flex } from '@chakra-ui/react';

// Simulação de tarefas cadastradas
const tasks = [
  { id: 1, name: 'Tarefa 1', start: '2025-01-10', end: '2025-01-20', color: '#4DC4B4' },
  { id: 2, name: 'Tarefa 2', start: '2025-01-15', end: '2025-01-25', color: '#FF8C00' },
];

// Função para gerar os dias corretamente alinhados
const generateDaysOfMonth = (start) => {
  const startDate = new Date(start);
  const firstDay = startDate.getDate();
  const lastDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
  
  return Array.from({ length: lastDay - firstDay + 1 }, (_, i) => (
    <Box key={i} flex="1" textAlign="center" fontSize="sm" fontWeight="bold">
      {firstDay + i}
    </Box>
  ));
};

// Função para converter data para posição na grade
const dateToPosition = (date, start) => {
  const startDate = new Date(start);
  const currentDate = new Date(date);
  return currentDate.getDate() - startDate.getDate();
};

export default function GanttChart() {
  // Descobre a data da primeira tarefa para alinhar o gráfico
  const firstTaskDate = tasks.reduce((earliest, task) => {
    const taskStart = new Date(task.start);
    return taskStart < earliest ? taskStart : earliest;
  }, new Date(9999, 11, 31));

  return (
    <Box bg="white" p="4" boxShadow="md" borderRadius="md">
      {/* Cabeçalho com o nome do mês e os dias corretamente alinhados */}
      <Flex direction="column" mb="2">
        <Text fontSize="lg" fontWeight="bold" textAlign="left">
          Janeiro
        </Text>
        <Flex borderBottom="2px solid #E2E8F0" justify="flex-start">
          {generateDaysOfMonth(firstTaskDate)}
        </Flex>
      </Flex>

      {/* Gráfico de Gantt */}
      <Box position="relative" overflowX="auto" width="100%">
        {tasks.map((task, index) => (
          <Box
            key={task.id}
            position="absolute"
            top={`${index * 40}px`} // Ajusta a posição de cada tarefa
            left={`${dateToPosition(task.start, firstTaskDate) * 40}px`} // Alinha com os dias
            width={`${(dateToPosition(task.end, firstTaskDate) - dateToPosition(task.start, firstTaskDate) + 1) * 40}px`}
            height="30px"
            bg={task.color}
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize="sm"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
          >
            {task.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
