import React from 'react'


class NextPrev extends React.Component {

    NextArrow(props) {
	const {className, style, onClick} = props
	return (
		<div
	    className={className}
	    style={{...style, display: 'block', background: 'red'}}
	    onClick={onClick}
		></div>
	);
    }

    PrevArrow(props) {
	const {className, style, onClick} = props
	return (
		<div
	    className={className}
	    style={{...style, display: 'block', background: 'green'}}
	    onClick={onClick}
		></div>
	);
    }

    
}
