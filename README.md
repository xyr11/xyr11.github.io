# XYR.codes
This is XYR.codes, the official webpage of Xyrus Kurt Roldan in the depths of the internet! Here, you can find stuff I make on the internet ranging from coding projects to blogging and photography.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) ![GitHub branch checks state](https://img.shields.io/github/checks-status/xyr11/xyr11.github.io/main?logo=github&style=flat-square) [![Netlify Status](https://api.netlify.com/api/v1/badges/58f1ecc1-7536-4cf3-a90e-a5b50228043a/deploy-status)](https://app.netlify.com/sites/xyrcodes/deploys)

## Versions
To see the latest stable version, check the link above. You can also download it [here](https://github.com/xyr11/xyr11.github.io/archive/refs/heads/main.zip), which fully works offline too!

### Other versions
Version | Description | View
-- | -- | --
Pre-release | Most recent release candidate | [Branch](https://github.com/xyr11/xyr11.github.io/tree/pre-release) \| [Link](https://rc.xyr.codes)
Development | Most recent commit (*VERY* buggy) | [Branch](https://github.com/xyr11/xyr11.github.io/tree/development) \| [Link](https://dev.xyr.codes)

For old versions, [check the Releases page](https://github.com/xyr11/xyr11.github.io/releases).

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

### Why did you start this?
Long-term dream as a kid, short-term rushed CS assignment that doesn't deserve the rush so that's why I'm finishing it

### Why the name? / Aren't you hosting it already at <https://xyr11.github.io>?
Funny story actually. On my school, one of the perks given is having a GitHub Student Developer Pack, of which I can choose and own one of the selection of domains for free... for 1 year. *and yada yada yada*, I found `xyr.codes` and gladly took it. So that's why I (for now) have 2 urls of the site.

## License
The content of this project itself is licensed under [CC BY 4.0 ![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by/4.0/). All pictures taken by or made by the repository owner ("Xyrus Kurt Roldan") is licensed under [CC BY-SA 4.0 ![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/). The source code used to build and display the site is licensed under [MIT License](https://github.com/xyr11/xyr11.github.io/blob/main/LICENSE).

The author is not responsible for the content on the site.
