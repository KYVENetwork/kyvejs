import { Coins } from "../src/coins";

// TODO: negative values in constructor?
// TODO: should sub with negative values fail?
// TODO: validate denoms

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
      new Error("Found duplicate coins")
    );
    // duplicates in multiple coin string
    expect(() => new Coins("10acoin,30bcoin", "20acoin")).toThrow(
      new Error("Found duplicate coins")
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
    ).toThrow(new Error("Found duplicate coins"));

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
    ).toThrow(new Error("Found duplicate coins"));
  });

  test("toString", () => {
    expect(
      new Coins(
        { denom: "bcoin", amount: "20000000" },
        { denom: "ccoin", amount: "30000000" },
        { denom: "acoin", amount: "10000000" }
      ).toString()
    ).toEqual("10000000acoin,20000000bcoin,30000000ccoin");
  });

  test("toArray", () => {
    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").toArray()
    ).toEqual([
      { denom: "acoin", amount: "10000000" },
      { denom: "bcoin", amount: "20000000" },
      { denom: "ccoin", amount: "30000000" },
    ]);
  });

  test("len", () => {
    expect(new Coins().len()).toEqual(0);

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").len()
    ).toEqual(3);
  });

  test("isEmpty", () => {
    expect(new Coins().isEmpty()).toBeTruthy();

    expect(
      new Coins("10000000acoin,20000000bcoin,30000000ccoin").isEmpty()
    ).toBeFalsy();
  });

  test("isZero", () => {
    expect(new Coins().isZero()).toBeTruthy();

    expect(new Coins("0acoin,0bcoin,0ccoin").isZero()).toBeTruthy();

    expect(new Coins("0acoin,20000000bcoin,0ccoin").isZero()).toBeFalsy();
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

    expect(
      new Coins(
        { denom: "bcoin", amount: "20000000" },
        { denom: "ccoin", amount: "-30000000" },
        { denom: "acoin", amount: "10000000" }
      ).isAnyNegative()
    ).toBeTruthy();
  });

  test("isAllPositive", () => {
    expect(new Coins().isAllPositive()).toBeFalsy();

    expect(new Coins("0acoin,0bcoin,0ccoin").isAllPositive()).toBeFalsy();

    expect(
      new Coins("20000000bcoin,10000000acoin,30000000ccoin").isAllPositive()
    ).toBeTruthy();

    expect(
      new Coins(
        { denom: "bcoin", amount: "20000000" },
        { denom: "ccoin", amount: "-30000000" },
        { denom: "acoin", amount: "10000000" }
      ).isAllPositive()
    ).toBeFalsy();
  });

  test("add", () => {
    expect(new Coins().add().toString()).toEqual("");

    expect(new Coins().add("10acoin,20bcoin,30ccoin").toString()).toEqual(
      "10acoin,20bcoin,30ccoin"
    );

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

    expect(
      new Coins("10acoin,20bcoin,30ccoin")
        .sub({ denom: "bcoin", amount: "5" })
        .sub(new Coins("7ccoin"))
        .sub("15acoin,3dcoin")
        .toString()
    ).toEqual("-5acoin,15bcoin,23ccoin,-3dcoin");
  });

  test("mul", () => {
    expect(new Coins().mul(1).toString()).toEqual("");

    expect(new Coins("10acoin,20bcoin,30ccoin").mul("0").toString()).toEqual(
      "0acoin,0bcoin,0ccoin"
    );

    expect(new Coins("10acoin,20bcoin,30ccoin").mul("3").toString()).toEqual(
      "30acoin,60bcoin,90ccoin"
    );

    expect(
      new Coins(
        { denom: "acoin", amount: "10" },
        { denom: "bcoin", amount: "-20" },
        { denom: "ccoin", amount: "30" }
      )
        .mul(-2)
        .toString()
    ).toEqual("-20acoin,40bcoin,-60ccoin");
  });

  test("div", () => {
    expect(new Coins().div(1).toString()).toEqual("");

    expect(new Coins("10acoin,20bcoin,30ccoin").div("10").toString()).toEqual(
      "1acoin,2bcoin,3ccoin"
    );

    expect(new Coins("10acoin,20bcoin,30ccoin").div(3).toString()).toEqual(
      "3acoin,6bcoin,10ccoin"
    );

    expect(
      new Coins(
        { denom: "acoin", amount: "10" },
        { denom: "bcoin", amount: "-20" },
        { denom: "ccoin", amount: "30" }
      )
        .div(-2)
        .toString()
    ).toEqual("-5acoin,10bcoin,-15ccoin");

    expect(() => new Coins("10acoin,20bcoin,30ccoin").div(0)).toThrow(
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
});
