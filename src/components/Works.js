import '../css/Works.css'
import WorkCard from './WorkCard'
import Contact from './Contact'
const Works = ({ appState, setState }) => {
  return (
    <section className='content fade'>
      <h1 className='header'>Work</h1>
      <div className='container'>
        {appState.work.items.map(work => (
          <WorkCard key={work.id} {...{ appState, setState, work }}></WorkCard>
        ))}
      </div>
      <Contact />
    </section>
  )
}

export default Works
