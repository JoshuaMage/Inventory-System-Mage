import { writable } from 'svelte/store';

const initialData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('materialData')) || [] : [];
export const materialStore = writable(initialData);

// Subscribe to store changes and save to local storage if in the browser
if (typeof window !== 'undefined') {
    materialStore.subscribe(value => {
        localStorage.setItem('materialData', JSON.stringify(value));
    });
}
