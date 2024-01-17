import { SideNavItemGroup } from '@/root/types'

import { cn } from '@/lib/utils'
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle'
import { SideBarMenuItem } from '@/components/dashboard-admin/sidebar-menu-item'

const SideBarMenuGroup = ({ menuGroup }: { menuGroup: SideNavItemGroup }) => {
  const { toggleCollapse } = useSideBarToggle()

  const menuGroupTitleSyle = cn(
    'text-sidebar-foreground items-center py-4 text-sm font-medium uppercase tracking-[.1rem]',
    {
      'text-center self-center': toggleCollapse,
    }
  )
  return (
    <>
      <h3 className={menuGroupTitleSyle}>
        {!toggleCollapse ? menuGroup.title : '...'}
      </h3>
      {menuGroup.menuList?.map((item, index) => {
        return <SideBarMenuItem key={index} item={item} />
      })}
    </>
  )
}

export default SideBarMenuGroup
