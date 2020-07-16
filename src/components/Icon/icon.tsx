import React from 'react';
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps  } from '@fortawesome/react-fontawesome'


export type ThemProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps  {
    theme?: ThemProps
}
const Icon: React.FC<IconProps>  = (props) => {
    const { className, theme, ...restProps } = props
    const classes = classNames('viking-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps}  />
    )
}

export default Icon

// extends 接口继承， 从一个接口复制成员到另一个接口，可以接承多个接口
// 可以更灵活的将接口分割到可重用的模块里