const { Component, Property } = require("immutable-ics");
const fs = require("fs");

const jsonFile = "EK-Liste.json";

class ConvertToIcs {
  constructor(jsonFile) {
    this.jsonFile = jsonFile;
  }

  async main() {
    const json = JSON.parse(fs.readFileSync(this.jsonFile, "utf8"));

    const comps = json.entries.map((item) => {
      const { uuid, created_at, updated_at, displayString } = item;
      return new Component({
        name: "VTODO",
        properties: [
          new Property({ name: "UID", value: uuid }),
          new Property({
            name: "CREATED",
            value: new Date(created_at),
          }),
          new Property({
            name: "LAST-MODIFIED",
            value: new Date(updated_at),
          }),
          new Property({
            name: "DTSTAMP",
            value: new Date(created_at),
          }),
          new Property({
            name: "SUMMARY",
            value: displayString,
          }),
          new Property({
            name: "PERCENT-COMPLETE",
            value: "100",
          }),
          new Property({
            name: "completed",
            value: "20231104T110941",
          }),
          new Property({
            name: "STATUS",
            value: "COMPLETED",
          }),
        ],
      });
    });
    const calName = jsonFile.split(".")[0];
    const calendar = new Component({
      name: "VCALENDAR",
      properties: [
        new Property({ name: "VERSION", value: 2 }),
        new Property({ name: "CALSCALE", value: "GREGORIAN" }),
        new Property({ name: "PRODID", value: "made with nodejs" }),
        new Property({ name: "X-WR-CALNAME", value: calName }),
      ],
      components: comps,
    });

    const data = calendar.toString();

    const filename = calName + ".ics";

    fs.writeFile(filename, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("ICS File has been created");
    });
  }
}

const main = async () => {
  const converter = new ConvertToIcs(jsonFile);
  await converter.main();
};

main();
