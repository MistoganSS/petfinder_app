import PetListItem from './PetListItem';

function PetList({ filteredPets }) {
    return (
        <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            {filteredPets.map(pet => {
                return (
                    <article key={pet.id}>
                        <PetListItem item={pet} />
                    </article>
                )
            })}
        </div >
    );
}

export default PetList;
