'use client';
import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

const ProjectCard = ({ project }) => {
  const router = useRouter();

  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      p="4"
      w="250px"
      m="2"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" // Sombra suave
      _hover={{ cursor: 'pointer', borderColor: 'blue.500', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)' }} // Sombra mais suave ao passar o mouse
    >
      <Box
        h="150px"
        bg="gray.100"
        mb="4"
        borderRadius="md"
        backgroundImage={`url(${project.thumbnail})`}
        backgroundSize="cover"
        backgroundPosition="center"
      />
      <Heading size="sm" mb="2" color="gray.800">{project.name}</Heading>
      <Text fontSize="xs" color="gray.600">Editado em {project.lastEdited}</Text>
      <Button
        leftIcon={<EditIcon />}
        size="sm"
        mt="4"
        colorScheme="teal"
        onClick={() => router.push(`/project/${project.id}`)}
      >
        Editar
      </Button>
    </Box>
  );
};

export default function Dashboard() {
  const router = useRouter();

  // Lista de projetos mockada (substituir pelo Firestore futuramente)
  const projects = [
    { id: 1, name: 'Projeto 1', lastEdited: '12/01/2025', thumbnail: 'https://i.imgur.com/SfoJNOR.jpeg' },
    { id: 2, name: 'Projeto 2', lastEdited: '10/01/2025', thumbnail: 'https://i.imgur.com/SfoJNOR.jpeg' },
    { id: 3, name: 'Projeto 3', lastEdited: '08/01/2025', thumbnail: 'https://i.imgur.com/SfoJNOR.jpeg' },
  ];

  return (
    <Flex direction="column" h="100vh" bg="gray.50" color="gray.800">
      {/* Header */}
      <Flex
        bg="blue.900"
        color="white"
        justify="space-between"
        align="center"
        px="6"
        py="4"
      >
        <Heading size="lg">Nexo</Heading>
        <Flex align="center">
          <Text ml="2" color="white">Pedro Carlo</Text>
        </Flex>
      </Flex>

      {/* Conteúdo */}
      <Flex direction="column" p="6">
        <Flex wrap="wrap">
          {/* Botão para criar novo projeto */}
          <Box
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p="4"
            w="250px"
            h="200px"
            m="2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" // Sombra suave
            _hover={{ cursor: 'pointer', borderColor: 'blue.500', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)' }} // Sombra mais suave ao passar o mouse
            onClick={() => router.push('/create-project')}
          >
            <AddIcon boxSize={8} color="teal.500" />
            <Text mt="4" color="gray.800">Novo Projeto</Text>
          </Box>

          {/* Renderizar lista de projetos */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
