import React from 'react'
import classNames from 'classnames'


export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}

interface AlertProps {
    title: string;
    description?: string;
    type?: AlertType;
    onClose?: () => void;
    closable?: Boolean;
}

const Alert:React.FC<AlertProps> = (props) => {
    const { title, description, type, onClose, closable } = props
    const classes = classNames('alert', {
        [`alert-${type}`]: type,
    })
    return (
        <div className={classes}>
            <div className="flex">
                <span>{title}</span>
                {closable && <span onClick={onClose}>X</span>}
            </div>
            {description && <p>{description}</p>}
        </div>
    )
}
Alert.defaultProps = {
    title: 'default title',
    type: AlertType.Default,
    closable: true,
    onClose: () => {
        console.log('onClose')
    }
}
export default Alert
