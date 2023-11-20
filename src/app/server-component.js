export async function ServerComponent({ postId }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = await res.json()

  if(!data) return null

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
