// localStorageStore.js
import { writable } from 'svelte/store';

function createLocalStorageStore(key, initialValue) {
    const storedValue = localStorage.getItem(key);
    const data = storedValue ? JSON.parse(storedValue) : initialValue;

    const { subscribe, set } = writable(data);

    return {
        subscribe,
        set: (value) => {
            localStorage.setItem(key, JSON.stringify(value));
            set(value);
        },
        remove: () => {
            localStorage.removeItem(key);
            set(initialValue);
        }
    };
}

export const myStore = createLocalStorageStore('myKey', []);
