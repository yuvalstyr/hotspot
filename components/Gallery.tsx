import React from 'react'
import { Grid, Image, jsx } from 'theme-ui'

/** @jsx jsx */

const Gallery: React.FC = () => {
  return (
    <Grid
      gap={2}
      columns={['1fr 1fr', 2]}
      sx={{ gridTemplateRows: ['1fr 1fr'], maxWidth: '700px' }}
    >
      <Image
        src="/1.jpg"
        sx={{
          objectFit: 'cover',
          gridColumn: ['span 2', 'span 2'],
          variant: 'containers.image',
        }}
      />
      <Image
        src="/3.jpg"
        sx={{
          objectFit: 'cover',
          variant: 'containers.image',
        }}
      />
      <Image
        src="/2.jpg"
        sx={{
          objectFit: 'cover',
          variant: 'containers.image',
        }}
      />
    </Grid>
  )
}

export default Gallery
