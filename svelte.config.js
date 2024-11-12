import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/collection',  // This should match the name of your GitHub repository
    }
  }
};