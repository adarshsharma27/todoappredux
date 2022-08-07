export const Add = (item) => {
  return {
    type: "ADD_DATA",
    payload: item,
  };
};
export const Del = (id) => {
  return {
    type: "DEL_DATA",
    payload: id,
  };
};
export const Update = (id, items) => {
  return {
    type: "UPD_DATA",
    payload: items,
    d: id,
  };
};
