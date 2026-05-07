# Add About Us page

## Goal

Create a new "About Us" page to provide information about the application/team and add it to the navigation menu.

## What I already know

* The project is built with Vue 3 and Vue Router.
* Routes are defined in `src/router/index.js`.
* The navigation menu is in `src/App.vue`.
* Current pages include Home, Login, and Register.

## Assumptions (temporary)

* The "About Us" page should follow the existing styling of the application.
* It should be accessible at the `/about` path.
* A link should be added to the navigation bar in `src/App.vue`.

## Open Questions

(None at this time)

## Requirements (evolving)

* Create a new Vue component `AboutView.vue` in `src/views/`.
* Register the `/about` route in `src/router/index.js`.
* Add an "About" link to the navigation bar in `src/App.vue`.
* The About Us page must include:
    1. **Basic Introduction**: Vision and Mission statement.
    2. **Team Section**: Static grid of 3 team members (placeholders for images, names, roles).
    3. **Contact Info**: Email, address, and a placeholder for a map (iframe or stylized div).

## Acceptance Criteria (evolving)

* [ ] `src/views/AboutView.vue` created with static content.
* [ ] Navigating to `/about` displays the new page.
* [ ] The navigation bar contains a working "About" link.
* [ ] The page matches the existing design/style (using `--primary-color`, etc.).

## Definition of Done (team quality bar)

* Tests added/updated (unit/integration where appropriate)
* Lint / typecheck / CI green
* Docs/notes updated if behavior changes

## Technical Approach

* **Component**: Create `src/views/AboutView.vue` using Vue 3 `<script setup>` syntax.
* **Routing**: Add path `/about` to the router configuration using lazy loading for better performance.
* **Styling**: Use scoped CSS in the component, utilizing CSS variables from `main.css`.
* **Team Data**: Define a static array within the component for team members.

## Decision (ADR-lite)

**Context**: Need for an About Us page.
**Decision**: Implement as a purely static Vue component.
**Consequences**: No backend dependencies; easy to update manually; fast load time.

## Out of Scope (explicit)

* Contact form with submission logic.
* Dynamic team data fetching.
* Interactive map API integration (Google Maps/Mapbox).

## Implementation Plan

1. **Scaffolding**: Create `src/views/AboutView.vue` with basic structure.
2. **Routing**: Update `src/router/index.js`.
3. **Navigation**: Update `src/App.vue` header.
4. **Refining**: Add detailed content and styling to `AboutView.vue`.

## Out of Scope (explicit)

* Advanced animations or interactive elements (unless requested).
* Integration with a CMS for content management.

## Technical Notes

* `src/router/index.js` uses `createWebHistory`.
* Styling uses scoped CSS and some global variables (likely in `main.css`).
