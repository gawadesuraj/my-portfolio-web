export default function Sidebar() {
  return (
    <aside className="fixed left-[20%] top-[90px] w-[28%]">
      <div className="w-[280px]">
        {/* profile */}
        <img
          src="https://i.pravatar.cc/300"
          alt="profile"
          className="w-48 h-48 rounded-xl object-cover grayscale"
        />

        {/* name */}
        <h1 className="text-5xl text-white mt-6 font-semibold tracking-tight">
          Suraj
        </h1>

        {/* role */}
        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          full-stack software engineer for the{" "}
          <span className="text-white">web</span> and{" "}
          <span className="border border-dashed border-gray-600 px-1">
            mobile
          </span>
        </p>

        <div className="border-t border-dashed border-gray-700 my-6" />

        <div className="flex gap-4 text-gray-400">
          <Icon>G</Icon>
          <Icon>L</Icon>
          <Icon>T</Icon>
          <Icon>M</Icon>
        </div>
      </div>
    </aside>
  );
}

function Icon({ children }) {
  return (
    <div className="w-9 h-9 border border-gray-800 flex items-center justify-center hover:border-gray-500 transition">
      {children}
    </div>
  );
}
