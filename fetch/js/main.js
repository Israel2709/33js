const getKoders = async () => {
  /*creamos la petición*/
  /*Esperamos a que la petición se cumpla*/
  let response = await fetch(
    "https://javascript33g-default-rtdb.firebaseio.com/koders/.json"
  );

  /*Desempaquetamos el contenido de la respuesta, para extraer la información con la que vamos a trabajar*/
  let koders = await response.json();
  console.log(koders);

  let keys = Object.keys(koders);
  console.log(keys);

  /*Aquí obtendremos el array listo para trabajar con él*/
  let kodersArray = keys.map((key) => {
    return { ...koders[key], key };
  });
  console.log(kodersArray);
  printKoders(kodersArray, "koders-list");
};

const postKoder = async (koderObject) => {
  let response = await fetch(
    "https://javascript33g-default-rtdb.firebaseio.com/koders/.json",
    {
      method: "POST",
      body: JSON.stringify(koderObject),
    }
  );
  let data = await response.json();
  console.log(data);
};

const editKoderById = async (koderKey, newData) => {
  let response = await fetch(
    `https://javascript33g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "PUT",
      body: JSON.stringify(newData),
    }
  );

  let data = await response.json();
  console.log(data);
};

const deleteKoderById = async (koderKey) => {
  let response = await fetch(
    `https://javascript33g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  console.log(data);
};

let saveKoderBtn = document.getElementById("save-koder-btn");

/*Registro de la modal de edición*/
const editModal = new bootstrap.Modal(
  document.getElementById("edit-koder-modal")
);

saveKoderBtn.addEventListener("click", async () => {
  let inputs = document.querySelectorAll("#koder-form input");

  let koderObject = {};

  inputs.forEach(({ name, value }) => {
    koderObject[name] = value;
  });
  console.log(koderObject);
  await postKoder(koderObject);
  await getKoders();
  inputs.forEach((input) => (input.value = ""));
});

let saveChangesBtn = document.getElementById("save-changes-btn");

/*Botón de guardar cambios*/
saveChangesBtn.addEventListener("click", async (event) => {
  console.log("guardando cambios");
  let key = event.target.dataset.koderKey;

  console.log(key);
  let editFields = document.querySelectorAll("#edit-koder-form input");
  let editedKoder = {};

  editFields.forEach(({ name, value }) => {
    editedKoder[name] = value;
  });

  await editKoderById(key, editedKoder);
  await getKoders();
  editModal.hide();
  console.log(editedKoder);
});

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

const printKoders = (kodersArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = "";

  kodersArray.forEach((koder) => wrapper.append(createKoderItem(koder)));
};

getKoders();
/*se engará de pedir información a la base de datos*/
