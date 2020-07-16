import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

import Alert, { AlertType } from "./components/Alert/alert";

import Tab from "./components/Tab/tab";
import TabItem from "./components/Tab/tabItem";

// Explicit Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

import Icon from "./components/Icon/icon";

// Build a Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <p> Font Awesome</p>
      {/* Font Awesome */}
      <FontAwesomeIcon icon={faAdjust} size="10x" />
      <p> Menu </p>
      {/* Menu */}
      <Menu
        defaultIndex={"0"}
        defaultOpenSubMenus={["3"]}
        onSelect={(index) => {
          alert(index);
        }}
      >
        {/* <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem index={1} disabled>
          cool link2
        </MenuItem>
        <MenuItem index={2}>cool link3</MenuItem> */}
        <MenuItem>cool link1</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <MenuItem>cool link3</MenuItem>
        <SubMenu title="dropDown">
          <MenuItem>dropDown1</MenuItem>
          <MenuItem>dropDown1</MenuItem>
        </SubMenu>
        <li>这里不是MenuItem类型的，会出现warning</li>
      </Menu>
      <p>Button</p>
      {/* Button */}
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        Baidu Link
      </Button>
      <p>Alert</p>
      {/* Alert */}
      <Alert title="alert title" type={AlertType.Default}></Alert>
      <Alert
        title="title"
        type={AlertType.Success}
        description="a paragraph description"
      ></Alert>
      <Alert title="alert title" type={AlertType.Danger}></Alert>
      <Alert title="alert title" type={AlertType.Warning}></Alert>
      <p>Tab</p>
      {/* Tab */}
      <Tab defaultIndex={0}>
        <TabItem index={0} label="Tab one">
          Tab1 Content
        </TabItem>
        <TabItem index={1} label="Tab two">
          Tab2 Content
        </TabItem>
        <TabItem index={2} label="Tab three">
          Tab3 Content
        </TabItem>
      </Tab>
      <p>Icon</p>
      {/* Icon */}
      <Icon icon={faAdjust} theme="danger" size="6x"></Icon>
    </div>
  );
}

export default App;
