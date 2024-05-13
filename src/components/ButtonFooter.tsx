import { Add } from '../icons/Add'

export const ButtonFooter = () => {
  return (
    <footer className='fixed bottom-4 right-4 z-50'>
      <button className='border-2 border-full border-primary bg-primary p-4 rounded-full hover:bg-primary/80 hover:scale-110 transition-all'>
        <Add />
      </button>
    </footer>
  )
}
