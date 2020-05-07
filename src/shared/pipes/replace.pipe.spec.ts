import { ReplacePipe } from "./replace.pipe";

describe("ReplacePipe", () => {
  let pipe = new ReplacePipe();

  it('transforms "abc,def" to "abc, def"', () => {
    expect(pipe.transform("abc,def", ",", ", ")).toBe("abc, def");
  });
});
