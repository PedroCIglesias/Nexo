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