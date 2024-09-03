import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { Button } from './ui/button'
import { Icon } from '@iconify-icon/solid'
import { useColorMode, ConfigColorMode } from "@kobalte/core"
import { createSignal, createEffect } from "solid-js";

export interface ThemeItem {
  name: string;
  icon: string;
  mode: ConfigColorMode;
}
export const ThemeToggle = () => {
  const { colorMode, setColorMode } = useColorMode()
  const [selectedTheme, setSelectedTheme] = createSignal<ThemeItem>(
    {
      name: 'Light',
      icon: 'material-symbols-light:sunny-outline-rounded',
      mode: 'light'
    }
  )

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

  createEffect(() => {
    const currentTheme = themeItems.find((item: ThemeItem) => item.mode === colorMode())
    if (currentTheme) setSelectedTheme(currentTheme)
  })
  return (
    <>
      <DropdownMenu placement="bottom">
        <DropdownMenuTrigger>
          <Button variant={'ghost'} size={'icon'}>
            <Icon icon={selectedTheme().icon} height={'20px'} width={'20px'} />
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
