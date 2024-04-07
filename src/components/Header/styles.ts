import styles from 'styled-components'

export const HeaderContainer = styles.div`
  display: flex;
  aligen-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    
    a {
      width: 3rem; 
      hight: 3rem; 

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
