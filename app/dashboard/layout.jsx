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
      <main className='flex items-start gap-5'>
        <AsideMenu />
        <div className='p-4'>{children}</div>
      </main>
    </>
  )
}

export default layout
