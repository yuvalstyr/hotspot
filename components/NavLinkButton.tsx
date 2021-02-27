import React, { FC } from 'react'
import { Icon, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { IconType } from 'react-icons/lib'

export const NavLinkButton: FC<IButtonLinkProps> = ({ url, buttonIcon }) => {
  return (
    <Link href={url} passHref>
      <VStack as="a" color="whiteAlpha.800">
        <Icon as={buttonIcon} boxSize={8} />
        <Text>הזמנת אימון</Text>
      </VStack>
    </Link>
  )
}

export interface IButtonLinkProps {
  url: string
  buttonIcon: IconType
}
