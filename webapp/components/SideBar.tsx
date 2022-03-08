import clsx from "clsx";

export const SideBar = (props) => {
  const { children, className, ...other } = props;

  return (
    <div
      className={clsx("hidden lg:flex lg:flex-shrink-0", className)}
      {...other}
    >
      <div className="flex flex-col w-20">
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-white">
          {/* </div><div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-indigo-600"> */}
          <div className="flex-1">
            <nav
              aria-label="Sidebar"
              className="py-6 flex flex-col items-center space-y-3"
            >
              {children}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
