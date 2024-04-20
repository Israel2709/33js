//<li class="list-group-item">item 01</li>

let koders = [
  {
    name: "Israel",
    lastname: "Salinas Martínez",
  },
  {
    name: "Naomi",
    lastname: "López Puertos",
  },
];

let koders2 = [
  {
    name: "Charles",
    lastname: "Silva",
  },
];

const createKoderItem = (koderObject) => {
  let { name, lastname } = koderObject;
  let koderFullName = `${name} ${lastname}`;

  let koderListItem = document.createElement("li");
  koderListItem.classList.add("list-group-item");
  let koderItemText = document.createTextNode(koderFullName);
  koderListItem.append(koderItemText);

  return koderListItem;
};

const printKodersList = (kodersArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  kodersArray.forEach((koder) => {
    let koderItem = createKoderItem(koder);
    console.log(koderItem);
    wrapper.append(koderItem);
  });
};

printKodersList(koders, "koders-list");
printKodersList(koders2, "second-koders-list");
