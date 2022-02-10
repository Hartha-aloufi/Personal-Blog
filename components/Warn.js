/**
 * Warning block component
 */

const Warn = (props) => {
  return (
    <div
      className="bg-orange-100 dark:bg-amber-500 border-s-4 border-orange-500 dark:border-orange-600 font-bold text-orange-500 dark:text-gray-100 px-4 py-6 text-sm mt-40"
      role="alert"
    >
      {props.children}
    </div>
  )
}

export default Warn
