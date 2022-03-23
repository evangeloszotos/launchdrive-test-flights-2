import {
  ArchiveIcon,
  BanIcon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  PencilAltIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
import SideBar from '../components/SideBarLegacy';
import SideBarItem from '../components/SideBarItem';

export default function ColumnsExample() {
  return (
    <div className="flex flex-row">
      <SideBar>
        <SideBarItem name="Home" icon={BanIcon} onClick={() => console.log('Clicked')} />
        <SideBarItem selected={true} name="Home" icon={BellIcon} onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" icon={InboxIcon} onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" icon={ArchiveIcon} onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" icon={UserCircleIcon} onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" icon={FlagIcon} onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" icon={PencilAltIcon} onClick={() => console.log('Clicked')} />
      </SideBar>

      <div className="w-64 bg-green-100">Testbuilder</div>
      <div className="w-80 bg-green-200">Value Proposition</div>
      <div className="w-full bg-green-300">Preview</div>
    </div>
  );
}
