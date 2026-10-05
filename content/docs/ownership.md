# Ownership and lifetimes

CAGE makes value authority explicit. Important ownership states include owned `👑`, borrowed `🤝`, observed `👁️`, frozen `🔒`, and moved `📤`.

Read access does not automatically mean mutation access. A moved value cannot remain usable at its original binding, and a borrow cannot outlive its owner.

Ownership also participates in branch joins and concurrency. If two legal paths produce incompatible ownership states, the source must reconcile them explicitly instead of allowing an ambiguous join.
