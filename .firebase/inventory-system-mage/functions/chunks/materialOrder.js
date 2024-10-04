import { w as writable } from "./index.js";
const initialData = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("materialData")) || [] : [];
const materialStore = writable(initialData);
if (typeof window !== "undefined") {
  materialStore.subscribe((value) => {
    localStorage.setItem("materialData", JSON.stringify(value));
  });
}
export {
  materialStore as m
};
