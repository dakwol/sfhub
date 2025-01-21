import React, { FC, ReactNode } from 'react'
import './styles.scss';
import { UserAvatar } from '@atoms/index';

interface Props {
    readonly icon: string | ReactNode;
    readonly userName: string;
    readonly userNickName: string;
}

const UserMenu:FC<Props> = ({icon, userName, userNickName}) => {
  return (
    <div className='userMenuContainer'>
        <div className='userAvatarNameContainer'>
          <UserAvatar icon={icon}/>
          <h2 className='userName'>{userName}</h2>
          <h4 className='userNickName'>{`@${userNickName}`}</h4>
        </div>
    </div>
  )
}

export default UserMenu;