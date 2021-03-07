import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import Layout from '../components/Layout'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import { theme as themeUi } from '../theme'
import 'react-datepicker/dist/react-datepicker.css'

const theme = extendTheme({
  colors: {
    primary: '#24272D',
    secondary: '#DD6031',
  },
  components: {
    FormLabel: {
      baseStyle: {
        color: 'white',
      },
    },
    Input: {
      baseStyle: {
        field: {
          color: 'white',
        },
      },
    },
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App(props: AppProps) {
  const { pageProps, Component } = props
  if (typeof window !== 'undefined') {
    console.log('theme', theme)
  }
  return (
    <ThemeProvider theme={themeUi}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  )
}
