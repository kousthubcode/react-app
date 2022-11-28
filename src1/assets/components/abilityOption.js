import React from 'react'

export default function Options(props) {
	// console.log(props.item[0].ele)
	// console.log(props)
	return(
			<div className='ability-option'>

				<div onClick={()=>props.func(props.item[0].ele.key)}><img src={props.item[0].ele.img}  className={props.item[0].ele.on ? 'notGray' : 'gray'}/></div>
						
				<div onClick={()=>props.func(props.item[1].ele.key)}><img src={props.item[1].ele.img}  className={props.item[1].ele.on ? 'notGray' : 'gray'}/></div>
						
				<div onClick={()=>props.func(props.item[2].ele.key)}><img src={props.item[2].ele.img}  className={props.item[2].ele.on ? 'notGray' : 'gray'}/></div>
						
				<div onClick={()=>props.func(props.item[3].ele.key)}><img src={props.item[3].ele.img}  className={props.item[3].ele.on ? 'notGray' : 'gray'}/></div>
	
						
			</div>


	)
}