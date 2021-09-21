import React, {useState} from 'react';
import {MediaCard} from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css'
import heartIcon from './heart.svg'
 const ImageCard = (({props}) => {
   const [isFavorite, setFavorite] = useState([])
   const photos = props.map(photo => {
    console.log(isFavorite)
     const handleFavorite = () => {
       if(isFavorite.includes(photo)) {
        return 'Dislike'
      }
      return 'Like'
     }
    return (
      <MediaCard
        title={photo.title}
        date={photo.date}
        description={photo.explanation}
        size="small"
        primaryAction={{
          content: handleFavorite(photo.name),
          onAction: (() => {
            setFavorite([...isFavorite, photo])
            const url = photo.url
            if(handleFavorite() === 'Dislike') {
              setFavorite(isFavorite.filter(item => item.url !== url))
            }
          })
        }}
        secondaryAction={{
          content: photo.date
        }}
      >
        <img
          alt={photo.explanation}
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          src={photo.thumbnail_url || photo.url}
        />

      </MediaCard>
      )
   })
   return photos
})

export default ImageCard;