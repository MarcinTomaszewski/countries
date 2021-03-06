import { StorageServices } from "../types";

const localStore: StorageServices = {
  get: (key) => localStorage.getItem(key),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.remove(key),
  clear: () => localStorage.clear()
};

export default localStore
