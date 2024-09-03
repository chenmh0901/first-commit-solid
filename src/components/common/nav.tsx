import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "~/components/ui/dropdown-menu"
import { Button } from '~/components/ui/button'
import { Icon } from '@iconify-icon/solid'

export interface NaviItem {
  name?: string;
  path: string;
}

export const Nav = () => {
  const naviItems: NaviItem[] = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Road',
      path: '/road'
    },
    {
      name: 'Start-repo',
      path: '/start'
    },
    {
      name: 'Trending',
      path: '/trending'
    }
  ];

  return (
    <>
      <ul class="w-1/3 h-full flex-1 items-center justify-center hidden md:flex">
        {naviItems.map((item: NaviItem) => (
          <li class="mx-4">
            <a href={item.path} class="hover:text-gray">{item.name || item.path}</a>
          </li>
        ))}
      </ul>
      <div class="md:hidden ml-auto">
        <DropdownMenu placement="bottom">
          <DropdownMenuTrigger>
            <Button variant={'ghost'} size={'icon'}>
              <Icon icon="ic:sharp-menu" height={'20px'} width={'20px'} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {naviItems.map((item: NaviItem) => (
              <DropdownMenuItem>
                <a href={item.path} class="hover:text-gray">{item.name || item.path}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
