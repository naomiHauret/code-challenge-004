import React from "react"
import InputRadio from "components/InputRadio"
const BarSort = (props) => {
  const { sortField, sortOrder, setSortField, setSortOrder, SORT_OPTIONS } = props
  return (
    <form className="flex justify-between md:items-center">
      <fieldset className="p-0 m-0 border-0 md:flex">
        {SORT_OPTIONS.fields.map((field, i) => (
          <InputRadio
            key={i}
            label={field.label}
            checked={sortField === field.value}
            name="sortOption"
            type="radio"
            value={field.value}
            onChange={() => setSortField(field.value)}
          />
        ))}
      </fieldset>
      <fieldset className="p-0 m-0 border-0 md:flex ">
        {SORT_OPTIONS.orders.map((order, i) => (
          <InputRadio
            key={i}
            label={order.label}
            checked={sortOrder === order.value}
            name="sortOrder"
            type="radio"
            value={order.value}
            onChange={() => setSortOrder(order.value)}
          />
        ))}
      </fieldset>
    </form>
  )
}

export default BarSort
