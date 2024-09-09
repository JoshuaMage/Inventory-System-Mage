import { user } from '$lib/auth';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

    const protectedRoutes = ["/product", "inventory", "sales", "user"];
    
    const isA
};
