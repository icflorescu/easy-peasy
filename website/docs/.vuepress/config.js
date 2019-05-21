module.exports = {
  title: 'Easy Peasy',
  description: 'Easy peasy global state for React',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorial', link: '/tutorial/' },
      { text: 'API', link: '/api/' },
      { text: 'GitHub', link: 'https://github.com/ctrlplusb/easy-peasy' },
    ],
    sidebar: {
      '/tutorial/': [
        '' /* /foo/ */,
        'one' /* /foo/one.html */,
        'two' /* /foo/two.html */,
      ],

      '/api/': [
        '' /* /bar/ */,
        'three' /* /bar/three.html */,
        'four' /* /bar/four.html */,
      ],
    },
  },
};
