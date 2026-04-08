export default function Navbar() {
  return (
    <div
      className="fixed top-0 left-1/2 -translate-x-1/2 
    w-[72%] bg-black z-50
    border-l border-r border-b border-dashed border-gray-800
    px-10 py-3 flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-8 border border-gray-700 
        flex items-center justify-center text-[10px] text-white"
        >
          SG
        </div>

        <span className="text-[11px] text-gray-500">सुरज गावडे</span>
      </div>

      <span className="text-[10px] text-gray-400 tracking-widest">
        SOFTWARE ENGINEER
      </span>
    </div>
  );
}
