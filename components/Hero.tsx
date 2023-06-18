import { createStyles, Overlay, Container, Title, Button, Text, BackgroundImage, useMantineTheme, Flex } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation'

const useStyles = createStyles((theme) => ({
  container: {
    height: 600,
    [theme.fn.largerThan('md')]: {
      height: 800,
    },
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();
  const theme = useMantineTheme()

  return (
    <BackgroundImage 
      className="relative" 
      src="/bg.jpg"
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .75) 70%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={`relative flex-col justify-center items-start z-10 ${classes.container}`} fluid>
        <Flex align="center" className='h-full'>
          <TypeAnimation
            sequence={["Adithya Chandrasekar"]}
            wrapper="span"
            speed={50}
            repeat={1}
            className="text-white text-4xl md:text-6xl font-black"
          />
        </Flex>
        
      </Container>
    </BackgroundImage>
  );
}