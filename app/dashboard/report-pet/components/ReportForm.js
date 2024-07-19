'use client'
import React, { useEffect, useState } from 'react'

const ReportForm = ({ initialData = {}, onSubmit, species }) => {
    const [formData, setFormData] = useState(initialData)
    const inpuTextClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
    const inputSelectClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
    const inpuRadioClass= "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"
    const inpuTextareaClass= 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
    
    useEffect(() => {
        if (initialData.dateLastSeen?._seconds) {
            const formattedDate = timestampToDate(initialData.dateLastSeen._seconds)
            setFormData({ ...initialData, dateLastSeen: formattedDate })
        } else {
            setFormData(initialData)
        }
    }, [initialData])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: value })
    };

    const handleCollarChange = (e) => {
        const { name, value, type, checked } = e.target;
        //const val = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: checked })
    };

    const handleStatusChange = (status) => {
        setFormData({ ...formData, status })
    };

    const timestampToDate = (timestamp) => {
        const date = new Date(timestamp * 1000)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    };

    return (
        <section>
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-4">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="w-full sm:col-span-2">
                            <p className="mb-4 font-semibold text-gray-900">Status</p>
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input id="lost" type="radio" name="status" value="Lost" checked={formData.status === 'Lost'} onChange={() => handleStatusChange('Lost')} className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500" />
                                        <label htmlFor="lost" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Lost</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input id="found" type="radio" name="status" value="Lost" checked={formData.status === 'Found'} onChange={() => handleStatusChange('Found')} className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500" />
                                        <label htmlFor="found" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Found</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input id="reunited" type="radio" name="status" value="Reunited" checked={formData.status === 'Reunited'} onChange={() => handleStatusChange('Reunited')} className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500" />
                                        <label htmlFor="reunited" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Reunited</label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Pet Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inpuTextClass} placeholder="Type pet name" required="" />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="specie" className="block mb-2 text-sm font-medium text-gray-900">Specie</label>
                            <select id="specie" name='specie' value={formData.specie} onChange={handleChange} className={inputSelectClass}>
                                {species.map((specie) => (
                                    <option key={specie.id} value={specie.id}>
                                        {specie.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full">
                            <label htmlFor="reward" className="block mb-2 text-sm font-medium text-gray-900">Reward</label>
                            <input type="number" name="reward" id="reward" value={formData.reward} onChange={handleChange} className={inpuTextClass} placeholder="0" required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="dateLastSeen" className="block mb-2 text-sm font-medium text-gray-900">Last Seen</label>
                            <input type="date" name="dateLastSeen" id="dateLastSeen" value={formData.dateLastSeen} onChange={handleChange} className={inpuTextClass} required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="areaLastSeen" className="block mb-2 text-sm font-medium text-gray-900">Area Last Seen</label>
                            <input type="text" name="areaLastSeen" id="areaLastSeen" value={formData.areaLastSeen} onChange={handleChange} className={inpuTextClass} placeholder='San Miguel' required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="crossStreet" className="block mb-2 text-sm font-medium text-gray-900">Cross Street</label>
                            <input type="text" name="crossStreet" id="crossStreet" value={formData.crossStreet} onChange={handleChange} className={inpuTextClass} placeholder='Av. La Marina' required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="nearestLandmark" className="block mb-2 text-sm font-medium text-gray-900">Nearest Landmark</label>
                            <input type="text" name="nearestLandmark" id="nearestLandmark" value={formData.nearestLandmark} onChange={handleChange} className={inpuTextClass} placeholder='Parque de la Muralla' required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="ddLat" className="block mb-2 text-sm font-medium text-gray-900">Latitude</label>
                            <input type="text" name="ddLat" id="ddLat" value={formData.ddLat} onChange={handleChange} className={inpuTextClass} placeholder='-12.0851' required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="ddLon" className="block mb-2 text-sm font-medium text-gray-900">Longitude</label>
                            <input type="text" name="ddLon" id="ddLon" value={formData.ddLon} onChange={handleChange} className={inpuTextClass} placeholder='-77.074' required="" />
                        </div>

                        <hr className="sm:col-span-2" />

                        <div className="w-full">
                            <label htmlFor="breed" className="block mb-2 text-sm font-medium text-gray-900">Breed</label>
                            <input type="text" name="breed" id="breed" value={formData.breed} onChange={handleChange} className={inpuTextClass} placeholder='Husky' required="" />
                        </div>

                        <div>
                            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className={inputSelectClass}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Unknow">Unknow</option>
                            </select>
                        </div>


                        <div className="w-full">
                            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900">Color</label>
                            <input type="text" name="color" id="color" value={formData.color} onChange={handleChange} className={inpuTextClass} placeholder='Black' required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900">Size</label>
                            <input type="text" name="size" id="size" value={formData.size} onChange={handleChange} className={inpuTextClass} placeholder='Small' required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
                            <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} className={inpuTextClass} placeholder='3' required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="health" className="block mb-2 text-sm font-medium text-gray-900">Health</label>
                            <input type="text" name="health" id="health" value={formData.health} onChange={handleChange} className={inpuTextClass} placeholder='She needs her medication' required="" />
                        </div>

                        <div className="w-full">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="haveCollar" checked={formData.haveCollar} onChange={handleCollarChange} className="sr-only peer" />
                                <div className={inpuRadioClass}></div>
                                <span className="ms-3 text-sm font-medium text-gray-900">Have collar?</span>
                            </label>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className={inpuTextareaClass} placeholder="Missing Labrador mix, golden coat with white chest patch. Last seen near Oak Street. Reward. Thank you!"></textarea>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="submit" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Save report
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ReportForm