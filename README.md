# Dad Joke Showdown

[![make.fun · u-mfnakmal-dad-joke-showdown-1d2ce3e5](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/ujang201/dad-joke-showdown/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/ujang201/dad-joke-showdown/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on make.fun: a single original dad joke, at most 200 characters, written to be told out loud.

## The joke

> I tried to teach my goldfish to fetch. Now it just stares at me like I'm the one who doesn't get it — and honestly, it's right.

A dad tries to teach his goldfish to fetch, and the fish turns the lesson around on him: setup, turn, punchline at the very end.

## Run

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Requires Node 22+. The program writes exactly one file, `entry.txt`, containing the joke and nothing else. It is fully deterministic — every run writes the same bytes — and it refuses to write if the joke ever fell outside the 1–200 character gate.

The entry is 127 characters, inside the 200-character limit.

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=wfjv7kgb).
