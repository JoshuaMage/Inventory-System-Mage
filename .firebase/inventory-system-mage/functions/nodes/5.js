

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/inventory/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CW1LoW6Y.js","_app/immutable/chunks/scheduler.Bo_c7Qur.js","_app/immutable/chunks/index.nR378xpg.js","_app/immutable/chunks/each.DQsVKIv9.js","_app/immutable/chunks/materialStock.BxE3lVDB.js","_app/immutable/chunks/index.scqxoV_u.js","_app/immutable/chunks/sortingTable.xxU4tKXG.js"];
export const stylesheets = [];
export const fonts = [];