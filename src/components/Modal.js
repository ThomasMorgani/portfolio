import { useEffect } from 'react'

import MediaGallery from './MediaGallery'

import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'


import '../css/Modal.css'

const Modal = ({ appState, setState }) => {
  useEffect(() => {
    const body = document.querySelector('body')
    return () => {
      body.style.overflow = 'scroll'
    }
  }, [])

  const closeModal = () => {
    const modal = document.querySelector('.modal')
    const body = document.querySelector('body')
    if (body) {
      body.style['overflow-y'] = 'scroll'
    }
    if (modal) {
      modal.classList.add('hide')
      setTimeout(() => setState(state => ({ ...state, modal: { isOpen: !state.modal.isOpen } })), 2000)
    }
    // setState(state => ({ ...state, modal: { isOpen: !state.modal.isOpen } }))
  }
  console.log('modal mounted')
  return (
    <div className='modal hide'>
      {appState.work.selected && <h1> {appState.work.selected.title}</h1>}
      {appState.work.selected && <MediaGallery {...{ appState }} />}
      <button onClick={closeModal}>{<Icon path={mdiClose} title='Close gallery' size={1} color='#bc13fe' className="icon" />} CLOSE</button>
    </div>
  )
}

export default Modal
