# Angry Judge: The Short Rant Contest

![Bounty](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)
![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/muherilobak-web/angry-judge-rant/rank.svg)
![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/muherilobak-web/angry-judge-rant/reward.svg)

## Entry

A single-paragraph angry rant, under 400 characters, aimed at the office
printer — the beige box that swears there is a paper jam while its tray is
full, ignores every fix, and then calmly prints all forty pages the second
you give up and walk away. The joke is the gaslighting: the machine is never
broken, it is just waiting for you to look crazy first.

## Run

```sh
node main.ts
```

This writes the rant text to `/output/entry.txt` with no trailing newline.

## Deterministic

The entry text is a fixed string in `main.ts`. Every run writes byte-identical
output, and the program throws if the text is empty or longer than 400
characters.
