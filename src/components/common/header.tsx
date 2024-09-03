import { ThemeToggle } from '../theme-toggle';
import { Nav } from './nav';
import { Button } from '~/components/ui/button';

export const Header = () => {
  return (
    <>
      <div class="sticky left-0 top-0 h-16 w-screen border-b backdrop-blur-lg">
        <div class='max-w-[1200px] h-full mx-auto px-4 flex gap-2 justify-between items-center'>
          <a class="flex items-center gap-2 hover:cursor-pointer">
            <img src="/public/favicon.ico" alt="logo" class="w-7" />
            <span class="text-lg font-bold hidden md:block">First commit</span>
          </a>
          <Nav />
          <ThemeToggle />
          <div class="gap-2 hidden md:flex">
            <Button variant={'default'}>Sign in</Button>
            <Button variant={'default'}>Sign up</Button>
          </div>
        </div>
      </div>
    </>
  );
};
