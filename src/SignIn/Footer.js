import { Flex, Text, useTheme } from '@aws-amplify/ui-react';
import React from 'react';

const Footer = () => {
  const { tokens } = useTheme();

  return (
    <Flex
      textAlign='center'
      padding={tokens.space.medium}
    >
      <Text>&copy; All Rights Reserved</Text>
    </Flex>
  );
};

export default Footer;
