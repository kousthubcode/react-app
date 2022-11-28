import React from 'react'
import Options from './abilityOption.js'
const stuff = []


export default function Ability(props){
	// console.log(props)
	return(
		<section>
			<div className='hero-wrapper'>
				
			</div>
			<div className='ability-wrapper'>

				<div className='ability-vid'>
					<video loop muted autoPlay> 
						<source type="video/webm" src={props.item.vid} />
					</video>
				</div>

				<div className='ability-text'>
					<div className='ability-name'>
						<img src={props.item.img} /> <span className='ability-title'>{props.item.name}</span>
					</div>

					<div className='ability-desc'>{props.item.desc}</div>

					<Options item={props.stuff} func={props.func}/>
				</div>
			</div>
		
		</section>
	)
}