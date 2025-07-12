export default function EditionSelector({ editions, selectedId, onSelect }) {
  function toPersianNumber(number) {
    return number.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
  }

  return (
    <div className="p-2 rounded-lg flex gap-2 justify-start overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400">
      {editions.map((ed) => (
        <button
          key={ed.id}
          onClick={() => onSelect(ed.id)}
          className={`w-10 h-10 rounded-xl text-lg font-bold transition shrink-0 ${
            selectedId === ed.id
              ? 'bg-gray-200 text-black'
              : 'bg-white text-gray-800 hover:bg-gray-200'
          }`}
        >
          {toPersianNumber(ed.number)}
        </button>
      ))}
    </div>
  );
}
