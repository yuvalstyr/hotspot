if (process.env.NODE_ENV === "development") require("nexus").default.reset()

const nexusServer = require("nexus").default

require("../../graphql/schema")

nexusServer.assemble()

export default nexusServer.server.handlers.graphql
