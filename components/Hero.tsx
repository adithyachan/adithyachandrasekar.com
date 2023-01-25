import { createStyles, Overlay, Container, Title, Button, Text, BackgroundImage, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: 600,
    [theme.fn.largerThan('md')]: {
      height: 700,
    },
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();
  const theme = useMantineTheme()
  const darkBG = 'https://lh3.googleusercontent.com/pw/AMWts8Cvoz9UjrBHGA9PWXtWx0uz-dsd2SJhQseSJXf0LLX44lUGcfr-7USzsOEf7reZEWpVUlRyg-V916A0zjTUoHEGkbF8E_fUnvQNE70cTPfapj8vqLbIBE3jZpITJHlsUbSSZjw64BiR4JvCyrtxQC6wmw=w2056-h1398-no?authuser=0'

  return (
    <BackgroundImage 
      className="relative" 
      src={darkBG}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={`relative flex-col justify-center items-start z-10 pl-10 pt-72 ${classes.container}`} fluid>
        <Title className="text-white text-4xl md:text-6xl font-black">Adithya Chandrasekar</Title>
        <Text className="text-white max-w-full text-sm md:max-w-xl md:text-lg" size="xl" mt="xl">
          Student, Developer, Leader
        </Text>
      </Container>
    </BackgroundImage>
  );
}