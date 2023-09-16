import Button from './Button'

const Nav = () => {
  return(
    <nav className="flex justify-between items-center">
      <div className="text-4xl">👋</div>
      <ul className="gap-x-16 text-dark hidden sm:flex">
        <li><a href="#beranda" >Beranda</a></li>
        <li><a href="#fitur">Fitur-fitur</a></li>
        <li><a href="#teknologi">Teknologi</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <Button size="small" color="primary">Download</Button>
    </nav>
  )
}
export default Nav