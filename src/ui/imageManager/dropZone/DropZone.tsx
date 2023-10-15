import React, { useRef } from 'react'
import style from "./dropZone.module.scss"
import { Button } from '@/ui/button'
import { Text } from '@/ui/text'
const DropZone = () => {
    const fileRef=  useRef<HTMLInputElement | null>(null);
    const handleFileRef = () =>{
        fileRef.current?.click()
    }
    return (
        <div className={style.drop_zone}>
            <div className={style.inner} onClick={handleFileRef}>
                <div className={style.button_wrapper}>
                    <Button size='sm' type='outline' >Add images</Button>
                    <Text size="sm" fontWeight='regular' color='tertiary'>or drag and drop</Text>
                </div>
                <input type="file" className={style.file} ref={fileRef} />
            </div>
        </div>
    )
}

export default DropZone