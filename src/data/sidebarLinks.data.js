export default [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Portfolios",
    exact: true,
    to: "/portfolios",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Motivations",
    exact: true,
    to: "/motivations",
    iconClassName: "bi bi-speedometer2",
  },
  // {
  //   name: "Portfolio 2021",
  //   exact: true,
  //   to: `/portfolio2021`,
  //   iconClassName: "bi bi-flag-fill",
  //   subMenus: [
  //     { name: "Running Projects", to: "/portfolio2021/courses" },
  //     { name: "Learning New Tech", to: "/portfolio2021/videos" },
  //   ],
  // },
  // {
  //   name: "Portfolio 2022",
  //   to: `/portfolio2022`,
  //   iconClassName: "bi bi-flag",
  //   subMenus: [
  //     { name: "Courses", to: "/portfolio2022/courses" },
  //     { name: "Videos", to: "/portfolio2022/videos" },
  //   ],
  // },
  {
    name: "About me",
    exact: true,
    to: `/aboutme`,
    iconClassName: "bi bi-flag",
  },
  // { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  // { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  // { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];
