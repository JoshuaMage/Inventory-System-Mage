import { writable } from 'svelte/store';

export const stockOutStore = writable([]);
export const totalOrderQty = writable([]);
export const selectedMaterialStore = writable(null);