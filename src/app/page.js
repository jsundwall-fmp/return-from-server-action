import { ServerComponent } from './server-component'
import { ClientComponentWithSlot } from './client-component-with-slot'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4xl font-bold text-center">
        Testing returning a Server Component from a form action
      </h1>
        <ClientComponentWithSlot postId={1}>
          <ServerComponent postId={1} />
        </ClientComponentWithSlot>
    </main>
  )
}
