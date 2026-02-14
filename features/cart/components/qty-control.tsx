type Props = {
  qty: number;
  onChange: (qty: number) => void;
};

export function QtyControl({ qty, onChange }: Props) {
  function dec() {
    onChange(Math.max(1, qty - 1));
  }

  function inc() {
    onChange(Math.min(99, qty + 1));
  }

  return (
    <div className="inline-flex items-center rounded border bg-white">
      <button
        type="button"
        onClick={dec}
        className="h-9 w-9 text-sm hover:bg-neutral-50"
      >
        −
      </button>

      <span className="w-10 text-center text-sm">
        {qty}
      </span>

      <button
        type="button"
        onClick={inc}
        className="h-9 w-9 text-sm hover:bg-neutral-50"
      >
        +
      </button>
    </div>
  );
}
