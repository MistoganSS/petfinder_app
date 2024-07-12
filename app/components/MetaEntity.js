const MetaEntity = (props) => {
    const ENTITY = {
        "id": "petfinder",
        "name": "Petfinder",
        "nif": "00000000000",
        "address": "Lima 123, Perú",
        "phone": "017654321",
        "website": "https//petfinder.org",
        "emails": [
            {
                "contact": "hi@petfinder.org",
                "report": "report@petfinder.org"
            }
        ],
        "social": [
            {
                "facebook": "https://fb.com/petfinder.org",
                "x": "https://x.com/petfinder.org",
                "instagram": "https://instagr.am/petfinder.org",
                "youtube": "https://youtube.com/petfinder.org"
            }
        ],
        "foundation": "2020-01-01"
    }

    const value = ENTITY[props.metaKey];

    if (Array.isArray(value)) {
        return (
            <>
                {value[0]?.[props.subKey]}
            </>
        );
    }

    return (
        <>
            {value}
        </>
    );
}

export default MetaEntity