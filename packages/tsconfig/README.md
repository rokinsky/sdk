# Shareable TypeScript config

### Quick start

```bash
$ yarn add -D @rokinsky/tsconfig
```

or

```bash
$ npm install @rokinsky/tsconfig -D
```

Add to your `tsconfig.json`:

```json5
{
    extends: '@rokinsky/tsconfig',
    compilerOptions: {
        // override shared compilerOptions
        outDir: 'dist',
        target: 'es2018',
        lib: ['es2018'],
        typeRoots: ['./node_modules/@types']
    }
}
```

If you want to know which properties were inherited, you can do:

```bash
$ tsc --showConfig --project tsconfig.json
```
