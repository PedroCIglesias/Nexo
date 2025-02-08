'use client';
import { Box, Text, Flex } from '@chakra-ui/react';

// 🔹 Mock de tarefas cadastradas
const tasks = [
  { id: 1, name: 'Tarefa 1', start: '2025-01-10', end: '2025-01-20', color: '#4DC4B4' },
  { id: 2, name: 'Tarefa 2', start: '2025-01-15', end: '2025-01-25', color: '#FF8C00' },
];

// 🔹 Função para converter string de data para objeto Date sem alteração de fuso horário
const parseDate = (dateStr) => new Date(dateStr);

// 🔹 Obtém a data mais antiga para definir o início do gráfico
const getFirstTaskDate = (tasks) => {
  return new Date(Math.min(...tasks.map((task) => parseDate(task.start).getTime())));
};

// 🔹 Gera os dias do mês corretamente alinhados à esquerda com menor espaçamento e peso 400
const generateDaysOfMonth = (start, end) => {
  const startDate = parseDate(start);
  console.log(startDate);
  const endDate = parseDate(end);
  console.log(endDate);

  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1; // Quantidade exata de dias
  const firstDay = startDate.getDate()+1;
  

  return Array.from({ length: totalDays }, (_, i) => (
    <Box
      key={i}
      minWidth="35px" // 🔹 Espaçamento reduzido
      textAlign="left" // 🔹 Alinhado à esquerda
      fontSize="sm"
      fontWeight="400" // 🔹 Peso da fonte ajustado para 400
      pl="0" // 🔹 Pequeno espaçamento à esquerda para evitar colagem
      color="black"
    >
      {firstDay + i}
    </Box>
  ));
};

// 🔹 Converte data para posição correta no gráfico
const dateToPosition = (date, firstDate) => {
  const start = parseDate(date);
  const first = parseDate(firstDate);
  return Math.round((start - first) / (1000 * 60 * 60 * 24)); // Calcula os dias exatos
};

export default function GanttChart() {
  const firstTaskDate = getFirstTaskDate(tasks);
  const lastTaskDate = new Date(Math.max(...tasks.map((task) => parseDate(task.end).getTime())));

  return (
    <Box bg="white" p="4" boxShadow="md" borderRadius="md" width="100%" overflowX="auto">
      {/* Cabeçalho do gráfico com os dias corretamente renderizados */}
      <Flex direction="column" mb="2">
        <Text fontSize="lg" fontWeight="400" textAlign="left" mb="1">
          Janeiro
        </Text>
        <Flex overflowX="auto">
          {generateDaysOfMonth(firstTaskDate, lastTaskDate)}
        </Flex>
      </Flex>

      {/* Área do gráfico de Gantt */}
      <Box position="relative" overflowX="auto" width="100%" height="100px">
        {tasks.map((task, index) => {
          const startPos = dateToPosition(task.start, firstTaskDate);
          const endPos = dateToPosition(task.end, firstTaskDate);
          const width = (endPos - startPos + 1) * 35; // 🔹 Ajustado conforme menor espaçamento

          return (
            <Box
              key={task.id}
              position="absolute"
              top={`${index * 40}px`}
              left={`${startPos * 35}px`} // 🔹 Mantém alinhamento com os números
              width={`${width}px`}
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
          );
        })}
      </Box>
    </Box>
  );
}
