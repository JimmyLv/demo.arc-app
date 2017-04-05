import React from 'react'

import { PageTemplate } from '../../templates'
import { Header, Hero, Footer, FeatureList } from '../../organisms'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage
