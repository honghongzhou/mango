import React, { useContext } from 'react';
import classNames from 'classnames';

import { TabContext } from './tab'


export interface TabItemProps {
    index: number;
    label?: string;
    disabled?: Boolean;
    className?: string;
}

const TabItem: React.FC<TabItemProps> = (props) => {
    const { children, index, label, disabled, className } = props
    const context = useContext(TabContext)
    const classes = classNames('tab-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })
    const handleClick = () => {
        if(context.onSelect && !disabled) {
            context.onSelect(index)
        }
    }
    return (
        <div className={classes}>
            <li onClick={handleClick}>
                <span>{label}</span>
            </li>
            {
                context.index === index && <div className='tab-content'>{children}</div>
            }
        </div>
    )
}

export default TabItem