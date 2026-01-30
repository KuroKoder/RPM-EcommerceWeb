export function InfoBlock({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-5">
      <p className="text-sm font-medium">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-black" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
