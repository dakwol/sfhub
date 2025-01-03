import { PageContainer } from '@widgets/PageContainer'
import React, { FC } from 'react'

const HomePage:FC = () => {
  return (
    <PageContainer contentRight={<div>HomePage</div>} contentLeft={<div>HomePage</div>}/>
  )
}

export default HomePage