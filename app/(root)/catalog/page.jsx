import Header from "@/app/components/Header"
import AsideFilterPets from "../components/AsideFilterPets"
import PetsCatalog from "../components/PetsCatalog"

const CatalogPage = () => {
    return (
        <>
            <main className='flex gap-5'>
                <AsideFilterPets />
                <PetsCatalog />
            </main>
        </>
    )
}

export default CatalogPage