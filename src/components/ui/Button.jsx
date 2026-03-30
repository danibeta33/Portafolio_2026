export function Button({
  bg = 'black',
  textColor = 'white',
  borderColor = 'white',
  shadow = 'white',
  className = '',
  type = 'button',
  onClick,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`themed-button ${className}`.trim()}
      style={{
        '--btn-bg': bg,
        '--btn-text': textColor,
        '--btn-border': borderColor,
        '--btn-shadow': shadow,
      }}
    >
      {children}
    </button>
  )
}
