import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'esm',
  outdir: 'dist/server',
  external: [
    '@neondatabase/serverless',
    'express',
    'express-session',
    'passport',
    'passport-local',
    'ws'
  ]
}); 