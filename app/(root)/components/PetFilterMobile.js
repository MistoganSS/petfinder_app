import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { TbDoorExit, TbMinus, TbPlus } from 'react-icons/tb'
import PetFilterConfig from './PetFilterConfig'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const PetFilterMobile = ({ selectedStatus, setSelectedStatus, selectedSpecie, setSelectedSpecie, selectedReward, setSelectedReward, selectedGender, setSelectedGender, mobileFiltersOpen, setMobileFiltersOpen }) => {
    const handleStatusChange = (event) => {
        const value = event.target.value;
        setSelectedStatus(prevStatus =>
            prevStatus.includes(value)
                ? prevStatus.filter(status => status !== value)
                : [...prevStatus, value]
        );
    };

    const handleSpeciesChange = (event) => {
        console.log(event.target.value)
    };

    const handleRewardChange = (event) => {
        setSelectedReward(Number(event.target.value))
    }

    const handlers = { handleStatusChange, handleSpeciesChange };

    const getHandler = (handlerName) => {
        return (event) => {
            const handler = handlers[handlerName];
            if (typeof handler === 'function') {
                handler(event);
            } else {
                console.error(`Handler ${handlerName} is not defined.`);
            }
        };
    };

    return (
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-40 flex">
                <DialogPanel
                    transition
                    className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                >
                    <div className="flex items-center justify-between px-4">
                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                        <button
                            type="button"
                            onClick={() => setMobileFiltersOpen(false)}
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <TbDoorExit aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                        <h3 className="sr-only">Categories</h3>

                        {PetFilterConfig.map((section) => (
                            <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                <h3 className="-mx-2 -my-3 flow-root">
                                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                        <span className="font-medium text-gray-900">{section.name}</span>
                                        <span className="ml-6 flex items-center">
                                            <TbPlus aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                            <TbMinus aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel className="pt-6">
                                    <div className="space-y-6">
                                        {section.options.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center">
                                                <input
                                                    defaultValue={option.value}
                                                    defaultChecked={option.checked}
                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                    name={`${section.id}[]`}
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    onChange={getHandler(section.handler)}
                                                    value={option.value}
                                                />
                                                <label
                                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default PetFilterMobile