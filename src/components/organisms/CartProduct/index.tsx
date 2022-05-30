import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

const RemoveText = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

type CartProductProps = {
  id: number
  imageUrl: string
  title: string
  price: number
  onBuyButtonClick?: (id: number) => void
  onRemoveButtonClick?: (id: number) => void
}

/**
 * カート商品
 */
const CartProduct: React.FC<CartProductProps> = ({
  id,
  imageUrl,
  title,
  price,
  onBuyButtonClick,
  onRemoveButtonClick,
}: CartProductProps) => {
  return (
    <Flex justifyContent="space-between">
      <Flex>
        <Box width="120px" height="120px">
          <Link href={`/products/${id}`} passHref>
            <a>
              <Image
                quality="85"
                src={imageUrl}
                alt={title}
                height={120}
                width={120}
                objectFit="cover"
              />
            </a>
          </Link>
        </Box>
        <Box padding="var(--size-1)">
          <Flex
            height="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Text
                fontWeight="bold"
                variant="mediumLarge"
                mt={0}
                mb={1}
                as="p"
              >
                {title}
              </Text>
              <Text m={0} as="p">
                {price}円
              </Text>
            </Box>
            <Flex marginTop={{ base: 'var(--size-2)', md: '0px' }}>
              {/* 購入ボタン */}
              <Button
                width={{ _: '100px', md: '200px' }}
                onClick={() => onBuyButtonClick && onBuyButtonClick(id)}
              >
                購入
              </Button>
              {/* 削除ボタン (モバイル) */}
              <Button
                ml={1}
                width={{ _: '100px', md: '200px' }}
                display={{ _: 'block', md: 'none' }}
                variant="danger"
                onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
              >
                削除
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box display={{ base: 'none', md: 'block' }}>
        {/* 削除ボタン (デスクトップ) */}
        <RemoveText
          color="danger"
          onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
        >
          カートから削除
        </RemoveText>
      </Box>
    </Flex>
  )
}

export default CartProduct
