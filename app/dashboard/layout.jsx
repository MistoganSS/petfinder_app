import Header from '../components/Header'
import AsideMenu from './components/AsideMenu'

const layout = ({ children }) => {
  return (
    <>
      <Header dashboard={true} />
      <main className='flex gap-5'>
        <AsideMenu />
        <div className='p-4 sm:ml-64'>
          {children}
        </div>
      </main>
    </>
  )
}

export default layout
