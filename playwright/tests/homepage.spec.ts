import { test, expect } from "@playwright/test";

test.describe("Homepage tests", () => {
  test("should load the homepage successfully", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("/");

    // Check if the page has loaded by verifying the presence of the Next.js logo
    const logo = page.getByAltText("Next.js logo");
    await expect(logo).toBeVisible();

    // Check for expected content
    await expect(page.getByText("Get started by editing")).toBeVisible();
    await expect(page.getByText("app/page.tsx")).toBeVisible();
    await expect(
      page.getByText("Save and see your changes instantly.")
    ).toBeVisible();

    // Check for expected links
    const deployButton = page.getByRole("link", { name: "Deploy now" });
    await expect(deployButton).toBeVisible();
    await expect(deployButton).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/new")
    );

    const docsLink = page.getByRole("link", { name: "Read our docs" });
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs")
    );

    // Check footer links
    const learnLink = page.getByRole("link", { name: "Learn" });
    await expect(learnLink).toBeVisible();

    const examplesLink = page.getByRole("link", { name: "Examples" });
    await expect(examplesLink).toBeVisible();

    const nextjsOrgLink = page.getByRole("link", {
      name: "Go to nextjs.org →",
    });
    await expect(nextjsOrgLink).toBeVisible();
  });

  test("should have proper viewport adaptation", async ({ page }) => {
    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const mainElement = page.locator("main");

    // Check that items are aligned to start on desktop
    await expect(mainElement).toHaveClass(/sm:items-start/);

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Check that items are centered on mobile
    await expect(mainElement).toHaveClass(/items-center/);

    // Verify deploy and docs buttons are stacked on mobile
    const buttonContainer = page.locator(
      "div.flex.flex-col.items-center.gap-4"
    );
    await expect(buttonContainer).toHaveClass(/flex-col/);
  });
});
