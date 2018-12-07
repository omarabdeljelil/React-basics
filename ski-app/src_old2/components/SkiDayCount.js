import '../stylesheets/ui.scss'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaSnowflake } from 'react-icons/fa'
import { FaMountain } from 'react-icons/fa'
import { PropTypes } from 'react'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total=70, powder=20, 
							backcountry=10, goal=20}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
					<FaCalendarAlt />
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<FaSnowflake />
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<FaMountain />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
)

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number
}


