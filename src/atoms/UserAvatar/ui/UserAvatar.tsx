import React, { FC, ReactNode } from 'react';
import './styles.scss';

interface Props {
    readonly icon: string | ReactNode;
}

const UserAvatar:FC<Props> = ({icon}) => {
  return (
    <div className='userAvatarContainer'>
        {typeof icon === 'string' ? 
          <img className='userAvatarImg' src={icon}/>
          :
          icon
        }
    </div>
  )
}

export default UserAvatar;