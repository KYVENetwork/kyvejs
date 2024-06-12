import { Coins } from "../src";

describe("coins.ts", () => {
  test("constructor", () => {
    expect(new Coins().toString()).toEqual("");

    // --- String ---

    // coin string
    expect(new Coins("10acoin,20bcoin").toString()).toEqual("10acoin,20bcoin");
    // unordered coin string
    expect(new Coins("20bcoin,10acoin").toString()).toEqual("10acoin,20bcoin");
    // multiple coin string
    expect(new Coins("10acoin,20bcoin", "30ccoin").toString()).toEqual(
      "10acoin,20bcoin,30ccoin"
    );
    // invalid coin string
    expect(() => new Coins("10acoin,invalid")).toThrow(
      new Error("Got an invalid coin string")
    );
    // duplicate coin string
    expect(() => new Coins("10acoin,20acoin,30bcoin")).toThrow(
      new Error("Got duplicate coins")
    );
    // duplicates in multiple coin string
    expect(() => new Coins("10acoin,30bcoin", "20acoin")).toThrow(
      new Error("Got duplicate coins")
    );
    // negative values
    expect(() => new Coins("10acoin,-30bcoin")).toThrow(
      new Error("Got an invalid coin string")
    );
    // invalid denom
    expect(() => new Coins("10acoin,30B")).toThrow(
      new Error("Got an invalid coin string")
    );

    // --- Coin ---

    // coin
    expect(new Coins({ denom: "acoin", amount: "10" }).toString()).toEqual(
      "10acoin"
    );
    // multiple coins
    expect(
      new Coins(
        { denom: "acoin", amount: "10" },
        { denom: "bcoin", amount: "20" }
      ).toString()
    ).toEqual("10acoin,20bcoin");
    // unordered coins
    expect(
      new Coins(
        { denom: "bcoin", amount: "20" },
        { denom: "acoin", amount: "10" }
      ).toString()
    ).toEqual("10acoin,20bcoin");
    // duplicate coins
    expect(
      () =>
        new Coins(
          { denom: "acoin", amount: "10" },
          { denom: "acoin", amount: "20" },
          { denom: "bcoin", amount: "30" }
        )
    ).toThrow(new Error("Got duplicate coins"));
    // negative values
    expect(
      () =>
        new Coins(
          { denom: "acoin", amount: "10" },
          { denom: "bcoin", amount: "-30" }
        )
    ).toThrow(new Error("Got an invalid coin string"));
    // invalid denom
    expect(
      () =>
        new Coins(
          { denom: "acoin", amount: "10" },
          { denom: "B", amount: "30" }
        )
    ).toThrow(new Error("Got an invalid coin string"));

    // --- Coins ---

    // coin class
    expect(new Coins(new Coins("10acoin", "20bcoin")).toString()).toEqual(
      "10acoin,20bcoin"
    );
    // multiple coin classes
    expect(
      new Coins(
        new Coins("10acoin", "20bcoin"),
        new Coins("30ccoin")
      ).toString()
    ).toEqual("10acoin,20bcoin,30ccoin");
    // unordered coin classes
    expect(
      new Coins(
        new Coins("30ccoin"),
        new Coins("10acoin", "20bcoin")
      ).toString()
    ).toEqual("10acoin,20bcoin,30ccoin");
    // duplicate coins
    expect(
      () => new Coins(new Coins("10acoin"), new Coins("20acoin", "30bcoin"))
    ).toThrow(new Error("Got duplicate coins"));
  });

  test("toString", () => {
    expect(
      new Coins(
        { denom: "bcoin", amount: "20000000" },
        { denom: "ccoin", amount: "30000000" },
        { denom: "acoin", amount: "10000000" }
      ).toString()
    ).toEqual("10000000acoin,20000000bcoin,30000000ccoin");

    expect(
      new Coins(
        { denom: "bcoin", amount: "20000000" },
        { denom: "ccoin", amount: "0" },
        { denom: "acoin", amount: "10000000" }
      ).toString()
    ).toEqual("10000000acoin,20000000bcoin");
  });

  test("toArray", () => {
    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").toArray()
    ).toEqual([
      { denom: "acoin", amount: "10000000" },
      { denom: "bcoin", amount: "20000000" },
      { denom: "ccoin", amount: "30000000" },
    ]);

    expect(new Coins("10000000acoin,0bcoin,30000000ccoin").toArray()).toEqual([
      { denom: "acoin", amount: "10000000" },
      { denom: "ccoin", amount: "30000000" },
    ]);
  });

  test("len", () => {
    expect(new Coins().len()).toEqual(0);

    expect(new Coins("10000000acoin,20000000bcoin,0ccoin").len()).toEqual(2);

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").len()
    ).toEqual(3);
  });

  test("empty", () => {
    expect(new Coins().empty()).toBeTruthy();

    expect(new Coins("0acoin,0bcoin").empty()).toBeTruthy();

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").empty()
    ).toBeFalsy();
  });

  test("isZero", () => {
    expect(new Coins().isZero()).toBeTruthy();

    expect(new Coins("0acoin,0bcoin,0ccoin").isZero()).toBeTruthy();

    expect(new Coins("0acoin,20bcoin,0ccoin").isZero()).toBeFalsy();
  });

  test("amountOf", () => {
    expect(new Coins().amountOf("acoin")).toEqual("0");

    expect(new Coins("10000000acoin,20000000bcoin").amountOf("ccoin")).toEqual(
      "0"
    );

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").amountOf("bcoin")
    ).toEqual("20000000");
  });

  test("find", () => {
    expect(new Coins().find("acoin")).toBeUndefined();

    expect(
      new Coins("10000000acoin,20000000bcoin").find("ccoin")
    ).toBeUndefined();

    expect(new Coins("0acoin,20000000bcoin").find("acoin")).toBeUndefined();

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").find("bcoin")
    ).toEqual({ denom: "bcoin", amount: "20000000" });
  });

  test("equal", () => {
    expect(new Coins().equal(new Coins())).toBeTruthy();

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").equal(
        new Coins(
          { denom: "bcoin", amount: "20000000" },
          { denom: "ccoin", amount: "30000000" },
          { denom: "acoin", amount: "10000000" }
        )
      )
    ).toBeTruthy();

    expect(
      new Coins("10000000acoin,20000000bcoin,0ccoin").equal(
        new Coins(
          { denom: "bcoin", amount: "20000000" },
          { denom: "acoin", amount: "10000000" }
        )
      )
    ).toBeTruthy();

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").equal(
        new Coins(
          { denom: "bcoin", amount: "20000000" },
          { denom: "ccoin", amount: "30000000" },
          { denom: "acoin", amount: "50000000" }
        )
      )
    ).toBeFalsy();

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").equal(
        new Coins(
          { denom: "bcoin", amount: "20000000" },
          { denom: "ccoin", amount: "30000000" },
          { denom: "dcoin", amount: "10000000" }
        )
      )
    ).toBeFalsy();
  });

  test("denoms", () => {
    expect(new Coins().denoms()).toEqual([]);

    expect(new Coins("20000000bcoin,0acoin,30000000ccoin").denoms()).toEqual([
      "bcoin",
      "ccoin",
    ]);

    expect(
      new Coins("20000000bcoin,10000000acoin,30000000ccoin").denoms()
    ).toEqual(["acoin", "bcoin", "ccoin"]);
  });

  test("isAnyNegative", () => {
    expect(new Coins().isAnyNegative()).toBeFalsy();

    expect(new Coins("0acoin,0bcoin,0ccoin").isAnyNegative()).toBeFalsy();

    expect(
      new Coins("20000000bcoin,10000000acoin,30000000ccoin").isAnyNegative()
    ).toBeFalsy();
  });

  test("isAllPositive", () => {
    expect(new Coins().isAllPositive()).toBeFalsy();

    expect(new Coins("0acoin,0bcoin,0ccoin").isAllPositive()).toBeFalsy();

    expect(
      new Coins("20000000bcoin,10000000acoin,0ccoin").isAllPositive()
    ).toBeFalsy();

    expect(
      new Coins("20000000bcoin,10000000acoin,30000000ccoin").isAllPositive()
    ).toBeTruthy();
  });

  test("add", () => {
    expect(new Coins().add().toString()).toEqual("");

    expect(new Coins().add("10acoin,20bcoin,30ccoin").toString()).toEqual(
      "10acoin,20bcoin,30ccoin"
    );

    expect(new Coins("10acoin").add("10acoin,20bcoin").toString()).toEqual(
      "20acoin,20bcoin"
    );

    expect(new Coins("10acoin").add("0bcoin").toString()).toEqual("10acoin");

    expect(
      new Coins("10acoin,20bcoin,30ccoin")
        .add({ denom: "bcoin", amount: "5" })
        .add(new Coins("7ccoin"))
        .toString()
    ).toEqual("10acoin,25bcoin,37ccoin");
  });

  test("sub", () => {
    expect(new Coins().sub().toString()).toEqual("");

    expect(new Coins("10acoin,20bcoin,30ccoin").sub().toString()).toEqual(
      "10acoin,20bcoin,30ccoin"
    );

    expect(new Coins("10acoin").sub("0bcoin").toString()).toEqual("10acoin");

    expect(
      new Coins("10acoin,20bcoin,30ccoin")
        .sub({ denom: "bcoin", amount: "5" })
        .sub(new Coins("7ccoin"))
        .toString()
    ).toEqual("10acoin,15bcoin,23ccoin");
  });

  test("mul", () => {
    expect(new Coins().mul(1).toString()).toEqual("");

    expect(new Coins("10acoin,20bcoin,30ccoin").mul("0").toString()).toEqual(
      ""
    );

    expect(new Coins("10acoin,20bcoin,30ccoin").mul("3").toString()).toEqual(
      "30acoin,60bcoin,90ccoin"
    );
  });

  test("quo", () => {
    expect(new Coins().quo(1).toString()).toEqual("");

    expect(new Coins("10acoin,20bcoin,30ccoin").quo("10").toString()).toEqual(
      "1acoin,2bcoin,3ccoin"
    );

    expect(new Coins("10acoin,20bcoin,30ccoin").quo(3).toString()).toEqual(
      "3acoin,6bcoin,10ccoin"
    );

    expect(new Coins("4acoin").quo(8).toString()).toEqual("");

    expect(() => new Coins("10acoin,20bcoin,30ccoin").quo(0)).toThrow(
      new Error("Assertion failed")
    );
  });

  test("min", () => {
    expect(new Coins().min().toString()).toEqual("");

    expect(new Coins("10acoin,20bcoin,30ccoin").min().toString()).toEqual("");

    expect(
      new Coins("10acoin,20bcoin,30ccoin")
        .min("20acoin,10bcoin,30ccoin")
        .toString()
    ).toEqual("10acoin,10bcoin,30ccoin");

    expect(new Coins("10acoin,20bcoin").min("10ccoin").toString()).toEqual("");

    expect(
      new Coins("10acoin,20bcoin").min("10bcoin,10ccoin").toString()
    ).toEqual("10bcoin");
  });

  test("max", () => {
    expect(new Coins().max().toString()).toEqual("");

    expect(new Coins("10acoin,20bcoin,30ccoin").max().toString()).toEqual(
      "10acoin,20bcoin,30ccoin"
    );

    expect(
      new Coins("10acoin,20bcoin,30ccoin")
        .max("20acoin,10bcoin,30ccoin")
        .toString()
    ).toEqual("20acoin,20bcoin,30ccoin");

    expect(
      new Coins("10acoin,20bcoin").max("10bcoin,10ccoin").toString()
    ).toEqual("10acoin,20bcoin,10ccoin");
  });

  test("isAllGTE", () => {
    expect(new Coins().isAllGTE()).toBeTruthy();

    expect(new Coins("10acoin,20bcoin,30ccoin").isAllGTE()).toBeTruthy();

    expect(new Coins().isAllGTE("10acoin,20bcoin,30ccoin")).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin").isAllGTE("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAllGTE("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAllGTE("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAllGTE("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAllGTE("10acoin,20bcoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,10bcoin,40ccoin").isAllGTE("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();
  });

  test("isAllGT", () => {
    expect(new Coins().isAllGT()).toBeTruthy();

    expect(new Coins("10acoin,20bcoin,30ccoin").isAllGT()).toBeTruthy();

    expect(new Coins().isAllGT("10acoin,20bcoin,30ccoin")).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin").isAllGT("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAllGT("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAllGT("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAllGT("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAllGT("10acoin,20bcoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,10bcoin,40ccoin").isAllGT("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();
  });

  test("isAllLTE", () => {
    expect(new Coins().isAllLTE()).toBeTruthy();

    expect(new Coins("10acoin,20bcoin,30ccoin").isAllLTE()).toBeFalsy();

    expect(new Coins().isAllLTE("10acoin,20bcoin,30ccoin")).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin").isAllLTE("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAllLTE("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAllLTE("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAllLTE("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAllLTE("10acoin,20bcoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,40bcoin,30ccoin").isAllLTE("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();
  });

  test("isAllLT", () => {
    expect(new Coins().isAllLT()).toBeTruthy();

    expect(new Coins("10acoin,20bcoin,30ccoin").isAllLT()).toBeFalsy();

    expect(new Coins().isAllLT("10acoin,20bcoin,30ccoin")).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin").isAllLT("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAllLT("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAllLT("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAllLT("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAllLT("10acoin,20bcoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,40bcoin,30ccoin").isAllLT("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();
  });

  test("isAnyGTE", () => {
    expect(new Coins().isAnyGTE()).toBeFalsy();

    expect(new Coins("10acoin,20bcoin,30ccoin").isAnyGTE()).toBeFalsy();

    expect(new Coins().isAnyGTE("10acoin,20bcoin,30ccoin")).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin").isAnyGTE("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAnyGTE("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();

    expect(
      new Coins("30bcoin").isAnyGTE("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAnyGTE("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAnyGTE("10acoin,20bcoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,10bcoin,40ccoin").isAnyGTE("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();
  });

  test("isAnyGT", () => {
    expect(new Coins().isAnyGT()).toBeFalsy();

    expect(new Coins("10acoin,20bcoin,30ccoin").isAnyGT()).toBeFalsy();

    expect(new Coins().isAnyGT("10acoin,20bcoin,30ccoin")).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin").isAnyGT("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAnyGT("20acoin,30bcoin,40ccoin")
    ).toBeFalsy();

    expect(
      new Coins("30bcoin").isAnyGT("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAnyGT("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAnyGT("10acoin,20bcoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,10bcoin,40ccoin").isAnyGT("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();
  });

  test("isAnyLTE", () => {
    expect(new Coins().isAnyLTE()).toBeFalsy();

    expect(new Coins("10acoin,20bcoin,30ccoin").isAnyLTE()).toBeFalsy();

    expect(new Coins().isAnyLTE("10acoin,20bcoin,30ccoin")).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin").isAnyLTE("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAnyLTE("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAnyLTE("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAnyLTE("10acoin,20bcoin,30ccoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAnyLTE("10acoin,20bcoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,40bcoin,30ccoin").isAnyLTE("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin").isAnyLTE("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();
  });

  test("isAnyLT", () => {
    expect(new Coins().isAnyLT()).toBeFalsy();

    expect(new Coins("10acoin,20bcoin,30ccoin").isAnyLT()).toBeFalsy();

    expect(new Coins().isAnyLT("10acoin,20bcoin,30ccoin")).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin").isAnyLT("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAnyLT("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAnyLT("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,20bcoin,30ccoin").isAnyLT("10acoin,20bcoin,30ccoin")
    ).toBeFalsy();

    expect(
      new Coins("20acoin,30bcoin,40ccoin").isAnyLT("10acoin,20bcoin")
    ).toBeFalsy();

    expect(
      new Coins("10acoin,40bcoin,30ccoin").isAnyLT("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();

    expect(
      new Coins("10acoin").isAnyLT("20acoin,30bcoin,40ccoin")
    ).toBeTruthy();
  });
});
