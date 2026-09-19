import { useState } from 'react'
import { User } from '../../../types'

type Props = {
  className?: string
  user: User
}
export const UserImageComponent = ({ user, className = '' }: Props) => {
  const [failed, setFailed] = useState(false)

  const url =
    user.profilePicOverride || user.iconUrl || user.currentAvatarThumbnailImageUrl || ''

  if (!url || failed) {
    return (
      <svg
        className={className}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: '#555' }}
      >
        <circle cx="20" cy="16" r="8" fill="#999" />
        <ellipse cx="20" cy="36" rx="14" ry="10" fill="#999" />
      </svg>
    )
  }

  return (
    <img
      className={className}
      src={url}
      alt=""
      onError={() => setFailed(true)}
    />
  )
}
