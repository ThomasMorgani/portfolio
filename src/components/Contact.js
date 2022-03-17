import Icon from '@mdi/react'
import { mdiAt, mdiGithub, mdiLinkedin } from '@mdi/js'
import '../css/Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="header">

      </h1>
      {/* <div className="container"> */}
      <div className="iconRow">
        <a href="/">
          <Icon path={mdiAt}
            title="Email"
            size={3}
            color="#bc13fe"
            className="iconBtn"
          />
        </a>
        <a href="/">
          <Icon path={mdiGithub}
            title="Github profile"
            size={3}
            color="#bc13fe"
            className="iconBtn"
          />
        </a>
        <a href="https://github.com" rel="noreferrer" target="_blank">
          <Icon path={mdiLinkedin}
            title="Linkdin profile"
            size={3}
            color="#bc13fe"
            className="iconBtn"
          />
        </a>
      </div>

      {/* </div> */}
    </section>
  )
}

export default Contact