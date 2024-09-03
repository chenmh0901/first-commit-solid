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
    <ul class="w-1/3 h-full flex flex-1 items-center justify-center">
      {naviItems.map((item: NaviItem) => (
        <li class="mx-4">
          <a href={item.path} class="hover:text-gray">{item.name || item.path}</a>
        </li>
      ))}
    </ul>
  );
};
