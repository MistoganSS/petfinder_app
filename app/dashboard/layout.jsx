import { auth } from '@clerk/nextjs/server'
import Header from '../components/Header'
import AsideMenu from './components/AsideMenu'
import { redirect } from 'next/navigation'

const layout = ({ children }) => {
  const { userId } = auth()
  if (!userId) return redirect('/sign-in')
  return (
    <>
      <Header dashboard={true} />
      <main className='flex items-start gap-1 lg:gap-5'>
        <AsideMenu />
        <div className='w-full px-1 py-4 lg:p-4'>{children}</div>
      </main>
    </>
  )
}

export default layout
