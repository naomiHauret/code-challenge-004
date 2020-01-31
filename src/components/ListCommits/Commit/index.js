import React from "react"
import { formatDatetime } from "utils/datetime"

const Commit = (props) => {
  const { data } = props

  return (
    <div className="flex flex-col border-solid border-1.5 border-gray_200 rounded-4 h-full">
      <div className="flex flex-wrap justify-between align-center px-10 pt-10 pb-5">
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full mr-10">
            <img
              alt={`${data.author.name} Github avatar`}
              src={data.author.avatarUrl}
              className="overflow-hidden w-full h-full object-cover"
            />
          </div>
          <span className="text-14 text-gray_100">{data.author.name}</span>
        </div>
        <span className="text-12 text-gray_200">{formatDatetime(data.committedDate)}</span>
      </div>

      <div className="px-10 pt-10 pb-20 font-bold">{data.messageHeadline}</div>
    </div>
  )
}

export default Commit
