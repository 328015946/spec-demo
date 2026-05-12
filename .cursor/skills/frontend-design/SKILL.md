---
name: frontend-design
description:
  Evaluate and improve Vue frontend UI/UX quality, including visual hierarchy, spacing rhythm, responsive layout,
  readability, and accessibility. Use when the user asks for frontend design review, page polish, UI refinement,
  component usability improvements, or design-focused feedback for Vue interfaces.
disable-model-invocation: true
---

# Frontend Design (Vue UI/UX)

Use this skill when asked to improve design quality of Vue interfaces.

## Focus Areas

Prioritize these areas in this order:

1. Information hierarchy and task clarity
2. Layout structure and spacing consistency
3. Readability (typography, contrast, scanability)
4. Interaction clarity (states, affordances, feedback)
5. Accessibility basics (keyboard, labels, semantics, focus)
6. Responsive behavior across common viewport sizes

## Workflow

1. Understand purpose and audience
   - Identify the page goal (conversion, browsing, form completion, etc.).
   - Identify primary actions users must complete quickly.

2. Audit current UI
   - Inspect the relevant Vue component tree and styles.
   - Note concrete friction points instead of generic opinions.

3. Propose targeted improvements
   - Keep existing visual language unless the user requests redesign.
   - Suggest smallest effective changes first.
   - Tie each recommendation to user impact.

4. Implement design-safe updates
   - Preserve behavior and data flow.
   - Avoid broad refactors unless required for UX quality.
   - Keep naming and component boundaries consistent.

5. Verify before finishing
   - Confirm no regression in interaction or responsiveness.
   - Confirm accessibility basics for modified elements.

## Vue-Specific Guidelines

- Prefer semantic HTML in templates before adding ARIA.
- Ensure form fields have explicit labels and clear helper/error text.
- Use consistent spacing scale (for example 4/8/12/16/24/32) across components.
- Keep button hierarchy obvious (primary, secondary, tertiary) and consistent.
- Ensure focus styles are visible and not removed.
- Check loading, empty, and error states for key UI blocks.

## Accessibility Baseline Checklist

- [ ] All interactive elements are keyboard reachable.
- [ ] Focus indicator is visible on interactive controls.
- [ ] Color contrast is sufficient for body text and controls.
- [ ] Inputs are associated with labels.
- [ ] Icon-only buttons have accessible names.
- [ ] Heading order is logical and non-skipping.

## Response Template

Use this structure when reporting findings or recommendations:

```markdown
Goal: [What this screen should help users do]

Top issues:

1. [Issue] - [Why it hurts usability]
2. [Issue] - [Why it hurts usability]
3. [Issue] - [Why it hurts usability]

Recommended changes:

1. [Specific UI change] -> [Expected user impact]
2. [Specific UI change] -> [Expected user impact]
3. [Specific UI change] -> [Expected user impact]

Verification:

- Responsive checks: [done / pending]
- Accessibility baseline: [done / pending]
- Interaction states: [done / pending]
```

## Guardrails

- Do not invent a new design system unless asked.
- Do not trade accessibility for visual style.
- Do not overuse animations; motion should clarify, not distract.
- Prefer clear, conventional UI patterns over novelty.
