import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string 
  availableAt: Date
  type: 'live' | 'class'
}
export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLassonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR },
  )

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300"> {availableDateFormatted}</span>
      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          {
            'bg-green-500': isActiveLesson,
          },
        )}
      >
        <header className="flex itemns-center justify-between">
          {isLassonAvailable ? (
            <span className="flex itemns-center gap-2  text-sm text-blue-500 font-medium">
              <CheckCircle size={20}></CheckCircle>
              Contúdo liberado
            </span>
          ) : (
            <span className="flex itemns-center gap-2  text-sm text-orange-500 font-medium">
              <Lock size={20}></Lock>
              Em breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  )
}
