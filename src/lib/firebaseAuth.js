import { auth } from '$lib/firebaseConfig';
import { writable } from 'svelte/store';

export const user = writable(null);

auth.onAuthStateChanged((firebaseUser) => user.set(firebaseUser));


