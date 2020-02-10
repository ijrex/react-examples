import PropTypes from "prop-types"
import React from "react"

const SideBar = ({ children }) => <div>{children}</div>

SideBar.propTypes = {
  siteTitle: PropTypes.string,
}

SideBar.defaultProps = {
  siteTitle: ``,
}

export default SideBar
