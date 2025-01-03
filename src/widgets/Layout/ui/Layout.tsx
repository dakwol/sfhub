import { FC, ReactNode } from 'react';
import './styles.scss'

interface Props {
  readonly children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='layoutContainer'>
      <div className='layoutChildrenContainer'>{children}</div>
    </div>
  )
}

export default Layout