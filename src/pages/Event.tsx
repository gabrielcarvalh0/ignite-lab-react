import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { VideoPlay } from '../components/VideoPlay'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {/* desafio: carregar a primeira aula automaticamente */}
        {slug ? <VideoPlay lessonSlug={slug} /> : <div className="flex-1" />}

        <Sidebar />
      </main>
    </div>
  )
}
