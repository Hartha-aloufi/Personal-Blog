import { getTerm } from '../lib/terms'
import Tooltip from 'react-simple-tooltip'
import colors from 'tailwindcss/colors'

const TermTip = (props) => {
  return (
    <Tooltip
      content={getTerm(props.t) || props.t}
      fadeDuration={150}
      background={colors.violet[500]}
      arrow={0}
      padding={4}
      radius={4}
      border=""
   >
      <span className="text-secondary-400 dark:text-secondary-300 cursor-pointer">
        {props.children}
      </span>
    </Tooltip>
  )
}

export default TermTip
