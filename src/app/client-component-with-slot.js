'use client'
import { useFormState } from 'react-dom'
import { serverAction } from './form-action'

export function ClientComponentWithSlot({ data, children }) {
  const [node, formAction] = useFormState(serverAction.bind(null, {postId: data.id + 1}), null)
  
  return (
    <>
      {children}
      {/* If we have a node, we don't want to display the button any more. The new node will render a new button to fetch the next data */}
      {node ? node : (
      <form action={formAction} >
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get more posts
        </button>
      </form>
      )}
    </>
  )
}
