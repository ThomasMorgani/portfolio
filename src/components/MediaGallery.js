import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

import '../css/Gallery.css'
import '../css/IconBtn.css'
const MediaGallery = ({ appState }) => {
  const work = appState.work.selected || null
  const [activeImage, setActiveImage] = useState(0)

  const nextImage = () => {
    setActiveImage(activeImage === work.media.length - 1 ? 0 : activeImage + 1)
  }
  const prevImage = () => {
    setActiveImage(activeImage === 0 ? work.media.length - 1 : activeImage - 1)
  }
  return (
    <section className='gallery'>
      <div className="control alignStart">
        <Icon path={mdiChevronLeft} title='Prev. image' size="4rem" color='#bc13fe' className='iconBtn  ' onClick={prevImage} />
      </div>
      <img src={work.media[activeImage]} alt={` ${activeImage + 1}`} className='activeImage' />
      <div className="control alignEnd">
        <Icon path={mdiChevronRight} title='Prev. image' size="4rem" color='#bc13fe' className='iconBtn ' onClick={nextImage} />
      </div>
    </section>
  )
}

export default MediaGallery
