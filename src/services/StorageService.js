const getStorageType = (type = "session") => {
  if (type === "local") {
    return localStorage;
  }
  return sessionStorage;
};

const Storage = {
  set: (key, data, type = "session") => {
    const storage = getStorageType(type);
    storage.setItem(key, JSON.stringify(data));
  },
  get: (key, type = "session") => {
    const value = JSON.parse(getStorageType(type).getItem(key));
    return value || null;
  },
  delete: (key, type = "session") => {
    const storage = getStorageType(type);
    storage.removeItem(key);
  },
};

export default Storage;
