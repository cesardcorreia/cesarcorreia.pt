/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-50 border-8 border-blue-500 w-screen h-full xl:h-screen px-4 py-10">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <StaticImage
            src="../images/me.jpeg"
            formats={["auto", "webp", "avif"]}
            alt="Correia. Cesar Correia"
            className="!rounded-full w-40 shadow-lg"
          />
          <h2 className="text-4xl font-semibold text-blue-500">césar c.</h2>
          <div class="flex gap-4 text-gray-600">
            <Link className="transition hover:gray-800" to="/uses">uses</Link>
            <Link className="transition hover:gray-800" to="/">about</Link>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Layout
