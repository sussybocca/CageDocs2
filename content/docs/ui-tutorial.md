# Tutorial: interactive UI

A CAGE button is more than a visual rectangle. It belongs to a retained scene, owns an action identity, consumes declared input, and produces a source-authored scene transaction.

## Build the scene

Use `🖥️` for the surface, `🪟` for a window, then add retained nodes such as `🧱` panels, `🏷️` labels, `🔘` buttons, and `📝‍💻` editors.

## Input

Pointer-driven controls use `🖱️`. Editors also need keyboard input through `⌨️`. Focus is explicit application state rather than an invisible browser side effect.

## Action

Create the CAGE function before binding the control. The function carries its state, resource, effect, and diagnostic contract.

## Scene transaction

A UI action can return a transaction using the `🧿` transaction vocabulary. Current operations include text mutation, style changes, metrics, animation, notification, and retained-node updates.

Studio must display the scene emitted by the running source and route input back to that runtime session.
