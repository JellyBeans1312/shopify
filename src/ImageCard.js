import {MediaCard} from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css'
import heartIcon from './hearticon.png'
 const ImageCard = (({props}) => {
   const photos = props.map(photo => {
    return (
      <MediaCard
        title={photo.title}
        description={photo.explanation}
        primaryAction={{
          content: heartIcon,
          onAction: (() => {})
        }}
        size='small'
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