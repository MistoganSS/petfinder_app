import { TbBookmark, TbBrandFacebook } from 'react-icons/tb'
import TimeAgoFrom from './TimeAgoFrom'
import Link from 'next/link'

const PetListItem = ({ item }) => {
    return (
        <article key={item.id} className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
            <div className='h-56 w-full'>
                <a href='#'>
                    <img
                        className='mx-auto h-full rounded-xl'
                        src={item.photos}
                        alt=''
                    />
                </a>
            </div>
            <div className='pt-3'>
                <div className='mb-4 flex items-center justify-between gap-4'>
                    {(() => {
                        if (item.status.toLowerCase() === 'lost') {
                            return (
                                <span className='uppercase me-2 rounded bg-red-200 px-2.5 py-0.5 text-xs font-bold text-red-800'>
                                    {item.status}
                                </span>
                            )
                        } else if (item.status.toLowerCase() === 'found') {
                            return (
                                <div className='flex items-center gap-1'>
                                    <span className='uppercase me-2 rounded bg-lime-200 px-2.5 py-0.5 text-xs font-bold text-lime-800'>
                                        {item.status}
                                    </span>
                                    <span className='relative flex h-3 w-3'>
                                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75'></span>
                                        <span className='relative inline-flex rounded-full h-3 w-3 bg-lime-500'></span>
                                    </span>
                                </div>
                            )
                        } else {
                            return (
                                <span className='uppercase me-2 rounded bg-primary-200 px-2.5 py-0.5 text-xs font-bold text-primary-800'>
                                    {item.status}
                                </span>
                            )
                        }
                    })()}
                    <div className='flex items-center justify-end gap-1'>

                        <span className='text-gray-500' title='Reward'>
                            $
                            {item.reward}
                        </span>
                        <button
                            type='button'
                            data-tooltip-target='tooltip-add-to-favorites'
                            className='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                            title='Add to Bookmark'
                        >
                            <span className='sr-only'> Add to Bookmark </span>
                            <TbBookmark className='h-5 w-5' />
                        </button>
                    </div>
                </div>
                <h4 className='text-lg font-semibold leading-tight text-gray-900'>

                    {item.name} ({item.specie._path.segments[1]})

                </h4>
                <p className='text-sm line-clamp-2 hover:line-clamp-none'>{item.description}</p>
                <div className='mt-2'>
                    <p className='text-xs font-medium text-gray-900'>
                        Seen on {item.dateLastSeen} <span className='text-gray-500'>
                            (<TimeAgoFrom date={item.dateLastSeen} /> ago)
                        </span>
                    </p>
                </div>
                <div className='mt-2 flex items-center gap-2000'>
                    <a
                        href={`https://www.google.com/maps/search/${item.ddLat}+${item.ddLon}`}
                        className='text-xs font-small text-gray-500 line hover:underline'
                        title='Show un Maps'
                        target='_blank'
                    >
                        <span>{item.areaLastSeen}</span> · {item.nearestLandmark}, {item.crossStreet}
                    </a>
                </div>
                <div className='mt-4 flex items-center justify-between gap-2'>
                    <Link href={`/pet-catalog/${item.id}`}
                        type='button'
                        className='w-full inline-flex justify-center items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
                    >
                        Details
                    </Link>
                    <a
                        type='button'
                        href={`https://www.facebook.com/sharer/sharer.php?u=HOSTNAME/${item.id}`}
                        className='w-full inline-flex justify-center items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'
                    >
                        <TbBrandFacebook className='-ms-2 me-2 h-4 w-4' />
                        Share
                    </a>
                </div>
            </div>
        </article>
    )
}

export default PetListItem