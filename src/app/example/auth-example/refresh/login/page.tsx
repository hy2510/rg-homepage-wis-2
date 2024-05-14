import { getAuthorizationWithCookie } from '@/authorization/server/nextjsCookieAuthorization'
import ClientLoginFormPage from '../../ClientLoginFormPage'
import AuthorizationGuard from '@/authorization/server/AuthorizationGuard-a'
import { redirect } from 'next/navigation'

export default function Page() {
  const authorization = getAuthorizationWithCookie()
  const isLogin = authorization?.token ? true : false

  if (isLogin) {
    redirect(`./home`)
  } else {
  }

  return (
    <AuthorizationGuard id={authorization.token?.tag || ''}>
      <ClientLoginFormPage />
    </AuthorizationGuard>
  )
}
