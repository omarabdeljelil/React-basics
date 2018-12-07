import { FaCalendarAlt } from 'react-icons/fa'
import { FaSnowflake } from 'react-icons/fa'
import { FaMountain } from 'react-icons/fa'
import { PropTypes } from 'react'

export const SkiDayRow = ({resort, date, 
							powder, backcountry}) => (
	<tr>
		<td>
			{date.getMonth()+1}/{date.getDate()}/
			{date.getFullYear()}
		</td>
		<td>
			{resort}
		</td>
		<td>
			{(powder) ? <FaSnowflake/> : null}
		</td>
		<td>
			{(backcountry) ? <FaMountain /> : null}
		</td>
	</tr>						

)

SkiDayRow.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	powder: PropTypes.bool,
	backcountry: PropTypes.bool
}


