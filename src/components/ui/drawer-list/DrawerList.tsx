"use client";

import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { navItems } from "@/data";
import { useState } from "react";
import Image from "next/image";

interface Props {
    scrolled?: boolean;
}

export const DrawerList = ({ scrolled }: Props) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <div className="w-full flex justify-center ">
                        <Image
                            src="/logos/logo-horizontal.png"
                            alt="Logo"
                            width={170}
                            height={50}
                        />
                    </div>
                </ListItem>
                <Divider />
                {navItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton href={item.path}>
                            <ListItemIcon>
                                <Image
                                    src={item.icon}
                                    alt={`Icono de ${item.title}`}
                                    width={20}
                                    height={20}
                                />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <button
                onClick={toggleDrawer(true)}
                className={`lg:hidden text-black mr-5 rounded-lg p-2 ${
                    scrolled
                        ? "bg-gradient-to-br from-azul/50 to-azul-bajo/70  "
                        : "bg-white"
                }  shadow-md focus:outline-none z-50 hover:cursor-pointer hover:shadow-xl hover:rotate-6 hover:scale-125 transition-all duration-300`}
            >
                <Image
                    src="/navegacion/menu.svg"
                    alt="Icono de Menu"
                    width={25}
                    height={50}
                />
            </button>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                aria-hidden={false}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
};
