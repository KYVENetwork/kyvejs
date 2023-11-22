# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.1.0](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.14...@kyvejs/protocol@1.1.0) (2023-11-16)

### Features

- improve logging of debug information ([#90](https://github.com/KYVENetwork/kyvejs/issues/90)) ([ba3c1d6](https://github.com/KYVENetwork/kyvejs/commit/ba3c1d63060f38c112d7b5102341a0c9000d7d54))
- made prerelease for types and sdk ([#96](https://github.com/KYVENetwork/kyvejs/issues/96)) ([38508c5](https://github.com/KYVENetwork/kyvejs/commit/38508c50d1d86e98339650626e21a1bc9017d9f5))
- migrate decimals and korellia-2 ([#98](https://github.com/KYVENetwork/kyvejs/issues/98)) ([75f0626](https://github.com/KYVENetwork/kyvejs/commit/75f0626095a11e3a0d0137f5aa30d1d40f1a6674))

## [1.0.14](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.13...@kyvejs/protocol@1.0.14) (2023-10-24)

### Bug Fixes

- vote instantly invalid if empty bundle was found ([#86](https://github.com/KYVENetwork/kyvejs/issues/86)) ([bbf844e](https://github.com/KYVENetwork/kyvejs/commit/bbf844efa6c8dfe77222c3e542aab834b817c33a))

## [1.0.13](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.12...@kyvejs/protocol@1.0.13) (2023-10-19)

### Bug Fixes

- idle if data is not available ([#84](https://github.com/KYVENetwork/kyvejs/issues/84)) ([afade99](https://github.com/KYVENetwork/kyvejs/commit/afade998cd967fbb6064275a1a16c224fb1625cf))

## [1.0.12](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.11...@kyvejs/protocol@1.0.12) (2023-10-18)

**Note:** Version bump only for package @kyvejs/protocol

## [1.0.11](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.10...@kyvejs/protocol@1.0.11) (2023-10-05)

### Bug Fixes

- compression errror returns empty array ([#76](https://github.com/KYVENetwork/kyvejs/issues/76)) ([b11a925](https://github.com/KYVENetwork/kyvejs/commit/b11a9252f7084b80779203613d1d76256a2ec790))

## [1.0.10](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.9...@kyvejs/protocol@1.0.10) (2023-10-04)

**Note:** Version bump only for package @kyvejs/protocol

## [1.0.9](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.8...@kyvejs/protocol@1.0.9) (2023-10-04)

**Note:** Version bump only for package @kyvejs/protocol

## [1.0.8](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.7...@kyvejs/protocol@1.0.8) (2023-09-27)

### Bug Fixes

- use latest protocol version ([#72](https://github.com/KYVENetwork/kyvejs/issues/72)) ([f6eb8e4](https://github.com/KYVENetwork/kyvejs/commit/f6eb8e438c83007000d3051c4764555d508d72f8))

## [1.0.7](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.6...@kyvejs/protocol@1.0.7) (2023-09-27)

### Bug Fixes

- wrap runtime nextKey in backoff strategy ([407d9e3](https://github.com/KYVENetwork/kyvejs/commit/407d9e323144ecc160dd2d9ac25e7370f7bce40d))

## [1.0.6](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.5...@kyvejs/protocol@1.0.6) (2023-08-17)

### Bug Fixes

- set max body and content length to infinity ([#67](https://github.com/KYVENetwork/kyvejs/issues/67)) ([05484f8](https://github.com/KYVENetwork/kyvejs/commit/05484f89fb81ba41128191ec46c54c454d494508))

## [1.0.5](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.4...@kyvejs/protocol@1.0.5) (2023-08-10)

### Bug Fixes

- moved all checks before validator initialization ([#62](https://github.com/KYVENetwork/kyvejs/issues/62)) ([8822cbe](https://github.com/KYVENetwork/kyvejs/commit/8822cbee270f3468ae3d2e66d4f0c6fcc374cd9c))

## [1.0.4](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.3...@kyvejs/protocol@1.0.4) (2023-08-09)

### Bug Fixes

- runtime tendermint ([#58](https://github.com/KYVENetwork/kyvejs/issues/58)) ([38e0b17](https://github.com/KYVENetwork/kyvejs/commit/38e0b17d0832afc9a0cbc1834c5b380ef4dfb9f5))
- treat prereleases as different versions ([#61](https://github.com/KYVENetwork/kyvejs/issues/61)) ([a16afab](https://github.com/KYVENetwork/kyvejs/commit/a16afab42a0ccd194d1ffecdd3829f70784f2b19))

## [1.0.3](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.2...@kyvejs/protocol@1.0.3) (2023-07-28)

### Features

- added new aws s3 storage provider ([#51](https://github.com/KYVENetwork/kyvejs/issues/51)) ([f7966f4](https://github.com/KYVENetwork/kyvejs/pull/51/commits/f7966f4332e510b648acaecb4936f35410c44a57))

### Bug Fixes

- remove duplicate Content-Type tag ([#50](https://github.com/KYVENetwork/kyvejs/issues/50)) ([7a4b05d](https://github.com/KYVENetwork/kyvejs/commit/7a4b05d34b0a8bb1ba838d67fb5b2c0dfaac85f0))
- correctly standardize error logs ([#51](https://github.com/KYVENetwork/kyvejs/issues/51)) ([ddd2fe0](https://github.com/KYVENetwork/kyvejs/pull/51/commits/ddd2fe0b30aaca8ecbe801fe7e73b3f0e4f6ada0))

## [1.0.2](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.1...@kyvejs/protocol@1.0.2) (2023-07-14)

### Improvements

- added semantic versioning for runtimes ([#52](https://github.com/KYVENetwork/kyvejs/issues/52))
- upgraded to lerna v7 ([#52](https://github.com/KYVENetwork/kyvejs/issues/52)) ([f7136b7](https://github.com/KYVENetwork/kyvejs/pull/52/commits/f7136b7e9a2ada6f95521536fe91e3231f810f7a))
- skip uploader role if storage funds are not sufficient ([#52](https://github.com/KYVENetwork/kyvejs/issues/52)) ([c56fd28](https://github.com/KYVENetwork/kyvejs/pull/52/commits/c56fd28a7e6c486a76085b517db173b7b139c76e))
- refactored various check and validation helpers ([#52](https://github.com/KYVENetwork/kyvejs/issues/52)) ([27756c0](https://github.com/KYVENetwork/kyvejs/pull/52/commits/27756c0cb1985c7a98981a47b3aaf34523520eac))

## [1.0.1](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.0-beta.24...@kyvejs/protocol@1.0.1) (2023-06-02)

**Note:** Version bump only for package @kyvejs/protocol

## [1.0.0](https://github.com/KYVENetwork/kyvejs/compare/@kyvejs/protocol@1.0.0-beta.24...@kyvejs/protocol@1.0.0) (2023-05-31)

**Note:** Release for the KYVE protocol launch.
