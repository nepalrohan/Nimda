import React, { ReactNode } from 'react';

interface CommandProps {
  children: ReactNode;
  className?: string;
}




interface CustomCommandProps {
  children: ReactNode;
  className?: string;
}
export const Command = ({ children, className }: CommandProps) => {
  return <div className={className}>{children}</div>;
}; 


export const CustomCommand = ({ children, className }: CustomCommandProps) => {
  return <div className={className}>{children}</div>;
};

import {
  Command as UICommand,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from 'next/link';
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from "lucide-react";

function Sidebar() {
  return (
    <div className='h-full'>
      <UICommand className='bg-secondary rounded-none'>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard className='h-4 w-4 mr-2' />
              <Link href="/">Dashboard</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className='h-4 w-4 mr-2' />
              <Link href="/posts">Posts</Link>
            </CommandItem>
            <CommandItem>
              <Folders className='h-4 w-4 mr-2' />
              <Link href="/categories">Categories</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className='h-4 w-4 mr-2' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className='h-4 w-4 mr-2' />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className='h-4 w-4 mr-2' />
              <span>Setting</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </UICommand>
    </div>
  );
}

export default Sidebar;