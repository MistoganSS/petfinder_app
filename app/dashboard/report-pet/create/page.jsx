'use client'
import ReportForm from '../components/ReportForm';
import { useEffect, useState } from 'react';
import { useAuthContext } from '@/app/context/AuthWrapper';
import {config} from '@/config';

const CreateReportPage = () => {
    const [species, setSpecies] = useState([]);
    const user = useAuthContext()
    const [formData, setFormData] = useState({
        name: '',
        status: 'Lost',
        reward: 0,
        dateLastSeen: '',
        areaLastSeen: '',
        crossStreet: '',
        nearestLandmark: '',
        description: '',
        ddLat: '',
        ddLon: '',
        photos: '',
        specie: 'cat',
        userId: '',
        breed: '',
        gender: 'Male',
        color: '',
        size: '',
        age: 0,
        health: '',
        haveCollar: false,
        userId: '',
    });

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch(`${config.apis.species}`);

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

    const handleCreateReport = async (formData) => {

        try {
            if (user) {
                const query = { ...formData, reward: parseFloat(formData.reward), ddLat: parseFloat(formData.ddLat), ddLon: parseFloat(formData.ddLon), age: parseInt(formData.age), userId: user.id }
                const response = await fetch(`${config.apis.animals}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(query),
                });
                if (!response.ok) {
                    throw new Error('Error creating report');
                }

                console.log('Report created');
                console.log(await response.json())
            }
        } catch (error) {
            console.error('Error creating report:', error.message);
        }
    }

    return (
        <div>

            <h1 className="text-center mt-4 text-xl font-bold text-gray-900">New Report</h1>
            <p className='text-center text-sm text-gray-500'>Thank you for your support!</p>

            {species && (<ReportForm initialData={formData} species={species} onSubmit={handleCreateReport} />)}

        </div >
    )
}

export default CreateReportPage