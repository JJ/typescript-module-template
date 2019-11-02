import { Module } from '../Module';

test("all", () => {
    const data = new Module.Class("new");
    expect(  data.all() ).toBe("new");
});
