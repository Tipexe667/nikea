export function formatPrice(price: number): string {
  return (price / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
