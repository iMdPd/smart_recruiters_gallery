export default function handleSkipLinksClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null;

  if (target?.tagName === 'BUTTON') {
    const targetId = target.getAttribute('data-location');
    const targetElement = document.getElementById(targetId!);

    if (targetElement) {
      console.log('Target Element:', targetElement);

      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const anchor = targetElement.parentElement?.querySelector('a, button') as HTMLElement | null;
      anchor?.focus();
    }
  }
}
