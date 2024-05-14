import {
  RouteResponse,
  executeRequestAction,
  getBodyParameters,
} from '@/app/api/_util'
import { getCustomerWithHeader } from '@/authorization/server/nextjsHeaderCustomer'
import { NextRequest } from 'next/server'
import Account from '@/repository/server/account'

export async function POST(request: NextRequest) {
  const customer = getCustomerWithHeader()
  if (!customer) {
    return RouteResponse.invalidCustomerToken()
  }

  const parameter = await getBodyParameters(
    request,
    'email',
    'studentName',
    'password',
  )
  const email = parameter.getString('email')
  const studentName = parameter.getString('studentName')
  const password = parameter.getString('password')

  const [payload, status, error] = await executeRequestAction(
    Account.signupEmailCertification(customer, {
      email,
      password,
      studentName,
    }),
  )

  if (error) {
    return RouteResponse.commonError()
  }
  return RouteResponse.response(payload, status)
}
