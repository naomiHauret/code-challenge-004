import React from "react"

const Repository = (props) => {
  const { data } = props

  return (
    <div className="flex flex-col border-solid border-1.5 border-gray_200 rounded-4 h-full px-10 py-20">
      <header className="flex flex-wrap items-center justify-between mb-20">
        <h3 className="text-18 tracking-wide">{data.name}</h3>
        <div className="flex flex-col sm:flex-row text-gray_300">
          <span className={`block sm:mr-10 ${data.forkCount > 0 ? "text-gray_200" : ""}`}>
            <svg
              className="h-15 mr-5"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://hww.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
              ></path>
            </svg>
            <span className={`${data.forkCount > 0 ? "text-gray_100" : ""}`}>{data.forkCount}</span>{" "}
            <span className="sr-only">forks</span>
          </span>
          <span className={`${data.stars > 0 ? "text-yellow_000" : ""}`}>
            <svg
              className="h-15 mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            <span className={`${data.stars > 0 ? "text-white_000" : ""}`}>{data.stars}</span>{" "}
            <span className="sr-only">stars</span>
          </span>
        </div>
      </header>
      <p
        className={`leading-normal text-14 mb-15 ${
          data.description ? "text-gray_100" : "text-gray_300 my-auto italic text-center"
        }`}
      >
        {data.description ? data.description : "No description provided"}
      </p>
      <aside className="mt-auto text-12 italic text-gray_200">
        <ul className="flex">
          {data.languages.map((language, i) => (
            <li key={i} className={i < data.languages.length - 1 ? "mr-10" : ""}>
              {language}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Repository
