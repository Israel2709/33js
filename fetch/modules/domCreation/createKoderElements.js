const printKoders = (kodersArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = "";

  kodersArray.forEach((koder) => wrapper.append(createKoderItem(koder)));
};

const createKoderItem = (koderObject) => {
  console.log(koderObject);
  let { name, lastname, key } = koderObject;
  let koderItem = document.createElement("li");
  koderItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "gap-3"
  );

  let koderName = document.createElement("span");
  koderName.classList.add("flex-grow-1");
  koderName.innerText = `${name} ${lastname}`;

  /*Botón de editar koder*/
  let editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-primary", "text-center");
  editBtn.innerHTML = "&#x270E;";

  editBtn.addEventListener("click", () => {
    document.getElementById("edit-name").value = name;
    document.getElementById("edit-lastname").value = lastname;
    document.getElementById("save-changes-btn").dataset.koderKey = key;
    editModal.show();
  });

  /*Botón de eliminar koder*/
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "text-center");
  deleteBtn.innerText = "X";

  deleteBtn.addEventListener("click", async () => {
    console.log(key);
    await deleteKoderById(key);
    await getKoders();
  });

  koderItem.append(koderName, editBtn, deleteBtn);

  return koderItem;
};

export { printKoders, createKoderItem };
