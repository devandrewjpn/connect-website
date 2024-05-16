/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { HardDriveDownload } from 'lucide-react'

export const GalleryItemImage = ({image}) => {

    const [mounted,setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if(!mounted) return null;

    return (
        <div className="gallery_item_image_box">
            <img src={image} />
            <a href={image} download><HardDriveDownload /></a>
        </div>
    )
}