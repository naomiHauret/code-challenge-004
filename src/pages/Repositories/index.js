import React, { useContext, Fragment } from "react"
import { GithubRepositoriesContext, MAX_TO_SHOW } from "contexts/GithubRepositories"
import ListRepositories from "components/ListRepositories"
import Container from "components/Container"

const Repositories = (props) => {
  const { loading, error, repositories, fetchMore, user, setUser, totalRepositories, canShowMore } = useContext(
    GithubRepositoriesContext,
  )

  return (
    <div className="relative pb-40">
      <div className="bg-black_000 border-b border-gray_300 border-solid fixed w-full top-0 left-0">
        <Container contained={true} staticStyles="flex flex-col md:flex-row md:flex-wrap items-center justify-between">
          <label className="mb-30 mt-20 ">
            <span className="font-bold text-20 text-gray_200">Repositories of</span>
            <input
              className="font-bold opacity-75 focus:opacity-100 hover:opacity-100 text-20 mt-10 sm:mt-0 sm:ml-10 py-10 pl-10 pr-15 rounded-full bg-gray_300 border-4 border-solid border-gray_200 text-green_000"
              type="text"
              value={user}
              onChange={(e) => setUser(e.currentTarget.value)}
            />
          </label>
          {totalRepositories > 0 && (
            <div>
              <span className={`py-5 px-20 rounded-full text-gray_200 font-12 bg-gray_300`}>
                {repositories.length}/{totalRepositories} displayed
              </span>
            </div>
          )}
        </Container>
      </div>
      <Container contained={true} staticStyles="pt-200">
        <ListRepositories data={repositories} />

        <div className={`${totalRepositories > 0 ? "mt-40" : ""} flex justify-center`}>
          {canShowMore && !loading ? (
            <button
              onClick={fetchMore}
              className="cursor-pointer ml-20 py-10 px-30 text-18 font-bold py-5 px-20 rounded-full text-black_000 border-0 bg-yellow_000"
            >
              Display more
            </button>
          ) : totalRepositories > 0 ? (
            <div className="italic text-gray_200 text-center">End of results</div>
          ) : (
            <div className="italic text-gray_200 text-center">No repositories</div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Repositories
