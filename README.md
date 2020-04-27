# jest-dynamic-import-bug

## Project setup
```
npm install
```

## Reproduction steps

1. Go through project setup
1. In `./tests/unit/dynamic-import.spec.js` delete or comment line 7
1. Run `npm run test:unit`
1. Note successful run of 2 tests
1. Run `npm run test:unit -- --watchAll`
1. Note successful run of 2 tests and watch mode working
1. Run `npm run test:unit -- --watch`
1. Note crash with the following error:
    ```
    Configuration error:

    Could not locate module @/lang/${locale} mapped as:
    /Users/mpietz/Git/jest-dynamic-import-bug/src/lang/${locale}.
    ```
    ![Imgur](https://i.imgur.com/JdPPSZJ.png)
