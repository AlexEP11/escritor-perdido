import {
    IoHomeOutline,
    IoMailOutline,
    IoNewspaperOutline,
    IoPeopleOutline,
} from "react-icons/io5";

export const navItems = [
    {
        title: "Inicio",
        path: "/",
        icon: <IoHomeOutline />,
    },
    {
        title: "Blog",
        path: "/blog",
        icon: <IoNewspaperOutline />,
    },
    {
        title: "Sobre Nosotros",
        path: "/nosotros",
        icon: <IoPeopleOutline />,
    },
    {
        title: "Contacto",
        path: "/contacto",
        icon: <IoMailOutline />,
    },
];
