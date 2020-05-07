import { OrbitTypePipe } from "./orbitType.pipe";

describe("OrbitTypePipe", () => {
  let pipe = new OrbitTypePipe();

  it('transforms "VLEO" to "Very low Earth orbit"', () => {
    expect(pipe.transform("VLEO")).toBe("Very low Earth orbit");
  });

  it('transforms "LEO" to "Low Earth orbit"', () => {
    expect(pipe.transform("LEO")).toBe("Low Earth orbit");
  });

  it('transforms "ISS" to "International Space Station"', () => {
    expect(pipe.transform("ISS")).toBe("International Space Station");
  });

  it('transforms "PO" to "Polar orbit"', () => {
    expect(pipe.transform("PO")).toBe("Polar orbit");
  });

  it('transforms "GTO" to "Geostationary transfer orbit"', () => {
    expect(pipe.transform("GTO")).toBe("Geostationary transfer orbit");
  });

  it('transforms "ES-L1" to "Earth Sun Lagrange point 1"', () => {
    expect(pipe.transform("ES-L1")).toBe("Earth Sun Lagrange point 1");
  });

  it('transforms "HCO" to "Heliocentric orbit"', () => {
    expect(pipe.transform("HCO")).toBe("Heliocentric orbit");
  });

  it('transforms "SSO" to "Sun-synchronous orbit"', () => {
    expect(pipe.transform("SSO")).toBe("Sun-synchronous orbit");
  });

  it('transforms "MEO" to "Medium Earth orbit"', () => {
    expect(pipe.transform("MEO")).toBe("Medium Earth orbit");
  });

  it('transforms "SO" to "Sun-synchronous orbit"', () => {
    expect(pipe.transform("SO")).toBe("Sun-synchronous orbit");
  });

  it('transforms "TLI" to "Trans-lunar injection"', () => {
    expect(pipe.transform("TLI")).toBe("Trans-lunar injection");
  });
});
