import { Button } from '@chakra-ui/react';

const ExampleButton = () => {
  return (
    <Button
      bg="var(--button-color)"
      color="white"
      _hover={{ bg: 'var(--button-color)', opacity: 0.8 }}
    >
      Clique Aqui
    </Button>
  );
};

export default ExampleButton;
