export default function BentoGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-auto gap-[var(--grid-gap)] max-w-7xl mx-auto px-4 md:px-6">
      {children}
    </div>
  );
}
