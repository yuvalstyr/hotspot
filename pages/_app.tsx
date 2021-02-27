import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import Layout from '../components/Layout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme as themeUi } from '../theme'
import 'react-datepicker/dist/react-datepicker.css'

import '../styles.css'
const theme = extendTheme({
  colors: {
    primary: '#24272D',
    secondary: '#DD6031',
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App(props: AppProps) {
  const { pageProps, Component } = props

  // console.log('theme', theme)

  return (
    <ThemeProvider theme={themeUi}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  )
}
