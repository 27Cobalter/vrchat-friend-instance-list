import { InstanceLocation } from '../../types'
import { Instance } from '../../presentations/types'

export type FriendLocation = {
  id: string
  instance?: Instance
  friends: Friend[]
}

export type Friend = {
  id: string
  username?: string
  displayName: string
  currentAvatarImageUrl: string | null
  iconUrl?: string | null
  currentAvatarThumbnailImageUrl?: string | null
  profilePicOverride?: string | null
  location: InstanceLocation
  canJoin: boolean
}

export interface IFriendLocationsRepository {
  fetchFriendLocations(): Promise<FriendLocation[]>
}
