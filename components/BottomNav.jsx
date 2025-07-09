export default function BottomNav() {
  return (
    <div className="fixed left-0 right-0 bg-white shadow-md p-3 flex justify-around">
      <button className="flex flex-col items-center text-sm">
      
        <span className="text-xs mt-1">یادداشت‌ها</span>
      </button>
      <button className="flex flex-col items-center text-sm">
        
        <span className="text-xs mt-1 font-bold">امروز</span>
      </button>
      <button className="flex flex-col items-center text-sm">
        
        <span className="text-xs mt-1">آرشیو</span>
      </button>
    </div>
  );
}
