import { auth } from '$lib/firebaseConfig';
import { writable } from 'svelte/store';

export const user = writable(null);
export const isAuthenticated = writable(false);


auth.onAuthStateChanged((firebaseUser) => {
  user.set(firebaseUser);
  isAuthenticated.set(!!firebaseUser); //
});
