"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function ProjectPage() {
  const params = useParams(); // Obtendo o ID do projeto pela URL
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!params?.id) return;

    // Simulando busca do projeto
    const mockProject = {
      id: params.id,
      name: `Projeto ${params.id}`,
      lastEdited: "12/01/2025",
      description: "Este é um projeto de exemplo.",
    };
    setProject(mockProject);
  }, [params]);

  if (!project) return <Text>Carregando...</Text>;

  return (
    <Box p={6}>
      <Heading mb={4}>{project.name}</Heading>
      <Text fontSize="md" mb={4}>{project.description}</Text>
      <Text fontSize="sm" color="gray.500">Última edição: {project.lastEdited}</Text>

      <Button mt={6} colorScheme="teal" onClick={() => router.push("/dashboard")}>
        Voltar para Dashboard
      </Button>
    </Box>
  );
}
