// Temporary QA: verify the timer now starts at 7:00 and counts down.
export default async function run(page, ui) {
  const result = {};

  const snap = await ui.snapshot();
  const nameRef = snap.match(/@(e\d+) textbox/)?.[1];
  const startRef = snap.match(/@(e\d+) button "Start Assessment"/)?.[1];
  await ui.fill(nameRef, "Timer QA");
  await ui.click(startRef);

  await page.waitForFunction(
    () => document.querySelectorAll(".question-card").length > 0,
  );

  // Read the timer immediately, then again after ~4 seconds to prove it ticks.
  result.firstRead = await page.locator("#time").innerText();
  await page.waitForTimeout(4000);
  result.after4s = await page.locator("#time").innerText();

  // Confirm the start-screen copy was updated too.
  result.startScreenText = await page.locator("#start-screen p").innerText();

  return result;
}
