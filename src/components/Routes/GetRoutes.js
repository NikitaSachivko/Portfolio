import { useStaticQuery, graphql } from "gatsby"

const GetRoutes = () => {
  const result = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "routes"}}) {
        edges {
          node {
            relativePath
            prettySize
            extension
            birthTime
          }
        }
      }
    }
  `)
  const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1, str.length + 1)
  }
  const nodes = result.allFile.edges
  const routes = nodes.map((node) => {
    const title = node.node.relativePath.replace(/\-/g, ' ').split("/")[0].trim()
    const link = "/" + node.node.relativePath.split("/")[0].trim() + "/"
    const newRoute = { title: capitalize(title), link: link }
    return newRoute
  })
  return routes
}

export default GetRoutes
