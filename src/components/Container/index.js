import React, { memo } from "react"

const Container = memo(({ contained, children, staticStyles, ...props }) => {
  return (
    <div
      className={`mx-auto w-full ${
        contained === true ? "px-30 lg:px-0 md:max-w-md lg:max-w-lg xl:max-w-xl" : ""
      } ${staticStyles && staticStyles}`}
    >
      {children}
    </div>
  )
})

export default Container
