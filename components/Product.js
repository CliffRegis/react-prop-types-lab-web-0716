import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component{

render(){
	return(
		<div>
		<h1>{this.props.name}</h1>
		</div>
		)
}
}



// function TweetLength(props, propName, componentName) {  
//   componentName = comopnentName || 'ANONYMOUS';

//   if (props[propName]) {
//     let value = props[propName];
//     if (typeof value === 'string') {
//         return value.length <= 140 ? null : new Error(propName + ' in ' + componentName + " is longer than 140 characters");
//     }
//   }

//   // assume all ok
//   return null;
// }

function weightNum(props, propName, componentName){
	  componentName = componentName || 'ANONYMOUS';

	if (props[propName])
	   {
			let value = props[propName];
			if (typeof value === 'number')
			{
			   if (value < 80 || value > 300) 
			   {
			 	  return new Error(propName + ' in ' + componentName + " not in range")
			   }
			}
			

		  else
		 	 {
		 	 	return new Error(propName + ' in ' + componentName + " must be a number")
		 	 }

	 	  
	 	}
	else
	 	  	{
	 	  		return new Error(propName + ' in ' + componentName + " must exist")
	 	  	}
	
	return null;  
}


Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	weight: weightNum,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired
}


module.exports = Product

