'use server'

import { ClientComponentWithSlot } from "./client-component-with-slot"
import { ServerComponent } from "./server-component"

export async function serverAction({postId}) {
  
  return (
    <ClientComponentWithSlot postId={postId}>
      <ServerComponent postId={postId} />
    </ClientComponentWithSlot>
  )
}
