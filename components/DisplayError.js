// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

/** @jsx jsx */

const Error = ({ error }) => {
  return (
    <div
      sx={{
        padding: "2rem",
        direction: "ltr",
        background: "white",
        margin: "2rem 0",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        borderLeft: " 5px solid red",
        color: "gray",
        p: {
          margin: 0,
          fontWeight: 100,
        },
        strong: {
          marginRight: "1rem",
          color: "error",
        },
      }}
    >
      <p data-testid="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </div>
  )
}

const DisplayError = ({ error }) => {
  console.log("error", JSON.stringify(error, null, 2))
  if (!error || !error.message) return null
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <Error error={error} key={i} />
    ))
  }
  return <Error error={error} />
}

DisplayError.defaultProps = {
  error: {},
}

DisplayError.propTypes = {
  error: PropTypes.object,
}

export default DisplayError
