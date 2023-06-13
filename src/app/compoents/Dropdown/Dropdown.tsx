"use client"
import { useState } from "react"
import styles from "./style.module.css"
import { DrowdownProps } from "@/types/dropdown"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const Dropdown: React.FC<DrowdownProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const handleItemClick = (item: string) => {
    setSelectedItem(item)
    props.onClick(item)
    setOpen(false)
  }

  return (
    <div>
      {props.label && <label className={styles.label}>Music Genre</label>}
      <div className={styles.dropdown__wrapper} onClick={() => setOpen(!open)}>
        <div className={styles.input__wrapper}>
          {props.icon && <p>🎵</p>}
          <input
            className={styles.input}
            type="text"
            disabled
            value={props.value}
            placeholder={props.placeholder}
          />
          <ArrowDropDownIcon
            className={`${styles.svg__styled} ${open ? styles.svgActive : ""}`}
          />
        </div>
        <ul className={`${styles.list} ${open ? styles.listActive : ""}`}>
          {props.data?.map((el, i) => (
            <li
              key={i}
              className={`${styles.li__styled} ${
                el === selectedItem ? styles.li__selected : ""
              }`}
              onClick={() => handleItemClick(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
