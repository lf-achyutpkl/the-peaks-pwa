export const getItem = (key) => {
  try {
    const serializedItem = localStorage.getItem(key);

    return serializedItem && JSON.parse(serializedItem);
  } catch (error) {
    return null;
  }
};

export const setItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);

    localStorage.setItem(key, serializedValue);
  } catch (error) {
    // console.error('error while saving user in local storage', error);
  }
};
