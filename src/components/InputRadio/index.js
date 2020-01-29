import React from "react"

const InputRadio = (props) => {
  const { checked, name, value, onChange, label } = props
  return (
    <label className="flex items-center mb-10 md:mb-0">
      <input checked={checked} name={name} type="radio" value={value} onChange={onChange} />
      <span className="block ml-5 mr-10">{label}</span>
    </label>
  )
}

export default InputRadio
