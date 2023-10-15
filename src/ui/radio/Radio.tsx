import React from 'react'
import style from "./radio.module.scss"
import { Text } from '../text'
import { RadioProps } from './radioModels'
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ disabled=false, title, subTitle, name = "role", labelId = "one", value, checked, onChange, titleFontWeight = "regular" }, ref) => {
        {
            return (

                <div className={style.roles}>
                    <input
                        type="radio"
                        name={name}
                        value={value || ""}
                        checked={checked}
                        id={labelId}
                        onChange={onChange}
                        disabled={disabled}
                        ref={ref}
                    />
                    {
                        title && <label className={style.role} htmlFor={labelId}>
                            {
                                title && <Text fontWeight={titleFontWeight} size='md' truncate>{title || ""}</Text>
                            }
                            {
                                subTitle && <Text fontWeight='regular' size='md' color='tertiary' truncate>{subTitle || ""}</Text>
                            }
                        </label>
                    }
                </div>
            )
        }
    }
)

export default Radio