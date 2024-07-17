import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { TbMinus, TbPlus } from 'react-icons/tb'
import PetFilterConfig from './PetFilterConfig'

function PetFilter({ selectedStatus, setSelectedStatus, selectedSpecie, setSelectedSpecie, selectedReward, setSelectedReward, selectedGender, setSelectedGender, selectedStartLastSeen, setSelectedStartLastSeen, selectedEndLastSeen, setSelectedEndLastSeen }) {
    
    const handleStatusChange = (event) => {
        const value = event.target.value
        setSelectedStatus(prevStatus =>
            prevStatus.includes(value)
                ? prevStatus.filter(status => status !== value)
                : [...prevStatus, value]
        )
    }

    const handleSpeciesChange = (event) => {
        const value = event.target.value
        setSelectedSpecie(prevSpecie =>
            prevSpecie.includes(value)
                ? prevSpecie.filter(specie => specie !== value)
                : [...prevSpecie, value]
        )
    }

    const handleRewardChange = (event) => {
        setSelectedReward(Number(event.target.value))
    }

    const handleGenderChange = (event) => {
        const value = event.target.value
        setSelectedGender(prevGender =>
            prevGender.includes(value)
                ? prevGender.filter(gender => gender !== value)
                : [...prevGender, value]
        )
    }

    const handleStartLastSeenChange = (event) => {
        setSelectedStartLastSeen(event.target.value)
    }

    const handleEndLastSeenChange = (event) => {
        setSelectedEndLastSeen(event.target.value)
    }

    const handlers = { handleStatusChange, handleSpeciesChange, handleRewardChange, handleGenderChange, handleStartLastSeenChange, handleEndLastSeenChange };

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
        <form id='petFilter' className="hidden lg:block pe-4">
            <h2 className='font-bold bg-gray-200 p-4 rounded-md'>Filter Lost & Found Pets</h2>
            <div className='border-b border-gray-200 py-6'>
                <h3 className='py-3 text-sm font-medium text-gray-900'>Last seen Pet</h3>
                <div id="date-range-picker" className="flex items-center justify-between">
                    <div className="relative">
                        <input id="datepicker-range-start" value={selectedStartLastSeen} onChange={handleStartLastSeenChange} name="start" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Select date start" />
                    </div>
                    <span className="mx-0002 text-gray-500">to</span>
                    <div className="relative">
                        <input id="datepicker-range-end" value={selectedEndLastSeen} onChange={handleEndLastSeenChange} name="end" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Select date end" />
                    </div>
                </div>
            </div>

            <div className='border-b border-gray-200 py-6'>
                <h3 className='pb-3 text-sm font-medium text-gray-900'>Minimum reward</h3>
                <div className="relative mb-6">
                    <label htmlFor="labels-range-input" className="sr-only">Reward</label>
                    <input
                        id="labels-range-input"
                        type="range"
                        value={selectedReward}
                        min="0" max="1500"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        onChange={handleRewardChange}
                    />
                    <span className="text-xs text-gray-400 absolute start-0 -bottom-6">Min ($0)</span>
                    <span className="text-xs text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                    <span className="text-xs text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                    <span className="text-xs text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
                </div>
            </div>

            {PetFilterConfig.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                                <TbPlus aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                <TbMinus aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                            </span>
                        </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                    <input
                                        defaultValue={option.value}
                                        defaultChecked={option.checked}
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                        onChange={getHandler(section.handler)}
                                    />
                                    <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            ))}
        </form>
    );
}

export default PetFilter;
