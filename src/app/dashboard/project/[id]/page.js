'use client';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
  const router = useRouter();
  const { id } = useParams(); // Obtém o ID do projeto da URL

  return (
    <Box p="6" maxW="800px" mx="auto" textAlign="center">
      <Heading size="lg" mb="4">Projeto {id}</Heading>
      <Text fontSize="md" color="gray.600">
        Esta é uma tela placeholder. Aqui será exibido o gráfico de Gantt e o gerenciamento de tarefas do projeto futuramente.
      </Text>
      <Button
        mt="6"
        colorScheme="teal"
        onClick={() => router.push('/dashboard')} // Retorna ao dashboard
      >
        Voltar para o Dashboard
      </Button>
    </Box>
  );
}
