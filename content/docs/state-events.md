# State and event law

CAGE applications model state changes explicitly. A transition can carry source state, target state, initiator, required authority, preconditions, effects, resource impact, possible diagnostics, and resulting invariants.

Events also have causality. A pointer or keyboard event reaches a control, becomes an activation, resolves to a CAGE action, mutates legal state, and can produce a retained-scene transaction.

Focus is part of state. A control cannot silently accept keyboard input without a legal focus path. Event production is also budgeted so recursive or unbounded event storms do not become an invisible runtime assumption.
