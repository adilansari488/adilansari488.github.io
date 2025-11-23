from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_portfolio(page: Page):
    # 1. Arrange: Go to the portfolio homepage.
    # Assuming the app is running on localhost:3000
    page.goto("http://localhost:3000")

    # 2. Act & Assert: Check for key elements to ensure the page loaded correctly.

    # Check if Navbar exists and has correct text
    expect(page.locator("text=<Adil Ansari>")).to_be_visible()

    # Check Home section
    expect(page.get_by_text("Hi, I am Adil")).to_be_visible()

    # Check About section (scroll to it)
    # Using exact=True to avoid ambiguity
    page.locator("#about").scroll_into_view_if_needed()
    expect(page.get_by_role("heading", name="About Me", exact=True)).to_be_visible()

    # Check Projects section
    page.locator("#projects").scroll_into_view_if_needed()
    expect(page.get_by_role("heading", name="Projects", exact=True)).to_be_visible()

    # Check Contact section
    page.locator("#contact").scroll_into_view_if_needed()
    expect(page.get_by_role("heading", name="Contact", exact=True)).to_be_visible()

    # 3. Screenshot: Capture the final result for visual verification.
    # We'll take a full page screenshot to see everything
    time.sleep(2) # Wait for animations
    page.screenshot(path="/home/jules/verification/portfolio_full.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_portfolio(page)
            print("Verification script completed successfully.")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
