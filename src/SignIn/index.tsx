/* eslint-disable react/jsx-no-constructed-context-values */
import '@aws-amplify/ui-react/styles.css';
import './styles.css';

import {
  AmplifyProvider,
  Authenticator,
  Flex,
  Grid,
  Theme,
  useBreakpointValue,
  useTheme,
} from '@aws-amplify/ui-react';
import React, {
  useMemo,
} from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import SignInFooter from './SignInFooter.js';
import SignInHeader from './SignInHeader.js';
// replace with ui-common
import TailosLogo from './TAILOS_Full_Color_White';


const CustomSignIn = React.memo(() => {
  interface BreakPoints {
    mobileCondition: boolean
    displayLogo: boolean
    containerWidth: string 
    logoWidth: string
  }
  
  const breakPointOptions  = useBreakpointValue<BreakPoints>({
    base: {
      mobileCondition: true,
      displayLogo: false,
      containerWidth: '80vw', 
      logoWidth: '75vw'
    }, 
    small: {
      mobileCondition: false,
      displayLogo: false,
      containerWidth: '80vw', 
      logoWidth: '75vw'
    }, 
    large: {
      mobileCondition: false,
      displayLogo: false,
      containerWidth: '35vw', 
      logoWidth: '32vw'
    }, 
    xl: {
      mobileCondition: false,
      displayLogo: true,
      containerWidth: '35vw', 
      logoWidth: '32vw'
    }, 
  })
  
  const { mobileCondition, displayLogo, containerWidth, logoWidth } = breakPointOptions as BreakPoints
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

      
            // const MOBILE_BREAKPOINT = (mediaHook) => mediaHook("(max-width:500px)");
            // const MOBILE_BREAKPOINT_LARGE = (mediaHook) => mediaHook("(min-width:500px)");
            // const DESKTOP_BREAKPOINT = (mediaHook) => mediaHook("(min-width:950px)");
            // const DESKTOP_BREAKPOINT_LARGE = (mediaHook) => mediaHook("(min-width:1280px)");
      
            // const mobileBreakPointMatch = MOBILE_BREAKPOINT(useMediaQuery)
            // const mobileBreakPointMatchLarge = MOBILE_BREAKPOINT_LARGE(useMediaQuery)
            // const deskTopBreakPointMatch = DESKTOP_BREAKPOINT(useMediaQuery)
            // const deskTopBreakPointMatchLarge = DESKTOP_BREAKPOINT_LARGE(useMediaQuery)



      // const [mobileCondition, setMobileCondition] = useState(false);
      // const [displayLogo, setDisplayLogo] = useState(true);
      // const [containerWidth, setContainerWidth] = useState('35vw');
      // const [logoWidth, setLogoWidth] = useState('32vw');
      
      
    // const setResponsiveState = (mobile: boolean, logo: boolean, containerVh: '80vw' | '35vw' , LogoVh: '75vw' | '32vw') => {
    //     setMobileCondition(mobile)
    //     setDisplayLogo(logo)
    //     setContainerWidth(containerVh);
    //     setLogoWidth(LogoVh);
    // }
      
  //   useEffect(() => {
  //   // if(window.innerWidth < 500){
  //   //   setResponsiveState(true, false, '80vw', '75vw')
  //   // }
    
  //   // if(window.innerWidth > 500 && window.innerWidth < 950){
  //   //   setResponsiveState(false, false, '80vw', '75vw')
  //   // }
    
  //   // if(window.innerWidth > 950 && window.innerWidth < 1280){
  //   //   setResponsiveState(false, false, '35vw', '32vw')
  //   // }
    
  //   // if(window.innerWidth > 1280){
  //   //   setResponsiveState(false, true, '35vw', '32vw')
  //   // }

    
  // }, []);
  
  console.log('inside component')

  return (
    <AmplifyProvider theme={theme}>
      <Grid
        backgroundImage={`url(${myPicURLS[randomPicNumber]}`}
        display={displayLogo ? 'flex' : 'grid'}
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
