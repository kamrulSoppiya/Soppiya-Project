import React from 'react'
import style from "./table.module.scss"
import { RadioProps } from './tableModel'
import { classNames } from '@/utils'
const Table = ({ children, scroll, border, borderColor, bgColor,headerBgColor, hover, striped, size }: RadioProps) => {
const wrapperClasses = classNames(style["scroll_width_"+scroll])

const tableClasses = classNames(style.table, style["table_"+border], style["header_bg_"+headerBgColor], style["bg_"+bgColor], style["border_color_"+borderColor], style["striped_"+striped], style["hover_"+hover], style["size_"+size])
  return (
    <div className={wrapperClasses}>
      <table className={tableClasses}>
        {children}
      </table>
    </div>
  )
}

export default Table