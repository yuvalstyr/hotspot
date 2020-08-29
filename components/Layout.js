// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx, Image, Flex } from "theme-ui"
import { Nav } from "../components/Nav"

/** @jsx jsx */

export const Layout = ({ props }) => {
  const { Component, pageProps } = props
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header
        sx={{
          width: "100%",
        }}
      >
        <Flex
          sx={{
            justifyContent: "space-between",
            backgroundColor: "secondary",
          }}
        >
          <Nav />
          <Image src={"/logo.jpg"} variant="logo" />
        </Flex>
      </header>
      <main
        sx={{
          width: "100%",
          paddingTop: "10px",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Component {...pageProps} />
      </main>
      <footer
        sx={{
          width: "100%",
        }}
      ></footer>
    </div>
  )
}
