# jest-dynamic-import-bug

## Project setup
```
npm install
```

## Reproduction steps

1. Go through project setup
2. Run `npm run test:unit`
3. Note successful run of 2 tests
4. Run `npm run test:unit -- --watchAll`
5. Note successful run of 2 tests and watch mode working
6. Run `npm run test:unit -- --watch`
7. Note crash with the following error:
    ```
    Configuration error:

    Could not locate module @/lang/${locale} mapped as:
    /Users/mpietz/Git/jest-dynamic-import-bug/src/lang/${locale}.
    ```
    ![Imgur](https://i.imgur.com/JdPPSZJ.png)
