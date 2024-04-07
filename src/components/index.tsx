import { HeaderContainer } from './Header/styles'
import { ClipboardList, Timer } from 'lucide-react'
import logoIgnite from '../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <ClipboardList size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
