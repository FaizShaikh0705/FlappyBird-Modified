import React from 'react'

export default function Menu({ score, onPlay, onReplay, onReverse }) {
	return (
		<div className="menu c-wrap">
			<ul className="c-inner">
				<li>score: {score}</li>

				<li>
					<div className="btn" onMouseDown={onPlay} onTouchStart={onPlay}>play</div>
				</li>
				{ onReplay && 
					<li>
						<div className="btn" onMouseDown={onReplay} onTouchStart={onReplay}>replay</div>
					</li>
				}
				{ onReplay && 
					<li>
						<div className="btn" onMouseDown={onReverse} onTouchStart={onReverse}>reverse</div>
					</li>
				}
				{/* { onExit && 
					<li>
						<div className="btn" onMouseDown={onExit} onTouchStart={onExit}>reverse</div>
					</li>
				} */}
			</ul>
		</div>
	)
}