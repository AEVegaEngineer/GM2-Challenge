// src/__tests__/helpers.test.ts or src/helpers.test.ts

import {
  addEmojiPrefix,
  getEmojiPrefix,
  combineEmojiPrefixWithName,
} from "../src/helpers";

describe("Helper Functions", () => {
  describe("addEmojiPrefix", () => {
    it("should add red emoji for even IDs", () => {
      expect(addEmojiPrefix("Test Item", 2)).toBe("🔴 Test Item");
      expect(addEmojiPrefix("Another Item", 4)).toBe("🔴 Another Item");
    });

    it("should add blue emoji for odd IDs", () => {
      expect(addEmojiPrefix("Test Item", 1)).toBe("🔵 Test Item");
      expect(addEmojiPrefix("Another Item", 3)).toBe("🔵 Another Item");
    });
  });

  describe("getEmojiPrefix", () => {
    it("should extract red emoji prefix", () => {
      expect(getEmojiPrefix("🔴 Test Item")).toBe("🔴 ");
    });

    it("should extract blue emoji prefix", () => {
      expect(getEmojiPrefix("🔵 Another Item")).toBe("🔵 ");
    });

    it("should return empty string for no emoji prefix", () => {
      expect(getEmojiPrefix("No Emoji Item")).toBe("");
    });
  });

  describe("combineEmojiPrefixWithName", () => {
    it("should preserve red emoji prefix", () => {
      expect(combineEmojiPrefixWithName("🔴 Old Name", "New Name")).toBe(
        "🔴 New Name"
      );
    });

    it("should preserve blue emoji prefix", () => {
      expect(combineEmojiPrefixWithName("🔵 Old Name", "New Name")).toBe(
        "🔵 New Name"
      );
    });

    it("should not add emoji if original name had none", () => {
      expect(combineEmojiPrefixWithName("Old Name", "New Name")).toBe(
        "New Name"
      );
    });
  });
});
