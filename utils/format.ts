export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('th-TH').format(num)
}
