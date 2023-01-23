import { createStyles, Overlay, Container, Title, Button, Text, BackgroundImage, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: 400,
    [theme.fn.largerThan('md')]: {
      height: 600,
    },
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();
  const theme = useMantineTheme()
  const darkBG = 'https://images.unsplash.com/photo-1565700430899-1c56a5cf64e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
  const lightBG = 'https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

  return (
    <BackgroundImage 
      className="relative" 
      src={theme.colorScheme === 'dark' ? darkBG : lightBG}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={`relative flex-col justify-center items-start z-10 pl-10 pt-40 md:pt-64 ${classes.container}`} fluid>
        <Title className="text-white text-4xl sm:text-6xl font-black">Adithya Chandrasekar</Title>
        <Text className="text-white max-w-full text-sm sm:max-w-xl sm:text-lg" size="xl" mt="xl">
          College Student, Software Developer, Technical Leader
        </Text>
      </Container>
    </BackgroundImage>
  );
}