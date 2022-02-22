import { getTerm } from '../lib/terms'
import Tooltip from 'react-simple-tooltip'
import colors from 'tailwindcss/colors'
import { useEffect } from 'react'

const TipContent = (props) => {
  return <div className="whitespace-nowrap">{props.content}</div>
}

let cnt = 0

const TermTip = (props) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Nubmer of terms:', ++cnt)
    }
  }, [])

  return (
    <Tooltip
      content={<TipContent content={getTerm(props.t)?.en || props.t} />}
      fadeDuration={150}
      background={colors.cyan[700]}
      arrow={0}
      padding={4}
      radius={2}
      border="none"
      ope
    >
      <span className="text-secondary-700 dark:text-secondary-600 leading-3 cursor-pointer ">
        {props.children}
      </span>
    </Tooltip>
  )
}

export default TermTip
