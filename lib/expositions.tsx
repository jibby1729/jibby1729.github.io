import { ReactNode } from 'react'

export interface Exposition {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content: ReactNode
  readTime?: string
}

export const expositions: Exposition[] = [
  {
    slug: 'sample-exposition',
    title: 'I will write something here someday',
    description: 'A sample exposition demonstrating the structure and formatting for academic writing.',
    date: '2024-01-15',
    tags: ['Mathematics', 'Academic Writing', 'Sample'],
    readTime: '5 min read',
    content: (
      <div className="prose prose-invert max-w-none">
        <p>
          Paragraph 1
        </p>
        
        <h2>Mathematical Notation</h2>
        <p>
          You can include mathematical expressions and formulas. For example, the famous
          equation E = mc² or more complex expressions like:
        </p>
        
        <p className="text-center font-mono text-lg">
          LaTe
        </p>
        
        <h2>Code Examples</h2>
        <p>
          Code snippet:
        </p>
        
        <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}</code>
        </pre>
        
        <h2>Structured Content</h2>
        
        <ul>
          <li>Main theorem statement</li>
          <li>Proof outline</li>
          <li>Detailed proof</li>
          <li>Corollaries and implications</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          End
        </p>
      </div>
    )
  }
]

export function getExpositionBySlug(slug: string): Exposition | undefined {
  return expositions.find(exposition => exposition.slug === slug)
}

export function getAllExpositions(): Exposition[] {
  return expositions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}