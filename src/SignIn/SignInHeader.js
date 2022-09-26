import { Heading } from '@aws-amplify/ui-react';
import React from 'react';

const SignInHeader = (props) => {
  const {
    logoSetAside,
  } = props;

  return (
    <Heading
      level={3}
      padding={logoSetAside ? '2rem 2rem 0rem 0rem' : '2rem 2rem 0rem 1rem'}
    >
      Sign in
    </Heading>
  );
};

export default SignInHeader;
