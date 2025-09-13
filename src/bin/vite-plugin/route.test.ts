import { describe, it, expect, vi } from 'vitest';
import { Route } from './route';
import { normalizePath } from 'vite';
import fastGlob from 'fast-glob';
import { relative } from 'path';

// Mock fastGlob.sync
vi.mock('fast-glob', () => ({
  sync: vi.fn(() => [
    '/Users/chenkeheng/github-repo/redoc/src/pages/index.tsx',
    '/Users/chenkeheng/github-repo/redoc/src/pages/about.tsx',
  ]),
}));

// Mock relative
vi.mock('path', () => ({
  relative: vi.fn((basePath, filePath) => {
    if (filePath.includes('index.tsx')) return 'pages/index.tsx';
    if (filePath.includes('about.tsx')) return 'pages/about.tsx';
    return filePath;
  }),
}));

describe('Route', () => {
  const scanDir = '/Users/chenkeheng/github-repo/redoc/src';
  const route = new Route(scanDir);

  it('should initialize route data correctly', async () => {
    await route.init();
    const routeMeta = route.getRouteMeta();
    expect(routeMeta).toEqual([
      {
        routePath: '/pages/index',
        absolutePath: '/Users/chenkeheng/github-repo/redoc/src/pages/index.tsx',
      },
      {
        routePath: '/pages/about',
        absolutePath: '/Users/chenkeheng/github-repo/redoc/src/pages/about.tsx',
      },
    ]);
  });

  it('should normalize route path correctly', () => {
    expect(route.normalizeRoutePath('pages/index.tsx')).toBe('/pages/index');
    expect(route.normalizeRoutePath('pages/about.tsx')).toBe('/pages/about');
    expect(route.normalizeRoutePath('pages/index')).toBe('/pages/index');
  });

  it('should generate routes code correctly', () => {
    route.init();
    const code = route.generateRoutesCode();
    expect(code).toContain("import React from 'react'");
    expect(code).toContain("import loadable from '@loadable/component'");
    expect(code).toContain("const Route0 = loadable(() => import('/Users/chenkeheng/github-repo/redoc/src/pages/index.tsx'));");
    expect(code).toContain("const Route1 = loadable(() => import('/Users/chenkeheng/github-repo/redoc/src/pages/about.tsx'));");
    expect(code).toContain("{ path: '/pages/index', element: React.createElement(Route0) }");
    expect(code).toContain("{ path: '/pages/about', element: React.createElement(Route1) }");
  });
});