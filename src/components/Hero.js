import '../css/80sFloor.css'
import '../css/Hero.css'
const Hero = () => {
  return (
    <section className='hero'>
      <div className='name-box'>
        <h1 className='first_name metal raise'>Thomas</h1>
        <h1 className='last_name metal raise'>Morgani</h1>
      </div>
      <div id='sect'></div>
      <div class='section-cta'>
        {/* <a class='link-cta'>CSV</a>
        <a class='link-cta inverse'>WORKS</a> */}
        <div class='light'>CSV</div>
        <div class='light'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          WORKS
        </div>
        <div class='light'>CONTACT</div>
        {/* <a class='link-cta'>CONTACT</a> */}
      </div>
    </section>
  )
}

export default Hero
