/**
 * Warning block component
 */

const Warn = (props) => {
  return (
    <div
      className="bg-orange-100 dark:bg-amber-500 border-s-4 border-orange-500 dark:border-orange-600 
                 font-bold text-orange-500 dark:text-gray-100 px-4 pt-4 pb-1 text-sm mt-40"
      role="alert"
    >
      <span className="text-orange-600 text-lg">تنويه</span>
      {props.children}
    </div>
  )
}

export default Warn
