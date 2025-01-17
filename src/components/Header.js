import { Flex, Heading, Text } from '@chakra-ui/react';

const Header = ({ userName }) => {
  return (
    <Flex
      bg="var(--header-background)"
      color="white"
      justify="space-between"
      align="center"
      px="6"
      py="4"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <Heading size="lg">Nexo</Heading>
      <Flex align="center">
        <Text ml="2">{userName}</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
    