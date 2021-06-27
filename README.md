# XYR.codes
my general website which can be found at <https://xyr.codes>

![GitHub branch checks state](https://img.shields.io/github/checks-status/xyr11/xyr11.github.com/main?logo=github&style=flat-square) [![Netlify Status](https://api.netlify.com/api/v1/badges/58f1ecc1-7536-4cf3-a90e-a5b50228043a/deploy-status)](https://app.netlify.com/sites/xyrcodes/deploys) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Twitter Follow](https://img.shields.io/twitter/follow/xy_rus?color=brightgreen&logo=twitter&style=flat-square)](https://twitter.com/xy_rus)

## Versions
To see the latest stable version, check the link above. You can also download it [here](https://github.com/xyr11/xyr11.github.com/archive/refs/heads/main.zip), which fully works offline too!

### Other versions
For an early look at the newest version, [check out the pre-release branch](https://github.com/xyr11/xyr11.github.com/tree/pre-release). To check the most recent commit, [visit the development branch](https://github.com/xyr11/xyr11.github.com/tree/development) (which is the most buggy of them all).

For old versions, [check the Releases page](https://github.com/xyr11/xyr11.github.com/releases).

## Update workflow
```js
main ─╴1.0╶──────────────────────────────────╴1.1╶───────╴1.1.1╶──>
        ↑                                      ↑            ↑
rc   ─╴1.0╶───────────────────╴1.1-rc1╶╴rc2╶─╴1.1╶───────╴1.1.1╶──>
        ↓                         ↑            ↓            ↑
dev  ───■─╴a╶╴b╶╴beta1╶╴c╶╴beta2╶─┴────╴e╶───> ■╶╴f╶╴beta1╶─┴─╴g╶─>
```
+ `main` is the <u>main branch</u> which contains stable and fully released versions.
+ `rc` is the <u>pre-release branch</u> (*rc* is short for release candidate). No new features will be added and only bug fixing is done here. Major updates (`v1.0 → v1.1`) need to finalize here before its full release.
+ `dev` is the <u>development branch</u> ("development") which adds features and fixes over time until it is ready for release. Major updates (`v1.0 → v1.1`) will be transfered to the rc branch for finalizing while minor updates (`v1.1 → v1.1.1`) can merge directly to `main`.

This workflow is inspired by and a combination of the [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) and the [GitHub flow](https://guides.github.com/introduction/flow/) which only uses 1 development branch but doesn't have that many branches. But I probably won't be able to update often, so I'll probably leave a bunch of things out.

## Other stuff I guess

### When / Why did you start this?
Long-term dream as a kid, short-term rushed CS assignment that doesn't deserve the rush so that's why I'm finishing it

### Why the name? / Aren't you hosting it already at <https://xyr11.github.io>?
Funny story actually. On my school, one of the perks given is having a GitHub Student Developer Pack, of which I can choose and own one of the selection of domains for free... for 1 year. *and yada yada yada*, I found `xyr.codes` and gladly took it. So that's why I (for now) have 2 urls of the site.

## License
This is licensed under [MIT License](https://github.com/xyr11/xyr11.github.com/blob/main/LICENSE)