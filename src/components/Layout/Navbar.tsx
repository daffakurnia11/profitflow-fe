import * as React from "react";
import Typography from "../Typography";
import Button from "../Button";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar(): React.ReactElement {
  return (
    <div className="container flex justify-between items-center py-4 px-10">
      <div className="flex-1">
        <Typography.Heading level={4} className="text-slate-50">
          ProfitFlow
        </Typography.Heading>
      </div>
      <div className="md:flex hidden items-center gap-8">
        <div>
          <Typography.Paragraph size="lg">Home</Typography.Paragraph>
        </div>
        <div>
          <Typography.Paragraph size="lg">About</Typography.Paragraph>
        </div>
        <div>
          <Typography.Paragraph size="lg">Pricing</Typography.Paragraph>
        </div>
        <div>
          <Typography.Paragraph size="lg">Contact</Typography.Paragraph>
        </div>
        <div>
          <Button fullWidth>Login</Button>
        </div>
      </div>
      <Menu
        as="div"
        className="md:hidden relative inline-block text-left gap-8"
      >
        <MenuButton className="inline-flex text-sm font-semibold text-gray-900">
          <AiOutlineMenu size={24} />
        </MenuButton>
        <MenuItems
          transition
          className="px-5 py-3 absolute flex flex-col gap-4 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <MenuItem>
            <Typography.Paragraph size="lg" className="text-center">
              Home
            </Typography.Paragraph>
          </MenuItem>
          <MenuItem>
            <Typography.Paragraph size="lg" className="text-center">
              About
            </Typography.Paragraph>
          </MenuItem>
          <MenuItem>
            <Typography.Paragraph size="lg" className="text-center">
              Pricing
            </Typography.Paragraph>
          </MenuItem>
          <MenuItem>
            <Typography.Paragraph size="lg" className="text-center">
              Contact
            </Typography.Paragraph>
          </MenuItem>
          <MenuItem>
            <Button fullWidth>Login</Button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
