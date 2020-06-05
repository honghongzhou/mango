import React, { useState, createContext } from 'react';
import classNames from 'classnames'

type TabType = 'line' | 'card';
type SelectCallback = (selectIndex:number) => void

export interface TabProps {
    defaultIndex?: number;
    className?: string;
    onSelect?: SelectCallback;
    type?: TabType;
}

interface ITabContext {
    index: number,
    onSelect?: SelectCallback
}
export const TabContext = createContext<ITabContext>({index: 0})

const Tab: React.FC<TabProps> = (props) => {
    const { className, type, onSelect, defaultIndex, children } = props
    const [currentActive, setActive ] = useState(defaultIndex)
    const classes = classNames('tab', className, {
        'tab-card': type === 'card'
    })

    const handleClick = (index:number) => {
        setActive(index)
        if(onSelect) {
            onSelect(index)
        }
    }
    const passedContext: ITabContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    }
    return (
        <ul className={classes}>
            <TabContext.Provider value={passedContext}>{children}</TabContext.Provider>
        </ul>
    )
}

Tab.defaultProps = {
    type: 'line',
    defaultIndex: 0
}

export default Tab