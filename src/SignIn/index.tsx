/* eslint-disable react/jsx-no-constructed-context-values */
import '@aws-amplify/ui-react/styles.css';
import './styles.css';

import {
  AmplifyProvider,
  Authenticator,
  Flex,
  Grid,
  Theme,
  useTheme,
} from '@aws-amplify/ui-react';
import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import SignInFooter from './SignInFooter.js';
import SignInHeader from './SignInHeader.js';
// replace with ui-common
import TailosLogo from './TAILOS_Full_Color_White';

const CustomSignIn = React.memo(() => {
  const { tokens } = useTheme();
  const [containerWidth, setContainerWidth] = useState('35vw');
  const [logoWidth, setLogoWidth] = useState('32vw');
  const [logoSetAside, setLogoPosition] = useState(true);
  const [mobileCondition, setMobileCondition] = useState(false);

  // TODO create evn variable for assets
  const myPicURLS = useMemo(() => [
    `${process.env.GLOBAL_ASSETS_URL}/architecture1.jpg`,
    `${process.env.GLOBAL_ASSETS_URL}/architecture2.jpg`,
    `${process.env.GLOBAL_ASSETS_URL}/architecture3.jpg`,
    `${process.env.GLOBAL_ASSETS_URL}/architecture4.jpg`,
    `${process.env.GLOBAL_ASSETS_URL}/light.jpg`,
    `${process.env.GLOBAL_ASSETS_URL}/servers.jpg`,
  ], []);

  const randomPicNumber = useMemo(() => Math.floor(Math.random() * myPicURLS.length), [myPicURLS]);

  const headerComponent = () => {
    if (logoSetAside) {
      return (<div />);
    } else {
      return (<Header logoWidth={logoWidth} />);
    }
  };

  const signInFooterComponent = () => (
    <SignInFooter logoSetAside={logoSetAside} />
  );

  const singInHeaderComponent = () => (
    <SignInHeader logoSetAside={logoSetAside} />
  );

  const components = {
    // eslint-disable-next-line react/no-unstable-nested-components
    Header: headerComponent,
    SignIn: {
      Header: singInHeaderComponent,
      Footer: signInFooterComponent,
    },
    Footer,
  };

  const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter Your Email',
        isRequired: true,
        label: 'Email:',
      },
      password: {
        placeholder: 'Enter Your Password',
        isRequired: true,
        label: 'Password:',
      },
    },
  };

  const theme: Theme = {
    name: 'my-theme',
    tokens: {
      colors: {
        background: {
          primary: {
            value: '#040041',
          },
          secondary: {
            value: '#F3F6F9',
          },
        },
      },
      components: {
        button: {
          primary: {
            backgroundColor: {
              value: '#16c5c8',
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    const handler = (e:any) => {
      if (e.matches) {
        setContainerWidth('35vw');
        setLogoWidth('32vw');
      } else {
        setContainerWidth('80vw');
        setLogoWidth('75vw');
      }
    };

    const hanldleLogoPosition = (e:any) => {
      if (e.matches) {
        setLogoPosition(true);
      } else {
        setLogoPosition(false);
      }
    };

    const handleMobile = (e) => {
      if (e.matches) {
        setMobileCondition(true);
      } else {
        setMobileCondition(false);
      }
    };

    window.matchMedia('(max-width: 500px)').addEventListener('change', handleMobile);
    window.matchMedia('(min-width: 900px)').addEventListener('change', handler);
    window.matchMedia('(min-width: 1280px)').addEventListener('change', hanldleLogoPosition);
  }, []);

  return (
    <AmplifyProvider theme={theme}>

      <Grid
        backgroundImage={`url(${myPicURLS[randomPicNumber]}`}
        display={logoSetAside ? 'flex' : 'grid'}
        justifyContent='center'
        height='100vh'
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Flex
          justifyContent="center"
          textAlign='center'
          margin='auto'
          display={logoSetAside ? 'block' : 'none'}
          style={{
            paddingTop: '3rem',
          }}
        >
          <TailosLogo logoWidth={logoWidth} />
        </Flex>
        <Grid
          backgroundColor={tokens.colors.background.secondary}
          display='flex'
          justifyContent='center'
          width={mobileCondition ? '100vw' : containerWidth}
          height={mobileCondition ? '100vh' : '75vh'}
          borderRadius='4px'
          margin='auto'
          overflow='auto'
        >
          <Authenticator
            components={components}
            formFields={formFields}
            hideSignUp
          />
        </Grid>
      </Grid>
    </AmplifyProvider>
  );
});

export default CustomSignIn;
