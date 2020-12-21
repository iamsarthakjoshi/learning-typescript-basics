=== Very basics of Typescript ===

All of the examples are in lessons folder.

Src folder consists of other file & folders:

Folder: - For modules: - interfaces - models (classes)
Files: - index.ts - where all the examples where tested/learned

How to Learn?
Well, this is just for personal learning experience. But if you really want to check them out, then do the following:

- Install the packages: > npm install (or yarn install)
- Run the "server" to compile .ts and watch changes: > npm run dev
- Install "Live Server" extension to render HTML (index.html) in public/

There are two tsconfig.json (Just for me)

- main tsconfig.json is made out off of old tsconfig file for introducing modules like interface and models folder.
- the old tsconfigBeforeModules.json is before introducing modules

There are two index.html (Just for me)

- for the same aforementioned reason

Prerequisites:

- install node
- verify node
  > node --verson
- initialize a project
  > npm init -y
- install typescript
  > npm install -D typescript
- create tsconfig file
  > npx tsc --init
- install tsling (optional)
  > npm install -D tslint
- create tslint config (optional)
  > node_modules/.bin/tslint --init
- compile ts code to js
  > tsc <src>/file.ts <des>/file.js
  > tsc
- auto compile ts file in watch mode
  > tsc -w
