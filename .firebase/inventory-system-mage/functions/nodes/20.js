

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.4oH-MXpk.js","_app/immutable/chunks/scheduler.Bo_c7Qur.js","_app/immutable/chunks/index.nR378xpg.js"];
export const stylesheets = [];
export const fonts = [];
