# Control flow

CAGE control flow carries legality state. `🤔` introduces a conditional and `🔁` introduces loop or recurrence behavior.

At a branch join, ownership, capabilities, resource accounting, fault state, and invariants must be compatible. If one branch moves a value while another retains ownership, the compiler cannot pretend the two resulting worlds are identical.

Strict loops can require an entry invariant, body invariant, exit or persistence classification, bounded resource growth, ownership stability, capability stability, and fault behavior. A permanent game loop is possible, but it still needs an explicit runtime-owned lifecycle and bounded work per iteration.
