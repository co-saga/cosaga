import type { Handle } from '@sveltejs/kit';
import * as dotenv from 'dotenv';
dotenv.config();

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};
