# Resource cages

CAGE treats resources as part of program legality, not as deployment advice.

Current strict V4 examples track thirteen dimensions: operations `🎛️`, execution time `⏱️`, heap/general memory `🧠`, stack memory `📚`, thread count `🧵`, file handles `📂`, capability handles `🔌`, network/event operations `📡`, render objects `🎨`, audio channels `🔊`, storage operations `🗃️`, event rate `⚡`, and recursion depth `🔁`.

Function budgets are children of their program cage. Concurrent work can require a peak-overlap proof rather than simply checking the largest child in isolation.

Resources also have lifetimes: reserve, acquire, own or lend, release, and return budget. Unbounded queues, retries, collections, or recursion require explicit treatment instead of being accepted as hidden debt.
