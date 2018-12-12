import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: 'Nav One', href: '' } },
      { name: 'item1', a: { children: 'Nav Two', href: '' } },
      { name: 'item2', a: { children: 'Nav Three', href: '' } },
      { name: 'item3', a: { children: 'Nav Four', href: '' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: (
      <span>
        <p>Bootcamp Startup</p>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>one solution for your bootcamp management</p>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Courses and Service' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: { className: 'content0-title', children: 'Guarantee' },
          content: { children: 'No matter how you choose to pay, you’ll still get a job or your money back.' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: {
            className: 'content0-title',
            children: '60-80 Hours',
          },
          content: { children: `60-80 hours a week of intensive bootcamp-style
             learning means your new career is your only goal. Graduate in five months.` },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: { className: 'content0-title', children: 'Structured' },
          content: { children: `A daily timeline means defined structure,
            accountability, proven focus and increasing skills` },
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: 'IMMERSIVE STUDENT LIFE' },
  content: {
    className: 'content1-content',
    children:
      `Our class had a diverse mix of students - from a
      twenty-year-old entrepreneur deferring a semester
      from Northwestern to a mid-career finance trader
      looking for a career change. It was refreshing to
      participate in an authentically collaborative
      atmosphere that moved away from a traditional
      academic structure. I can honestly say I learned
      a ton - from computer science fundamentals, to
      front-end web animation, to how to be a professional
      in a tech environment.`,
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Welcome All',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '' },
          content: {
            className: 'content3-content',
            children:
              '',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '' },
          content: {
            className: 'content3-content',
            children:
              '',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '' },
          content: {
            className: 'content3-content',
            children:
              '',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '' },
          content: {
            className: 'content3-content',
            children:
              '',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '' },
          content: {
            className: 'content3-content',
            children:
              '',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '' },
          content: {
            className: 'content3-content',
            children:
              '',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
