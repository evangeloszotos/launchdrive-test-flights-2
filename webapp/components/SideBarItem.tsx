import clsx from "clsx";

export type SideBarItemProps = {
  selected?: boolean;
  name: string;
  icon: any;
  onClick: any;
};

const styles =
  "flex items-center p-4 rounded-lg hover:text-indigo-200 hover:bg-indigo-700";

export const SideBarItem: React.FC<SideBarItemProps> = (props) => {
  const { name, icon: IconElement, selected, onClick, ...other } = props;

  return (
    <div
      key={name}
      onClick={onClick}
      className={clsx(styles, {
        "text-indigo-500": !selected,
        "bg-indigo-700": selected,
        "text-indigo-100": selected,
      })}
      {...other}
    >
      <IconElement className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">{name}</span>
    </div>
  );
};

export default SideBarItem;
