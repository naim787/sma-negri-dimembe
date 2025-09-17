import { DesDat } from '$lib/utils/c';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const username = cookies.get('username');

  if (!username) {
    throw redirect(302, '/login');
  }

  try {
    DesDat("f545d873d98301bd2f33952d3aff3a8e10bb4b9afacfc3620ef8cf534483119f", username);

    return {
      user: 'valid' 
    };
  } catch (err) {
    
    throw redirect(302, '/login');
  }
}
