Vercel has poor support for Yarn Berry. To get it to work, I manually set the following (for some reason, setting via `vercel.json` doesn't work):

- `YARN_ENABLE_IMMUTABLE_INSTALLS=false`
  - See https://stackoverflow.com/a/67740771
- Install command manual override: `yarn set version berry && yarn`
  - See https://discord.com/channels/752553802359505017/1071686432860684359/1071686432860684359
