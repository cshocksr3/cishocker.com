export interface NavLink {
  name: string;
  link: string;
}

export const links: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },

  {
    name: "Projects",
    link: "/Projects",
  },
  {
    name: "Guestbook",
    link: "/guestbook",
  },
];
