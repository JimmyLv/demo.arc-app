import React from 'react'

import { PageTemplate } from '../../templates'
import { Header, Footer } from '../../organisms'
import { Paragraph, Heading } from '../../atoms'

const SamplePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>Irure mollit aute tempor incididunt eiusmod fugiat tempor aute ex sit aute est proident est.</Heading>
      <Paragraph>
        Do cillum nulla consectetur excepteur aliquip adipisicing ipsum. Consectetur voluptate cillum cillum fugiat adipisicing eiusmod incididunt ut voluptate do aliquip ad irure occaecat cupidatat quis. Laborum laborum id quis officia anim quis in anim eu et aliquip sunt do excepteur. Consectetur ullamco sint do do nostrud tempor labore laboris sit fugiat veniam reprehenderit.
      </Paragraph>
    </PageTemplate>
  )
}

export default SamplePage
