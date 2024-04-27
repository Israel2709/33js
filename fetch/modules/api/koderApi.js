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
  return kodersArray;
};

export { getKoders };
