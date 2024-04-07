import { Outlet } from 'react-router-dom'
import { Header } from '../../components'
import { LayouContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayouContainer>
        <Header />
        <Outlet />
      </LayouContainer>
    </div>
  )
}
