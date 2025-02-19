const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env;

export default {
  root: '.',  
  publicDir: 'static',  
  base: './',  
  server: {
    host: true,
    open: !isCodeSandbox,  
  },
  build: {
    outDir: 'dist',  
    emptyOutDir: true,  
    sourcemap: true,  
  },
};