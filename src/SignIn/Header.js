import {
  Grid,
} from '@aws-amplify/ui-react';
import React from 'react';

// replace with ui-common
import TailosLogo from './TAILOS_Full_Color';

const Header = (props) => {
  const {
    logoWidth,
  } = props;

  return (
    <Grid
      padding='1rem'
    >
      <TailosLogo logoWidth={logoWidth} />
    </Grid>
  );
};

export default Header;
