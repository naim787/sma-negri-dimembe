import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');

      cookies.set('username', username, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        maxAge: 60 * 60 * 24 
      });

      throw redirect(302, '/ppdb');
  }
};
