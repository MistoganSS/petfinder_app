import { TbBrandFacebook, TbPlaystationCircle } from 'react-icons/tb'
import ConvertTimestampToDate, { TimeElapsed } from '@/app/components/TimestampHandling'
import PrintButton from '@/app/components/PrintButton'
import {config} from '@/config'

const getAPet = async (id) => {
  try {
    const url = `${config.apis.animals}/${id}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching a pet:', error.message)
  }
}

const DetailPetsPage = async ({ params }) => {
  const { id } = params
  const pet = await getAPet(id)
  return (
    <section key={pet.id} className='py-8 bg-white md:py-16 antialiased'>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
          <div className='shrink-0 max-w-md lg:max-w-lg mx-auto'>
            <img className='w-full' src={pet.photos != '' ? pet.photos : config.DEFAULT_PET_IMAGE_URL} alt='Photo' />
          </div>

          <div className='mt-6 sm:mt-8 lg:mt-0'>
            <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl'>
              {pet.name} ({pet.specie.name})
            </h1>
            <p className='text-gray-500 text-sm'>ID: {id}</p>
            <div className='mt-4 sm:items-center sm:gap-4 sm:flex'>
              <p className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>
                ${pet.reward} reward
              </p>
            </div>

            <div className='flex p-4 mt-3 bg-zinc-200 text-zinc-800 justify-between items-center rounded-md'>
              <div className='text-xl font-bold'>
                Status: {pet.status}
              </div>
              <div>
                <div className='text-xl text-right font-semibold'>
                  <span className='text-gray-500'>
                    (
                    <TimeElapsed
                      timestamp={pet.dateLastSeen._seconds}
                    />{' '}
                    ago)
                  </span>
                </div>
                <div className='text-xs text-right'>
                  Seen on{' '}
                  <ConvertTimestampToDate
                    timestamp={pet.dateLastSeen._seconds}
                  />{' '}
                </div>
              </div>
            </div>

            <div className='mt-4'>
              You can help him return home.{' '}
              <span key={pet.user.id}>
                Contact the email {pet.user.email} and the phone
                number {pet.user.phone}.
              </span>
            </div>

            <div className='flex items-baseline my-4 bg-white gap-3 rounded-md'>
              <TbPlaystationCircle className='animate-ping' />
              <div className=''>
                {pet.areaLastSeen}
                <div>
                  {pet.nearestLandmark} - {pet.crossStreet}
                </div>
                <a
                  href={`${config.GEOLOCALIZATION_SERVICE_URL}/${pet.ddLat}+${pet.ddLon}`}
                  className='text-xs text-gray-600 hover:text-gray-900'
                  title='Show in Maps'
                  target='_blank'
                >
                  ({pet.ddLat}, {pet.ddLon})
                </a>
              </div>
            </div>

            <div className='mt-4 flex items-center gap-4'>
              <PrintButton />
              <a
                type='button'
                href={`${config.SOCIAL_SHARE_URL}/${id}`}
                className='inline-flex justify-center items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'
              >
                <TbBrandFacebook className='w-5 h-5 -ms-2 me-2' />
                Share
              </a>
            </div>

            <hr className='my-6 md:my-8 border-gray-200' />

            <p className='mb-6 text-gray-500'>{pet.description}</p>
            <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6'>
              <p className='text-xl font-semibold text-gray-900'>
                Pet Details
              </p>

              <div className='space-y-4'>
                <div className='space-y-2'>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500'>
                      Have collar?
                    </dt>
                    <dd className='font-normal text-gray-900'>
                      {pet.haveCollar ? 'Yes' : 'No'}
                    </dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500'>Breed</dt>
                    <dd className='font-medium text-gray-900'>
                      {pet.breed}
                    </dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500'>
                      Gender
                    </dt>
                    <dd className='font-medium text-gray-900'>
                      {pet.gender}
                    </dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500'>Color</dt>
                    <dd className='font-medium text-gray-900'>
                      {pet.color}
                    </dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500'>Size</dt>
                    <dd className='font-medium text-gray-900'>
                      {pet.size}
                    </dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500'>Age</dt>
                    <dd className='font-medium text-gray-900'>
                      {pet.age} years
                    </dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='font-normal text-gray-500'>
                      Health
                    </dt>
                    <dd className='font-medium text-gray-900'>
                      {pet.health}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailPetsPage
