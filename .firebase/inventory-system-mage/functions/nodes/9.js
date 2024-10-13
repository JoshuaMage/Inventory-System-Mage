

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/inventory/materialStock/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.DFHJ9lLK.js","_app/immutable/chunks/scheduler.CXfhjvOk.js","_app/immutable/chunks/index.WVNcM1CQ.js","_app/immutable/chunks/each.CxRJsNaj.js","_app/immutable/chunks/firebaseConfig.DxRc-Brs.js","_app/immutable/chunks/Pagination.Br2EK98U.js"];
export const stylesheets = [];
export const fonts = [];
