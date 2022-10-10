import { json } from '@sveltejs/kit';
import { auth } from '$lib/firebase.server';
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.text()
  const user = await auth.verifyIdToken(body as string)
  const { uid, name, email, picture } = user
  const custom = await auth.createCustomToken(uid, { name, email, picture })

  return json(custom)
}
