'use client'
import { useEffect, useState } from 'react'
import ReportForm from '../../components/ReportForm'

const EditReportPage = ({ params }) => {
    const { id } = params
    const [report, setReport] = useState(null)
    const [species, setSpecies] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        status: '',
        reward: 0,
        dateLastSeen: '',
        areaLastSeen: '',
        crossStreet: '',
        nearestLandmark: '',
        description: '',
        ddLat: '',
        ddLon: '',
        photos: '',
        specie: '',
        userId: '',
        breed: '',
        gender: '',
        color: '',
        size: '',
        age: 0,
        health: '',
        haveCollar: false,
    });

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await fetch(`https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals/${id}`);
                if (!response.ok) {
                    throw new Error('Error getting report');
                }
                const data = await response.json();
                setReport(data);
                setFormData({
                    name: data.name,
                    status: data.status,
                    reward: data.reward,
                    dateLastSeen: data.dateLastSeen,
                    areaLastSeen: data.areaLastSeen,
                    crossStreet: data.crossStreet,
                    nearestLandmark: data.nearestLandmark,
                    description: data.description,
                    ddLat: data.ddLat,
                    ddLon: data.ddLon,
                    photos: data.photos,
                    specie: data.specie.name.toLowerCase(),
                    breed: data.breed,
                    gender: data.gender,
                    color: data.color,
                    size: data.size,
                    age: data.age,
                    health: data.health,
                    haveCollar: data.haveCollar,
                });
            } catch (error) {
                console.error('Error getting report:', error.message);
            }
        };

        if (id) {
            fetchReport();
        }
    }, [id]);

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch(`https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/species`);
                if (!response.ok) {
                    throw new Error('Error getting species');
                }
                const data = await response.json();
                setSpecies(data);
            } catch (error) {
                console.error('Error getting species:', error.message);
            }
        };

        fetchSpecies();
    }, []);

    const handleUpdateReport = async (formData) => {
        const last = new Date(formData)
        try {
            const response = await fetch(`https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ ...formData, reward: parseFloat(formData.reward), ddLat: parseFloat(formData.ddLat), ddLon: parseFloat(formData.ddLon), dateLastSeen: last, age: parseInt(formData.age) }),
            });
            if (!response.ok) {
                throw new Error('Error updating report');
            }

            console.log('Report updated successfully');
        } catch (error) {
            console.error('Error updating report:', error.message);
        }
    };

    if (!report && !species) {
        return <p className='text-center'>Loading...</p>;

    }

    return (
        <div>

            <h1 className="text-center mt-4 text-xl font-bold text-gray-900">Update report</h1>
            <p className='text-center text-sm text-gray-500'>{id}</p>

            <ReportForm initialData={formData} species={species} onSubmit={handleUpdateReport} />

        </div >
    )
}

export default EditReportPage