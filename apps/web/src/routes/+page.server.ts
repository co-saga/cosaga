import { adminDB } from '../../lib/server/firebaseAdmin';
import type { Actions, PageServerLoad } from './$types';
export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    // add email to Firebase waitlist collection
    try {
      const mailRef = adminDB.collection('waiting-list').doc(email!.toString());

      await mailRef.set({ email });
      console.log('Email submitted successfully!');
      return JSON.stringify({
        message: 'Email submitted successfully!'
      });
    } catch (error) {
      return error;
    }
  }
};
