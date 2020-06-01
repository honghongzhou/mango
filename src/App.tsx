import React from 'react';
import Button, { ButtonType, ButtonSize} from './components/Button/button'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      {/* Menu */}
      <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
        <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem index={1} disabled>cool link2</MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
      </Menu>
      {/* Button */}
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Baidu Link</Button>
    </div>
  );
}

export default App;
