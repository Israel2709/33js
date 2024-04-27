import { getKoders } from "../modules/api/koderApi.js";

import { printKoders } from "../modules/domCreation/createKoderElements.js";

const getKodersData = async () => {
  let kodersArray = await getKoders();
  printKoders(kodersArray, "koders-list");
};

getKodersData();
