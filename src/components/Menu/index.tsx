import { FC } from 'react'
import Menu, { MenuProps } from './menu'
// import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './menuItem'

// TS交叉类型
export type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>,
    // SubMenu: FC<SubMenuProps>
}


// 类型断言
const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
// TransMenu.SubMenu = SubMenu

export default TransMenu
