import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { getExpositionBySlug, getAllExpositions } from '@/lib/expositions'
import { Metadata } from 'next'

interface ExpositionPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ExpositionPageProps): Promise<Metadata> {
  const { slug } = await params
  const exposition = getExpositionBySlug(slug)
  
  if (!exposition) {
    return {
      title: 'Exposition Not Found',
      description: 'The requested exposition could not be found.',
    }
  }

  return {
    title: `${exposition.title} | Jibran Iqbal Shah`,
    description: exposition.description,
    keywords: exposition.tags.join(', '),
  }
}

export async function generateStaticParams() {
  const expositions = getAllExpositions()
  return expositions.map((exposition) => ({
    slug: exposition.slug,
  }))
}

export default async function ExpositionPage({ params }: ExpositionPageProps) {
  const { slug } = await params
  const exposition = getExpositionBySlug(slug)

  if (!exposition) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects & Expositions
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{exposition.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{exposition.description}</p>
        
        {/* Metadata */}
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(exposition.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          
          {exposition.readTime && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {exposition.readTime}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {exposition.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <article className="mb-12">
        <div className="prose prose-invert prose-lg max-w-none">
          {exposition.content}
        </div>
      </article>

      {/* Footer Navigation */}
      <footer className="border-t border-border pt-8">
        <div className="flex justify-between items-center">
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects & Expositions
          </Link>
          
          <div className="text-sm text-muted-foreground">
            © 2024 Jibran Iqbal Shah
          </div>
        </div>
      </footer>
    </div>
  )
}