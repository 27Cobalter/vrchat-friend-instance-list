import { InstanceLocation } from '../types'

export function getGroupIdFromLocation(
  location: InstanceLocation
): string | undefined {
  const match = /~group\(([^)]+)\)/.exec(location)
  return match?.[1]
}
