# Changelog

## [1.1.0](https://github.com/sebaholl/Todo-APP/compare/v1.0.0...v1.1.0) (2025-11-06)


### Features

* add filter state and logic to render only active or completed todos ([a363c33](https://github.com/sebaholl/Todo-APP/commit/a363c33845c48c48ea35f20e867309883f90a7c4))
* add helper function to visually highlight the active filter button ([b5db5d3](https://github.com/sebaholl/Todo-APP/commit/b5db5d3c5aee546cf44275745e679762bbe6f656))
* add HTML structure for todo filter buttons ([2a6759c](https://github.com/sebaholl/Todo-APP/commit/2a6759c84dce1fa5e834d2ad795b9cae03131a9d))
* implement filter button event listeners to switch between todo views ([e7852db](https://github.com/sebaholl/Todo-APP/commit/e7852dbe1ef3f36ba74b163f548dba1d1e6950dc))


### Bug Fixes

* **main:** restore dueDate handling and wire up toggle/remove handlers ([9a753ab](https://github.com/sebaholl/Todo-APP/commit/9a753abf9ee765c46d0073d4dda603f166c5229a))

## 1.0.0 (2025-11-03)


### Features

* add date input field to todo form ([6c540d6](https://github.com/sebaholl/Todo-APP/commit/6c540d6a34f1f868fb5d3bd101734c8c7169f203))
* add todo completion toggle functionality ([2713958](https://github.com/sebaholl/Todo-APP/commit/2713958608097fa129f9599ff92d18c0fd5a2c5c))
* display due date and highlight overdue todos ([85faeff](https://github.com/sebaholl/Todo-APP/commit/85faeffc6f1e9ad32d405e8f075b1342b673ae43))
* extend Todo interface with optional dueDate property ([94cb539](https://github.com/sebaholl/Todo-APP/commit/94cb53913e068bec57ac57ff35a4e5c497828d63))
* include dueDate in addTodo function ([719cafe](https://github.com/sebaholl/Todo-APP/commit/719cafe0c2a33b889d5d8b778ad7306588b3f511))
* reference date input element in TypeScript ([5d0c6bb](https://github.com/sebaholl/Todo-APP/commit/5d0c6bbbd43950f23b2b31337bf66a9c2058bd15))


### Bug Fixes

* display due date using &lt;small&gt; tag for proper styling ([577b03d](https://github.com/sebaholl/Todo-APP/commit/577b03d5c6bd1f1721250a10d788751c73ac8ed6))
* reset date input after adding a new todo ([2baab03](https://github.com/sebaholl/Todo-APP/commit/2baab037d29add12fd5960e1347c87149b9818ff))
