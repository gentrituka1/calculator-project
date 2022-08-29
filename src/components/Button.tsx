import React from 'react'

type Props = {
    value: (string | number)[];
}

function getStyleName(btn: HTMLButtonElement){
    const className = {
        "=": "equals",
        "x": "opt",
        "-": "opt",
        "+": "opt",
        "/": "opt",
    }
    return className[btn]
}

export default function Button({ value }: Props) {
  return (
    <button className={`${getStyleName(value)} button`}>{value}</button>
  )
}
