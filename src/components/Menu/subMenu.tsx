import React, { useContext, useState, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  //   index?: number;
  index?: string;
  title?: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const context = useContext(MenuContext);

  //   当vertical模式下，默认展示某个二级菜单
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpend =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;

  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });

  //   const [menuOpen, setOpen] = useState(false);
  const [menuOpen, setOpen] = useState(isOpend);
  //   点击进行展示和隐藏
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  //   鼠标hover的时候展示隐藏
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classNames("viking-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        // return childElement;
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error("Warning: SubItem has a child which is not a MenuItem");
      }
    });

    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
