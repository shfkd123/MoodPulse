import { Flex, Box } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      justifyContent="space-around"
      h="80px"
      backgroundColor="yellow"
      fontSize="2xl"
    >
      <Box>Logo</Box>
      <Box />
      <Box>회원가입</Box>
    </Flex>
  );
};

export default Nav;
