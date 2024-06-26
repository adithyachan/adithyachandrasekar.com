import { createStyles, Overlay, Container, Title, Button, Text, BackgroundImage, useMantineTheme, Flex, ActionIcon, Center } from '@mantine/core';
import { useWindowScroll, useScrollIntoView } from '@mantine/hooks';
import { TypeAnimation } from 'react-type-animation'
import { IconChevronDown } from '@tabler/icons';

import { motion } from 'framer-motion'

export default function Hero(props: { scroll: any }) {
  const theme = useMantineTheme()
  const [scroll, scrollTo] = useWindowScroll();
  

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
      <Container className={`relative flex-col justify-center items-start z-10 h-screen`} fluid>
        <Flex className='flex-col h-full justify-between'>
          <span></span>
          <TypeAnimation
            sequence={["Hi,", 700, "Hi, I'm Adithya."]}
            wrapper="span"
            speed={50}
            repeat={0}
            className="text-white text-4xl md:text-6xl font-black"
          />
          <motion.div
            animate={{y: [null, 0]}}
            whileHover={{
              y: [null, -10]
            }}
          >
            <Center className={`self-center flex-col ${scroll.y > 150 ? "opacity-0" : ""}`} >
              <Title size="lg" color='white'>Let's get started</Title>
              <ActionIcon variant='transparent' color="gray" onClick={() => props.scroll()} disabled={scroll.y > 150} size="xl" mb="xl">
                <IconChevronDown size={48} />
              </ActionIcon>
            </Center>
          </motion.div>
        </Flex>
      </Container>
    </BackgroundImage>
  );
}