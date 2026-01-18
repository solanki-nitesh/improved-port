export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function calculateDuration(startDate: string, endDate?: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  // Adjust if months are negative
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Adjust if the day hasn't occurred yet this month
  if (end.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }
  
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }
  
  // If less than a month, show days
  if (parts.length === 0) {
    const days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'}`;
    }
    return "Less than a day";
  }
  
  return parts.join(' ');
}
