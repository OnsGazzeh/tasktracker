import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>GDSC Frontend team &copy; 2022</p>
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer