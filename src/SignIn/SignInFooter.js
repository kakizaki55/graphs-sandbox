import {
  Button,
  Flex,
  useAuthenticator,
} from '@aws-amplify/ui-react';
import React from 'react';

const SignInFooter = (props) => {
  const { toResetPassword } = useAuthenticator();
  const {
    logoSetAside,
  } = props;

  return (
    <Flex>
      <Button
        isFullWidth
        variation="link"
        onClick={toResetPassword}
        ariaLabel="Reset password"
        style={{
          color: '#16c5c8',
          // borderStyle: 'none',
          // backgroundColor: 'transparent',
          // width: '100%',
          // fontSize: 'medium',
        }}
      >
        Reset password
      </Button>
    </Flex>
  );
};

export default SignInFooter;
