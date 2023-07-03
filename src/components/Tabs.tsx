import React, { FC, useState, ReactNode } from 'react'
import classNames from 'classnames';



type Panel = {
  name: string,
  content: FC,
}

const Tabs: FC<{ panels: Panel[] }> = ({ panels }) => {

  const [activeTab, setActiveTab] = useState(panels[0]?.name);
  const ActiveContet = panels.find(({name}) => name=== activeTab)?.content;

  return (
    <div>
      {/*tabs */}
      {panels.map(panel => (
        <div
        onClick={() => setActiveTab(panel.name)}
          key={panel.name}
          className={classNames(" hover:bg-gray-400  bg-white cursor-pointer inline-block px-2 py-2 border rounded-t-lg border-t-gray-400 border-l-gray-400 border-b-0 mr-2",
         panel.name === activeTab && "bg-gray-400 font-bold text-white")}
        >
          {panel.name}
        </div>
      ))}

      {/*tab */}
      <div className=" p-2 ">
        {ActiveContet && < ActiveContet />}
      </div>
      

    </div>
  )
}

export default Tabs