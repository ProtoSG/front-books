import { Add } from '../../icons/Add'
import { AddPost } from './AddPost'

export const ButtonFooter = () => {

  const openDialog = () => {
    const dialog = document.getElementById('dialog-add-post')
    dialog?.showModal()
  }

  return (
    <>
      <footer className='fixed bottom-4 right-4 z-50'>
        <button
          onClick={openDialog}
          className='border-2 border-full border-primary bg-primary p-4 rounded-full hover:bg-primary/80 hover:scale-110 transition-all'>
          <Add />
        </button>
      </footer>
      <AddPost />
    </>
  )
}
