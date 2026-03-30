export function Bubble({ direction = 'left', bg = 'black', textColor = 'white', borderColor = 'white', children }) {
  return (
    <div
      className={`speech-bubble speech-bubble-${direction}`}
      style={{
        backgroundColor: bg,
        color: textColor,
        borderColor,
        '--bubble-bg': bg,
        '--bubble-border': borderColor,
      }}
    >
      {children}
    </div>
  )
}
