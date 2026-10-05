# Tutorial: strict game shell

Build the legal shell before gameplay.

## 1. Identity and Constitution

Start with the V4 envelope, select the active Constitution, and declare the glyph module identity.

## 2. Proof and resource structure

Add the required proof dossier and law reference. Declare a complete resource cage for operations, time, memory, threads, handles, rendering, events, and recursion.

## 3. Game lifecycle

Model states such as boot, menu, playing, paused, and stopped. Make transitions explicit so gameplay functions cannot run in an impossible lifecycle state.

## 4. Frame schedule

A deterministic game can define phases such as Input → Simulation → Physics → AI → State Commit → Render. Each phase gets a clear mutation and resource boundary.

## 5. Scene and actions

Declare the real CAGE surface and controls only after the action functions exist. Every visible interactive control must resolve to a real CAGE action.

## 6. Admission

Run the Courts and Tribunal. Only after the source earns its build identity should Studio launch the actual application scene.
