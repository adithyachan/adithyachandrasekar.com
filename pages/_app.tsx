import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

// pages/_app.js
import { EB_Garamond } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const font = EB_Garamond({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    )
}

export default MyApp
