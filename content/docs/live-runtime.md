# Live runtime authenticity

A CAGE application preview must be the application itself.

Studio may not fabricate a source screenshot, run-report card, mock panel, or reconstructed approximation and present it as program output. A displayed scene must come from the admitted running CAGE source.

Headless source creates no visual preview. Visual source creates a runtime session whose retained scene is generated from the CAGE UI declarations. Input returns to that session, executes the source-declared action, and produces a validated scene transaction.

Runtime sessions carry the admitted source identity. If the source changes, the old session can be rejected rather than mutating a different program with a stale certificate. Scene changes are validated before commit so an invalid transaction cannot leave half-applied UI state.
