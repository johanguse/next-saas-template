import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupList,
  AvatarImage,
  AvatarOverflowIndicator,
} from '@/components/ui/avatar'

export function AvatarsGroup() {
  return (
    <AvatarGroup limit={4} className="mx-auto justify-center">
      <AvatarGroupList>
        {Array.from({ length: 6 }).map((_, i) => (
          <Avatar key={i}>
            <AvatarImage
              src={`https://i.pravatar.cc/120?img=${i}`}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroupList>
      <AvatarOverflowIndicator />
    </AvatarGroup>
  )
}
