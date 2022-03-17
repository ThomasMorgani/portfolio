const iconPath = '/static/icons/'



const Icon = ({ icon }) => {
  const src = `${process.env.PUBLIC_URL}${iconPath}${icon}.svg`
  const style = {
    height: '4rem'
  }
  console.log(src)
  console.log(process.en)
  return (
    <img src={src} alt={icon} style={style}></img>
  )
}


export default Icon