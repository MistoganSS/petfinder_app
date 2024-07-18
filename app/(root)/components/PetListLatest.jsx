import { animalList } from '../../mocks/animalsList'
import PetListItem from './PetListItem'

const PetListLatest = ({ numberOfItems }) => {
    return (
        <>
            {animalList
                .sort((a, b) => new Date(b.dateLastSeen) - new Date(a.dateLastSeen))
                .slice(0, numberOfItems)
                .map(pet => {
                    return (
                        <article key={pet.id}>
                            <PetListItem item={pet} />
                        </article>
                    )
                })}
        </>
    )
}

export default PetListLatest