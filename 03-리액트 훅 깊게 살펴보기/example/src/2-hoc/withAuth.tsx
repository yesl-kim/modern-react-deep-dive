import type { ComponentType } from 'react'

type LoginProps = {
  loginRequired?: boolean
}

export default function withAuth<T>(Component: ComponentType<T>) {
  return ({ loginRequired, ...props }: T & LoginProps) => {
    if (loginRequired) {
      return <>로그인이 필요한 서비스입니다.</>
    }

    return <Component {...(props as T)} />
  }
}
