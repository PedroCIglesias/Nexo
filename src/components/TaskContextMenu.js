'use client';

import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

export default function TaskContextMenu() {
  return (
    <Menu>
      <MenuButton as={Button} size="sm">⋮</MenuButton>
      <MenuList>
        <MenuItem>Editar</MenuItem>
        <MenuItem>Compartilhar</MenuItem>
        <MenuItem>Duplicar</MenuItem>
        <MenuItem>Excluir</MenuItem>
      </MenuList>
    </Menu>
  );
}
