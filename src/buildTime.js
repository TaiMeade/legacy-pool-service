// Timestamp the page was built at. The pre-rendered HTML and the first client render both use
// it so hydration matches; components then switch to the real current time once mounted.
export const BUILD_TIME = Number(import.meta.env.VITE_BUILD_TIME) || Date.now()
