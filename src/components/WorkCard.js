import Icon from '@mdi/react'
import { mdiImageMultiple, mdiGithub, mdiLink } from '@mdi/js'
import '../css/WorkCard.css'
// import { useEffect } from 'react'
const WorkCard = ({ appState, setState, work }) => {
  // const { appState, setState } = useContext(AppContext)

  const openModal = e => {
    e.preventDefault()
    setState(state => ({ ...state, modal: { isOpen: !state.modal.isOpen }, work: { items: [...state.work.items], selected: work } }))
    setTimeout(() => {
      const modal = document.querySelector('.modal')
      const body = document.querySelector('body')
      if (modal) {
        modal.classList.toggle('hide')
      }
      if (body) {
        body.style['overflow-y'] = 'hidden'
      }
    }, 200)
  }

  return (
    <article className='card'>
      <div className='mediaContainer'></div>
      <div className='detailContainer'>
        <p>
          <strong>Tech:</strong> React, Sass
        </p>
        <p>{work.description}</p>
      </div>

      <div className='iconRow'>
        <a href={work.homepage}>
          <Icon path={mdiLink} title='Media gallery' size={1.5} color='#bc13fe' className='iconBtn' onClick={openModal} />
        </a>
        <a href='/'>
          <Icon path={mdiImageMultiple} title='Media gallery' size={1.5} color='#bc13fe' className='iconBtn' onClick={openModal} />
        </a>
        <a href={work.homepage} rel='noreferrer' target='_blank'>
          <Icon path={mdiGithub} title='Git repo' size={1.5} color='#bc13fe' className='iconBtn' />
        </a>
      </div>
    </article>
  )
}

export default WorkCard
