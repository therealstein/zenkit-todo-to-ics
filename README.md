# Zenkit Todo to ICS

This script converts Zenkit todo tasks to an ICS file. This file can be imported into Google Calendar, Outlook, etc.

I made this little script because i migrated from Zenkit todo to nextcloud and wanted to keep my tasks.

It needs a little bit of work to make it more generic, but it works for me.

## Installation

Before running the script, make sure to install the necessary dependencies:

```bash
npm install
```

## Usage

Export your Zenkit todo tasks to a JSON file. You can do this by going to the Zenkit todo web app, select the list you want to export and click on the export button. Select JSON as the export format.

Change the filename in the index.js file to the filename of the JSON file you just exported.

To run the script, use the following command:

```bash
node index.js
```

This will generate an `yourcalendername.ics` file in the same directory.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
