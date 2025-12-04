/**
 * Utility function to merge class names
 * Simple implementation without external dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format price to currency
 */
export function formatPrice(price: number): string {
  if (price === 0) return 'Custom';
  return `Rs. ${price.toLocaleString()}`;
}

/**
 * Scroll to section smoothly
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
