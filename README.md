# Running the server

Steps to run this project, after cloning:

0. Make sure the following are installed on the machine:
    - Node.js (tested on v14)
    - yarn is installed globally (`npm i yarn -g`)
    - and Docker

1. Run `yarn install` in this project's folder

2. Create an .env file with the following variables:
    ```
    JWT_SECRET=<string>
    CODE_EMIT_INTERVAL=<number>
    NUM_VALID_CODES_REQUIRED=<number>
    NUM_CODES_TO_CHECK=<number>
    ```
    - **JWT_SECRET**: a secret string to sign the JWT tokens with. Server will fail to run correctly if this is missing.
    - **CODE_EMIT_INTERVAL**: a numeric value, in milliseconds, that dictates at what interval the server emits codes during a roll call. Default value is 2000
    - **NUM_VALID_CODES_REQUIRED**: the number of valid codes, in a row, that are required to be submitted before a student is marked as present. Default value is 3
    - **NUM_CODES_TO_CHECK**: when a student submits a code, this controls how many old codes the server will check against, going back in history. For example, if `CODE_EMIT_INTERVAL` is set to 2000, and this variable is set to 15, the server will only accept a code as valid if it has been emitted during the last 15 * 2000ms = 30 seconds.

3. Run one of the several scripts:
    - `yarn run server`: start the server only
    - `yarn run start`: starts the proxy and the server
    - `yarn run start stop-proxy`: attempts to automatically find and stop the docker container that's running the proxy. This can be called after having stopped the server, if one wants to avoid having to manually find and stop the docker container
    - `yarn run createUser`: script that allows the creation of user accounts on the system. Useful for creating an administrator account to get initial access and set up the system
    - `yarn run populate`: script that creates students, teachers, and courses, useful for quickly populating the database with junk data for demonstration purposes
