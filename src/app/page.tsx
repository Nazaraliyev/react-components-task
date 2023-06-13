"use client"

import Dropdown from "./compoents/Dropdown/Dropdown"
import { useState } from "react"
import styles from "./page.module.css"

export default function Home() {
  const data = ["jazz", "rap", "ballad"]
  const [selected, setSelected] = useState("")
  
  return (
    <div className={styles.main}>
      <Dropdown
        data={data}
        icon={true}
        label={true}
        placeholder={"Select Genre"}
        value={selected}
        onClick={setSelected}
      />
    </div>
  )
}
