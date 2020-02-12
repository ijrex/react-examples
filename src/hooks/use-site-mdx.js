import { useStaticQuery, graphql } from "gatsby"

export const useSiteMDX = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query useSiteMDX {
        allMdx {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                category
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return allMdx.edges
}
