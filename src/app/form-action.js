'use server'

import { JsonPlaceholder } from "./server-wrapper"

export async function serverAction({postId}) {
  return <JsonPlaceholder postId={postId} />
}
