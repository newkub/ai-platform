interface Bot {
  id: number
  name: string
  description: string
  author: string
  icon: string
  category: string
  tags: string[]
}

export const useBots = () => {
  const recommendedBots: Bot[] = [
    {
      id: 1,
      name: 'Writing Agent',
      description: 'Writing Agent provides text generation services to assist with various writing tasks.',
      author: 'Monica Team',
      icon: 'mdi:pencil',
      category: 'productivity',
      tags: ['Writing', 'AI', 'Productivity']
    },
    {
      id: 2,
      name: 'Document Assistant',
      description: 'Get summary of any document in seconds. Chat with document, ask questions, get answers.',
      author: 'Monica Team',
      icon: 'mdi:file-document',
      category: 'productivity',
      tags: ['Document', 'AI', 'Summary']
    },
    {
      id: 3,
      name: 'Travel Planner',
      description: 'Curates personalized travel recommendations based on your preferences.',
      author: 'Monica Team',
      icon: 'mdi:airplane',
      category: 'lifestyle',
      tags: ['Travel', 'Planning', 'AI']
    },
    {
      id: 4,
      name: 'Code Assistant',
      description: 'Your AI programming partner for code review and suggestions.',
      author: 'Monica Team',
      icon: 'mdi:code-braces',
      category: 'developer',
      tags: ['Coding', 'Development', 'AI']
    }
  ]

  const allBots: Bot[] = [
    ...recommendedBots,
    {
      id: 5,
      name: 'Design Helper',
      description: 'AI-powered design suggestions and feedback.',
      author: 'Monica Team',
      icon: 'mdi:palette',
      category: 'design',
      tags: ['Design', 'AI', 'Creative']
    },
    {
      id: 6,
      name: 'Research Assistant',
      description: 'Helps with academic research and paper writing.',
      author: 'Monica Team',
      icon: 'mdi:book',
      category: 'research',
      tags: ['Research', 'Academic', 'AI']
    },
    {
      id: 7,
      name: 'Marketing Copilot',
      description: 'Generate marketing copy and campaign ideas.',
      author: 'Monica Team',
      icon: 'mdi:bullhorn',
      category: 'marketing',
      tags: ['Marketing', 'Copy', 'AI']
    },
    {
      id: 8,
      name: 'Math Tutor',
      description: 'Step-by-step math problem solving and explanations.',
      author: 'Monica Team',
      icon: 'mdi:calculator',
      category: 'education',
      tags: ['Education', 'Math', 'AI']
    }
  ]

  const categories = [
    { id: 'top', name: 'Top' },
    { id: 'models', name: 'Models' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'developer', name: 'Developer' },
    { id: 'education', name: 'Education' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'design', name: 'Design' },
    { id: 'research', name: 'Research' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ]

  return {
    recommendedBots,
    allBots,
    categories
  }
}
