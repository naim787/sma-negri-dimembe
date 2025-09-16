import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');


      // Set cookie 'username' dengan nilai 'naim'
      cookies.set('username', username, {
        path: '/',
        httpOnly: false,
        sameSite: 'strict',
        secure: false, // ganti jadi true di production (HTTPS)
        maxAge: 60 * 60 * 24 // 1 hari
      });

      // Redirect ke /ppdb
      throw redirect(302, '/ppdb');
    //   return {
    //     success: true
    //   };

    // return {
    //   success: false,
    //   error: 'Username salah'
    // };
  }
};
