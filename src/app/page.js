import { JsonPlaceholder } from './server-wrapper'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4xl font-bold text-center">
        Testing returning a Server Component from a form action
      </h1>
      <JsonPlaceholder />
    </main>
  )
}
