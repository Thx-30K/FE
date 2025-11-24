export function saveHistory(title: string) {
  const prev = JSON.parse(localStorage.getItem('history') || '[]');

  const updated = [
    { title },
    ...prev.filter((item: { title: string }) => item.title !== title),
  ];

  localStorage.setItem('history', JSON.stringify(updated));
}
