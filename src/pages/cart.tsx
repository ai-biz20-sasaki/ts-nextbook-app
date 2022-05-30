import type { NextPage } from 'next'
import Link from 'next/link'
import BreadcrumbItem from 'components/atoms/BreadcrumbItem'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Breadcrumb from 'components/molecules/Breadcrumb'
import Layout from 'components/templates/Layout'
import CartContainer from 'containers/CartContainer'
import { useAuthGaurd } from 'utils/hooks'

const CartPage: NextPage = () => {
  // 認証ガード
  useAuthGaurd()

  return (
    <Layout>
      <Flex
        paddingTop="var(--size-2)"
        paddingBottom="var(--size-2)"
        paddingLeft={{ base: 'var(--size-2)', md: '0px' }}
        paddingRight={{ base: 'var(--size-2)', md: '0px' }}
        justifyContent="center"
      >
        <Box width="1240px">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">
                <a>トップ</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>カート</BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Text display="block" variant="large" as="h1">
              カート
            </Text>
            {/*
              カートコンテナ
              カートの中にある商品を表示、購入、削除
            */}
            <CartContainer />
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default CartPage
