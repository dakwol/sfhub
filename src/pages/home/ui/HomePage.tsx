import { UserMenu } from '@features/index'
import { PageContainer } from '@widgets/PageContainer'
import React, { FC } from 'react'
import { FaUserAlt } from 'react-icons/fa';

const HomePage:FC = () => {
  return (
    <PageContainer 
      contentLeft={
        <UserMenu 
          key={'userMenu'}
          icon={<FaUserAlt />} 
          userName={'Swiftic'}
          userNickName={'swiftic1234'}
        />
      }
      contentRight={<div>11111111111</div>} 
    />
  )
}

export default HomePage