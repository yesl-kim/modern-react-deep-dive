import Link from 'next/link'

export default function Hello() {
  console.log(typeof window === 'undefined' ? '서버' : '클라이언트') // eslint-disable-line no-console
  return (
    <>
      hello
      <Link href="/">home</Link>
    </>
  )
}

export const getServerSideProps = () => {
  return {
    props: {},
  }
}
