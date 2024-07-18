import PetListItem from './PetListItem'

const fetchPets = async (limit = 0) => {
  const query = new URLSearchParams();

  if (limit) query.append('limit', limit);

  const url = `https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals?${query.toString()}`;

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json()
}


const PetListLatest = async ({ limit }) => {

  const pets = await fetchPets(limit)

  return (
    <>
      {pets.map(pet => {
        return <PetListItem item={pet} key={pet.id} />
      })}
    </>
  )
}

export default PetListLatest