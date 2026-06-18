// ─── CUSTOMER REVIEWS ────────────────────────────────────────────────────────
// Each review is one object. Fields:
//   name   — reviewer's name (string)
//   rating — stars out of 5 (integer 1–5)
//   text   — the review body (string; use \n for line breaks)
//   date   — when it was left, "YYYY-MM-DD" (drives the "x weeks ago" label)
//
// The section auto-calculates the overall rating and review count from this list.

export const reviews = [
  {
    name: 'Michelle Gallagher',
    rating: 5,
    text: "Thank you Legacy Pool Co. Max Ziemer and Aubrianna Ziemer were on it! I cannot thank them enough for the very quick and efficient, and honest service. Turns out it was a fairly inexpensive fix, thank goodness!!! Anyone in need of pool service, reach out to them. I will for sure be using them again.",
    date: '2026-06-11',
  },
  {
    name: 'Kirsten Tuggle',
    rating: 5,
    text: "I wish I could leave 10 stars!!! ⭐️ ⭐️ ⭐️!!! Best pool company in town in my opinion. Very knowledgeable and consistent!! My pool has never looked better. Also, The water doesn’t leave my skin and hair feeling gross- they use the best chemicals and my eyes don’t burn from too much chlorine. The best part is, you are a supporting a local family business when you use them. When you need a repair, they will fix it and not charge an arm and a leg to do so. I can’t recommend them enough. Very satisfied and will be telling all of my family and friends to use them! Thank you Legacy Pool Co.",
    date: '2026-06-17',
  }
]
