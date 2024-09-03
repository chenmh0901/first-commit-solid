import { Nav } from './nav';
import { Button } from '~/components/ui/button';

export const Header = () => {
  return (
    <>
      <div class="sticky left-0 top-0 h-16 w-screen border-b backdrop-blur-lg">
        <div class='max-w-[1200px] mx-auto flex justify-between items-center h-full'>
          <a class="w-1/6 flex items-center gap-2 hover:cursor-pointer">
            <img src="/public/favicon.ico" alt="logo" class="w-7" />
            <span class="text-lg font-bold">First commit</span>
          </a>
          <Nav />
          <div class='flex gap-2'>
            <Button variant={'default'}>Sign in</Button>
            <Button variant={'default'}>Sign up</Button>
          </div>
        </div>
      </div>
    </>
  );
};
