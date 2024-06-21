export async function fetchCollection() {
  const response = await fetch('http://localhost:8001/cards');

  if (!response.ok) {
    throw new Error('Network error!');
  }
  const data = await response.json();
  
  return data;

  // return [
  //   {
  //     id: 26166,
  //     player: {
  //       firstname: 'Karim',
  //       lastname: 'Benzema',
  //       birthday: '1987-12-19T08:38:50.090Z',
  //       image: 'https://images.fotmob.com/image_resources/playerimages/26166.png'
  //     }
  //   }
  // ];
}

export interface Values {
  firstname: string;
  lastname: string;
  birthday: string;
}

export async function addToCollection(values: Values) {
  const response = await fetch("http://localhost:8001/cards", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ player: values }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  
  return data;
}

export async function removeFromCollection(id: number) {
  await fetch(`http://localhost:8001/cards/${id}`, {
    method: "DELETE",
  });
}
