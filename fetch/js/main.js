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
  let values = Object.values(koders);
  console.log(values);

  let kodersArray = keys.map((key) => {
    return { ...koders[key], key };
  });
  console.log(kodersArray);
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

getKoders();
/*se engará de pedir información a la base de datos*/
