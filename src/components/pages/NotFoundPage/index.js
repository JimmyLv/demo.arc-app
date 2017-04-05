import React from 'react'

import { PageTemplate } from '../../templates'
import { Header, Footer } from '../../organisms'
import { Heading } from '../../atoms'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>404 Not Found</Heading>
    </PageTemplate>
  )
}

export default NotFoundPage
