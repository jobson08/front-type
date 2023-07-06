import React, { FC, ReactNode, useState} from 'react'
import classNames from 'classnames';

type Panel = {
  name: string,
  content: ReactNode,
}

const Tabs: FC<{ panels: Panel[] }> = ({ panels }) => {

  const [activeTab, setActiveTab] = useState(panels[0]?.name);
  const ActiveContet = panels.find(({name}) => name=== activeTab)?.content;

  return (
    <div>
      {/*tabs */}
     <div className="flex justify-center">
      {panels.map(panel => (
       <div
        onClick={() => setActiveTab(panel.name)}
          key={panel.name}
          className={classNames("text-center hover:bg-gray-400  bg-white py-2 px-4 m-1 cursor-pointer rounded-lg ",
         panel.name === activeTab && "bg-gray-400 font-bold text-white shadow-md ")}
        >
          {panel.name}
      </div>
        
      ))}
</div>
      {/*tab */}
      <div className=" p-2 mt-2 ">
        {ActiveContet }
      </div>
    </div>
  )
}

export default Tabs
{/* py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 */}