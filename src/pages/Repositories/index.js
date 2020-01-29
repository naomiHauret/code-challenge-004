import React, { useContext, Fragment } from "react"
import { GithubRepositoriesContext, MAX_TO_SHOW } from "contexts/GithubRepositories"
import ListRepositories from "components/ListRepositories"
import Container from "components/Container"
import BarSort from "./BarSort"
import BarSearch from "./BarSearch"

const Repositories = (props) => {
  const {
    loading,
    error,
    repositories,
    fetchMore,
    user,
    setUser,
    totalRepositories,
    canShowMore,
    sortField,
    sortOrder,
    setSortField,
    setSortOrder,
    SORT_OPTIONS,
  } = useContext(GithubRepositoriesContext)

  return (
    <div className="relative pb-40">
      <div className="bg-black_000 border-b border-gray_300 border-solid fixed w-full top-0 left-0">
        <Container contained={true} staticStyles="flex flex-col md:flex-row md:flex-wrap items-center justify-between">
          <BarSearch repositories={repositories} user={user} setUser={setUser} totalRepositories={totalRepositories} />
        </Container>
        <Container contained={true} staticStyles="mb-10 mt-5">
          <BarSort
            sortField={sortField}
            sortOrder={sortOrder}
            setSortField={setSortField}
            setSortOrder={setSortOrder}
            SORT_OPTIONS={SORT_OPTIONS}
          />
        </Container>
      </div>
      <Container contained={true} staticStyles="pt-350 md:pt-200">
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
