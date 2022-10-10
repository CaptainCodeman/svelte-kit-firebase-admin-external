import type { PageServerLoad } from './$types'
import { auth } from '$lib/firebase.server';

export const load: PageServerLoad = async ({ }) => {
  return {}
}