export interface IMenuItemDefault {
  title: string
  type: 'link' | 'dropdown'
}

export interface IMenuLink extends IMenuItemDefault {
  type: 'link'
  href: string
}

export type DropdownOptions = IMenuLink | IMenuDropdown

export interface IMenuDropdown extends IMenuItemDefault {
  type: 'dropdown'
  options: DropdownOptions[]
}

export interface iMenuItem extends IMenuItemDefault {
  href?: string
  options?: DropdownOptions[]
}
