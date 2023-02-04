import { React, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import './styles/Nav.css'
export default function Nav() {
  const [input, setInput] = useState('');
  const [url, setUrl] = useState();
  const navigate = useNavigate();

  const search = (e) => {
    if (e.key == 'Enter') {
      navigate(`/search/${input}`)
    }
  }
  const inputChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <nav id='navCont'>
      <NavLink to={`/`} activeClassName="active" className="nav-link">Home</NavLink>
      <NavLink to={`/sort/${"tech"}`} activeClassName="active" className="nav-link nav-tech">Tech</NavLink>
      <NavLink to={`/sort/${"gaming"}`} activeClassName="active" className="nav-link nav-gaming">Gaming</NavLink>
      <NavLink to={`/sort/${"photography"}`} activeClassName="active" className="nav-link nav-photo">Photography</NavLink>
      <NavLink to={`/sort/${"media"}`} activeClassName="active" className="nav-link nav-media">Media</NavLink>
      <input id='searchBox' type="text" placeholder='search keyword' onChange={(e) => inputChange(e)} onKeyPress={(e) => search(e)} />
      {/* <input type='checkbox' id='checkBox' />
      <label for="checkBox" className='navToggle'><GiHamburgerMenu fontSize='55px' /></label> */}
    </nav>
  )
}
