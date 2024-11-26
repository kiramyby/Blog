interface Friend {
  avatar: string; // 头像链接
  name: string; // 用户 id
  link: string; // 博客链接
  title?: string; // 用户头衔
  tag?: string; // 用户标签
  color?: string; // 标签颜色
}

/**
 * TODO: 缺项处理
 * 在此处填写你的友情链接
 */
export const friendsInfo: Friend[] = [
  {
    avatar: "https://1.gravatar.com/avatar/82c042f60d38e82d8084e8c100c4122e887bfc6960a8e28deb0f85e1e10b7f90?size=256",
    name: "Kiracoon",
    title: "Wanna turn back the clock?🧐",
    link: "https://blog.kiracoon.top/",
    tag: "Maine Coon",
    color: "orange",
  },
  {
    avatar: "http://q1.qlogo.cn/g?b=qq&nk=2499302531&s=100",
    name: "Ec3o",
    title: "",
    link: "https://tech.ec3o.fun/",
    tag: "Vidar-Team Web & Hduhelp",
    color: "sky",
  },
  {
    avatar: "http://q1.qlogo.cn/g?b=qq&nk=1394582968&s=100",
    name: "Nacl",
    title: "",
    link: "https://naclwww.xyz/",
    tag: "Vidar-Team Crypt",
    color: "sky",
  },
  {
    avatar: "http://q1.qlogo.cn/g?b=qq&nk=1663450838&s=100",
    name: "L0tus",
    title: "",
    link: "https://l0tus.vip/",
    tag: "Vidar-Team Pwn & G.O.S.S.I.P.",
    color: "sky",
  },
  {
    avatar: "http://q1.qlogo.cn/g?b=qq&nk=2252854808&s=100",
    name: "z221x",
    title: "",
    link: "https://z221x.website",
    tag: "Vidar-Team Re",
    color: "sky",
  },
  {
    avatar: "http://q1.qlogo.cn/g?b=qq&nk=821675766&s=100",
    name: "mysid",
    title: "",
    link: "https://mysid.top/",
    tag: "Vidar-Team Web",
    color: "sky",
  },
  {
    avatar: "http://q1.qlogo.cn/g?b=qq&nk=3115415358&s=100",
    name: "M1aoo0bin",
    title: "",
    link: "https://zenaxu.cn/",
    tag: "Vidar-Team Pwn",
    color: "sky",
  },
];
