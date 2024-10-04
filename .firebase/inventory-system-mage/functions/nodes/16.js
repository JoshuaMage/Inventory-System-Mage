

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sales/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.C5wUDMKU.js","_app/immutable/chunks/scheduler.Bo_c7Qur.js","_app/immutable/chunks/index.nR378xpg.js"];
export const stylesheets = [];
export const fonts = [];
