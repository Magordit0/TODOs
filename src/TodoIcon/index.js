import { ReactComponent as ChackSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <ChackSVG   className='Icon-svg' fill={color} />,
    "delete":(color) =>  <DeleteSVG className='Icon-svg' fill={color} />
}

function TodoIcon({ type, color, onClick }) {
    return(
        <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon};