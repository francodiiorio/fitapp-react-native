const categorys = [
  {  name: "Gym" },
  {  name: "Aeróbico" }
];


const getCategorys = () => {
  return new Promise((resolve, reject) => {
    return resolve(categorys);
  });
};

export default { getCategorys };
