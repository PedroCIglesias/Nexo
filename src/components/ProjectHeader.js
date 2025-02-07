'use client';

import { Flex, Heading, Input, IconButton, Text, Spacer, Box } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function ProjectHeader() {
  const [isEditing, setIsEditing] = useState(false);
  const [projectName, setProjectName] = useState('Nome do Projeto');

  return (
    <Flex
      bg="white"
      p="4"
      boxShadow="md"
      align="center"
      borderBottom="1px solid #E2E8F0"
    >
      {/* Nome do Projeto (Editável) */}
      <Flex align="center">
        {isEditing ? (
          <Input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        ) : (
          <Heading size="md" onClick={() => setIsEditing(true)} cursor="pointer">
            {projectName} <EditIcon ml="2" />
          </Heading>
        )}
      </Flex>

      <Spacer />

      {/* Datas do Projeto */}
      <Flex gap="4">
        <Box>
          <Text fontSize="sm">Início do Projeto</Text>
          <Input placeholder="Placeholder" size="sm" />
        </Box>
        <Box>
          <Text fontSize="sm">Final do Projeto</Text>
          <Input placeholder="Placeholder" size="sm" />
        </Box>
      </Flex>

      <Spacer />

      {/* Ícone de Usuários e Ações */}
      <Flex gap="4">
        <Text fontSize="lg">👤+2</Text>
        <Text fontSize="sm" cursor="pointer">Início</Text>
        <Text fontSize="sm" cursor="pointer">Compartilhar</Text>
        <Text fontSize="sm" cursor="pointer">Duplicar</Text>
        <Text fontSize="sm" cursor="pointer">Excluir</Text>
      </Flex>
    </Flex>
  );
}
