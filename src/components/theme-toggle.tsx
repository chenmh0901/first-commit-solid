import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { Button } from './ui/button'
import { Icon } from '@iconify-icon/solid'
import { useColorMode, ConfigColorMode } from "@kobalte/core"

export interface ThemeItem {
  name: string;
  icon: string;
  mode: ConfigColorMode;
}
export const ThemeToggle = () => {
  const { setColorMode } = useColorMode()
  const themeItems: ThemeItem[] = [
    {
      name: 'Light',
      icon: 'material-symbols-light:sunny-outline-rounded',
      mode: 'light'
    },
    {
      name: 'Dark',
      icon: 'ph:moon',
      mode: 'dark'
    },
    {
      name: 'System',
      icon: 'fluent:laptop-16-regular',
      mode: 'system'
    },
  ];
  return (
    <>
      <DropdownMenu placement="bottom">
        <DropdownMenuTrigger>
          <Button variant={'ghost'} size={'icon'}>
            <Icon icon="material-symbols-light:sunny-outline-rounded" height={'20px'} width={'20px'} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent >
          {themeItems.map((item: ThemeItem) => (
            <DropdownMenuItem onClick={() => setColorMode(item.mode)}>
              <Icon icon={item.icon} height={'20px'} width={'20px'} />
              <span class="ml-2">{item.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu >
    </>
  )
}
