export function Projectile({ projectile }) {
  return (
    <span
      className="minigame-projectile"
      style={{
        transform: `translate3d(${projectile.x}px, ${projectile.y}px, 0)`,
      }}
    />
  )
}
