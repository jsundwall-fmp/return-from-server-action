'use client'
import {useFormState} from 'react-dom'
import { serverAction } from './form-action'

export function ClientComponentWithSlot({ postId, children }) {
  const action = serverAction.bind(null, {postId: postId + 1})
  const [node, formAction] = useFormState(action, null)
  
  return (
    <>
        {children}
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
