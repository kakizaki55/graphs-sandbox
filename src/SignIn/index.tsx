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
    if (displayLogo) {
      return (<div />);
    } else {
      return (<Header logoWidth={logoWidth} />);
    }
  };
  
  const signInFooterComponent = () => (
    <SignInFooter logoSetAside={displayLogo} />
    );
    
    const singInHeaderComponent = () => (
      <SignInHeader logoSetAside={displayLogo} />
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


      const [containerWidth, setContainerWidth] = useState('40vw');
      const [logoWidth, setLogoWidth] = useState('36vw');
      const [displayLogo, setDisplayLogo] = useState(true);
      const [mobileCondition, setMobileCondition] = useState(false);
      
  const handleMiddle = (e:any) => {
    if (e.matches) {
      setContainerWidth('40vw');
      setLogoWidth('36vw');
    } else {
      setContainerWidth('80vw');
      setLogoWidth('75vw');
    }
  };

  const handleDeskTop = (e:any) => {
    if (e.matches) {
      setDisplayLogo(true);
    } else {
      setDisplayLogo(false);
    }
  };

  const handleMobile = (e: any) => {
    if (e.matches) {
      setMobileCondition(true);
    } else {
      setMobileCondition(false);
    }
  };
    
  
  
  useEffect(() => {
    if(window.innerWidth < 500){
      setMobileCondition(true)
      setContainerWidth('80vw');
      setLogoWidth('75vw');
      setDisplayLogo(false)
    }

    if(window.innerWidth > 500 && window.innerWidth < 1280){
      setMobileCondition(false)
      setContainerWidth('80vw');
      setLogoWidth('75vw');
      setDisplayLogo(false)
    }

    if(window.innerWidth > 1280){
      setMobileCondition(false)
      setContainerWidth('80vw');
      setLogoWidth('75vw');
      setDisplayLogo(true)
    }

    console.log('window.width', window.innerWidth, {
    containerWidth, 
    logoWidth,
    displayLogo,
    mobileCondition})

    window.matchMedia('(max-width: 500px)').addEventListener('change', handleMobile);
    window.matchMedia('(min-width: 900px)').addEventListener('change', handleMiddle);
    window.matchMedia('(min-width: 1280px)').addEventListener('change', handleDeskTop);

  }, [containerWidth, displayLogo, logoWidth, mobileCondition]);

  return (
    <AmplifyProvider theme={theme}>
      <Grid
        backgroundImage={`url(${myPicURLS[randomPicNumber]}`}
        display='grid'
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
          display={displayLogo ? 'block' : 'none'}
          style={{
            paddingTop: '3rem',
          }}
          columnStart="1"
          columnEnd="3"
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
            // hideSignUp
          />
        </Grid>
      </Grid>
    </AmplifyProvider>
  );
});

export default CustomSignIn;
