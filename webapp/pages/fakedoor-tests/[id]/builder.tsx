import { useRouter } from 'next/router';
import SideBar from '../../../components/SideBarLegacy';
import SideBarItem from '../../../components/SideBarItem';

export default function ColumnsExample() {
  const { query } = useRouter();

  return (
    <div className="flex flex-row">
      <SideBar className="myclass">
        <SideBarItem name="Home" onClick={() => console.log('Clicked')} />
        <SideBarItem
          selected={true}
          name="Home"
          onClick={() => console.log('Clicked')}
        />
        <SideBarItem name="Home" onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" onClick={() => console.log('Clicked')} />
        <SideBarItem name="Home" onClick={() => console.log('Clicked')} />
      </SideBar>

      <div className="w-64 bg-green-100">
        Testbuilder
        {query.id}
      </div>
      <div className="w-80 bg-green-200">Value Proposition</div>
      <div className="w-full bg-green-300">Preview</div>
    </div>
  );
}
