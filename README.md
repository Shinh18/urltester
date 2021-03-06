# Urltester

Command-line tool for finding and reporting dead links (e.g., broken URLs) in a file

#### Usage

- `urltester`
  - This command displays a standard usage manual which shows how to use the tool as well as the command line arguments available
- `urltester <filename>`
  - This command enables the tool to search for all the links in the file, make network requests and prints out the url with their respective status code
- `urltester -v | version `
  - Using either v or version command, you can see the tool name and current version
- `urltester -j | --json | \j `
  - Using either one of these commands will display the outputs in JSON format
- `urltester -all | --good | --bad `
  - --all will displays all URLs
  - --good will display all good URLs i.e. status code 200
  - --bad will display all bad URLs i.e. status code 400 or 404
- `urltester -i | --ignore`
  - Using either one of these commands will parse an ignored URLs text file. All URLs should be checked against this list to see if they need to be ignored.

#### Features

- It looks for and processes all the URLs using `http://` or `https://` schemes
- URLs are displayed according to the following:
  - Green: good, status code 200
  - Red: bad, status code 400 or 404
  - Gray: unknown, status code
- Optimized to request headers instead of full body downloads
- Additional support is added for timeouts
- Ignore URL pattern feature is added to ignore specified URL patterns.
