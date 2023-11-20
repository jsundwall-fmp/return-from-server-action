import { ClientComponentWithSlot } from './client-component-with-slot'

const Display = ({data}) => {
  return (
    <>
      <h3 className="font-bold text-center">
        {data.title}
      </h3>

      <p className="text-center">
        {data.body}
      </p>
    </>
  )
}

export async function JsonPlaceholder({postId = 1}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = await res.json()

  if (!data) return null

  if (data.id > 4) return <Display data={data} />
  
  return (
    <ClientComponentWithSlot data={data}>
      <Display data={data} />
    </ClientComponentWithSlot>
  )
}
