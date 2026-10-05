# Functions and contracts

A strict CAGE function is more than input and output. Its execution contract can declare accepted states, ownership, borrow lifetimes, mutation rights, capabilities, effects, resource sub-budgets, possible faults, fault destinations, thread domain, temporal permissions, invariants, termination, and determinism.

`🛠️` declares a function, `🌀` describes effects, and `⚠️` describes possible failures in the current source surface.

Function calls are reconciled like legal transactions. Arguments, ownership, capabilities, resources, results, and faults must balance across the call boundary. A locally valid function can still become illegal when called from a context that cannot satisfy its contract.
