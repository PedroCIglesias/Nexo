'use client';
import { Box, Heading, Button, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

const ProjectCard = ({ project }) => {
  const router = useRouter();

  return (
    <Box
      border="1px solid"
      borderColor="var(--card-border-color)" // Cor da borda ajustada
      borderRadius="md"
      p="4"
      w="250px"
      h="300px" // Altura do card para organizar melhor os elementos
      m="2"
      bg="var(--card-background)" // Fundo do cartão
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      display="flex"
      flexDirection="column" // Organizando os elementos verticalmente
      justifyContent="space-between" // Espaço entre elementos
      _hover={{ cursor: 'pointer', borderColor: 'blue.500', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)' }}
    >
      {/* Miniatura do projeto */}
      <Box
        h="150px"
        w="100%"
        bg="gray.100"
        borderRadius="md"
        backgroundImage={`url(${project.thumbnail})`}
        backgroundSize="cover"
        backgroundPosition="center"
      />
      {/* Nome do projeto */}
      <Heading
        size="md" // Aumentei o tamanho da fonte
        mb="-2" // Reduzi a margem inferior
        color="gray.800"
        textAlign="left"
        w="100%"
      >
        {project.name}
      </Heading>
      {/* Texto de última edição */}
      <Text
        fontSize="sm" // Aumentei o tamanho da fonte
        color="var(--card-edited-text)"
        fontFamily="body"
        textAlign="left"
        w="100%"
      >
        Editado em {project.lastEdited}
      </Text>
      {/* Botão Editar */}
      <Box display="flex" justifyContent="center" w="100%">
        <Button
          leftIcon={<EditIcon />}
          size="md"
          width="40%" // Botão mais largo
          mt="auto"
          color="white"
          backgroundColor="var(--button-color)" // Cor do botão
          _hover={{ backgroundColor: '#4DC4B4' }} // Cor ao passar o mouse
          onClick={() => router.push(`/project/${project.id}`)}
        >
          Editar
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;
