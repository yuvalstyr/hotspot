import * as React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { UserProvider } from '@auth0/nextjs-auth0'

const theme = extendTheme({
   colors: {
      primary: '#24272D',
      hover: '#DD6031',
      secondary: '#EE00FF',
      card: '#3C4042'
   },
   components: {
      FormLabel: {
         baseStyle: {
            color: 'white'
         }
      },
      Input: {
         baseStyle: {
            field: {
               color: 'white'
            }
         }
      }
   }
})

export default function App({
   pageProps,
   Component
}: AppProps): React.ReactElement<AppProps> {
   if (typeof window !== 'undefined') {
      console.log('theme', theme)
   }
   return (
      <ChakraProvider theme={theme}>
         <CSSReset />
         <UserProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </UserProvider>
      </ChakraProvider>
   )
}
