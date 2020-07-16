import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectIndex: string) => void;

export interface MenuProps {
  //   defaultIndex?: number;  原来是一级菜单  显示 1，2，3，后来加入2级菜单 1-0 1-2
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}

interface IMenuContext {
  //   index: number;
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

// export const MenuContext = createContext<IMenuContext>({ index: 0 });
export const MenuContext = createContext<IMenuContext>({
  index: "0",
});

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("viking-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  //检验children只能是MenuItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        // return child;
        // 去除在使用时menu-item上的index
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };

  return (
    <div>
      {/* <FontAwesomeIcon icon="coffee" size="10x" /> */}
      {/* <FontAwesomeIcon icon={['fab','adn']} size="10x" /> */}
      <ul className={classes} style={style} data-testid="test-menu">
        <MenuContext.Provider value={passedContext}>
          {/* {children} */}
          {renderChildren()}
        </MenuContext.Provider>
      </ul>
    </div>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  defaultOpenSubMenus: [],
  //   mode: "horizontal",
  mode: "vertical",
};

export default Menu;

// React Context传递参数
// React Hook
