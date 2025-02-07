'use client';

import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

export default function PhaseList() {
  return (
    <Box bg="white" p="4" boxShadow="md" borderRadius="md">
      {/* Cabeçalho da lista */}
      <Flex justify="space-between" mb="4">
        <Heading size="md">Fases e Tarefas</Heading>
        <Flex gap="2">
          <Button size="sm" colorScheme="blue">+ Adicionar Tarefa</Button>
          <Button size="sm" colorScheme="blue">+ Adicionar Fase</Button>
        </Flex>
      </Flex>

      {/* Exemplo de Fase */}
      <Box p="2" border="1px solid #E2E8F0" borderRadius="md" mb="2">
        <Text fontSize="md" fontWeight="bold">Fase 1</Text>
        <Box pl="4">
          <Text fontSize="sm">✔ Nome da Tarefa - Pedro Carlo - Em andamento - 11/02 a 14/02</Text>
          <Text fontSize="sm">✔ Nome da Tarefa - Pedro Carlo - Pendente - 11/02 a 14/02</Text>
        </Box>
      </Box>
    </Box>
  );
}
