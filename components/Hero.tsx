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
  const darkBG = 'https://lh3.googleusercontent.com/LNJVm2dmmToLHXqlo0zF5xcV4ErZD-s_lUHoi-_J8HyhaMycaJeRgTUdrMH1D9IFLJNsH4qW9nJxwchdX7H6btavqIHIdJY-o2kfzz5-H-F6XkfTGl-lJJ4hijGCoPkmf9K8krS06pQ=w2400'

  return (
    <BackgroundImage 
      className="relative" 
      src="/bg.jpg"
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 70%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={`relative flex-col justify-center items-start z-10 pl-10 pt-72 ${classes.container}`} fluid>
        <Title className="text-white text-4xl md:text-6xl font-black">Adithya Chandrasekar</Title>
      </Container>
    </BackgroundImage>
  );
}