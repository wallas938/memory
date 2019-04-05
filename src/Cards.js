import React from 'react'
import PropTypes from '../node_modules/prop-types'
import './Cards.css'

const HIDDEN_SYMBOL = '❓';

const Card = ({card, feedback, index, onClick}) => (
<div className={`card ${feedback}`} onClick={() => {onClick(index)}}> 
    <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL: card}
    </span>
</div>)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'hidden',
        'justMatched',
        'justMismatched'
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Card
