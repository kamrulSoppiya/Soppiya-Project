import React, { useState } from 'react'
import style from "./imageManagerHeader.module.scss"
import { Input } from '@/ui/input'
import { Button } from '@/ui/button'
import { GridViewIcon, ListViewIcon, SortingIcon, UploadIcon } from '@/assets/icons'
import { classNames } from '@/utils'
import { Radio } from '@/ui/radio'

interface ContentBodyHeaderProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, customParam: string) => void;
    handleImageView: (param: string) => void;
    handleInputChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    selected?: number;
    handleSort:(param: string) => void;
}
// selectedItem, images,
const ImageManagerHeader = ({ handleImageView, handleInputChange, handleSort }: ContentBodyHeaderProps) => {
    const [sortingMenu, setSortingMenu] = useState(false)
    
    // const itemsDeleted = () => {
    //     return images.filter(img => !selectedItem.includes(img.id));
    // }

    // console.log(itemsDeleted());
    return (
        <>
            <div className={style.content_body_header}>
                <div className={style.header_left}>
                    <Input
                        size='sm'
                        type='search'
                        placeholder='Search files'
                        label=''
                        onChange={handleInputChange}
                    />
                </div>
                <div className={style.header_right}>
                    <div>
                        {/* use style in variant variant={} */}
                        <Button size='sm'>Delete selected</Button>
                    </div>selected
                    <div className={classNames(style.button, style.sorting_button, style.padding, sortingMenu && style.active_sorting_box)}>
                        <Button size='sm' type='outline' onClick={() => setSortingMenu(prev => !prev)}>
                            <SortingIcon />
                            <span>Sort</span>
                        </Button>
                        <div className={classNames(style.sorting_box)}>
                            <div className={style.sorting_inner}>
                                <div className={style.sorting_item} onClick={() => handleSort('newest')}>
                                    <Radio
                                        title='Date added (newest first)'
                                        labelId='newest_date' 
                                    />
                                </div>
                                <div className={style.sorting_item} onClick={() => handleSort('oldest')}>
                                    <Radio 
                                        title='Date added (oldest first)'
                                        labelId='oldest_date'
                                    />
                                </div>
                                <div className={style.sorting_item} onClick={() => handleSort('name-az')}>
                                    <Radio 
                                        title='File name (A-Z)'
                                        labelId='a-z'
                                    />
                                </div>
                                <div className={style.sorting_item} onClick={() => handleSort('name-za')}>
                                    <Radio 
                                        title='File name (Z-A)'
                                        labelId='z-a'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.button}>
                        <Button size='sm' type='outline' onClick={() => handleImageView("grid")}>
                            <GridViewIcon />
                        </Button>
                    </div>
                    <div className={style.button}>
                        <Button size='sm' type='outline' onClick={() => handleImageView('list')} >
                            <ListViewIcon />
                        </Button>
                    </div>
                    <div className={classNames(style.button, style.padding, style.hide_icon)}>
                        <Button size='sm' type='outline'>
                            <UploadIcon />
                            <span>Upload image</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageManagerHeader