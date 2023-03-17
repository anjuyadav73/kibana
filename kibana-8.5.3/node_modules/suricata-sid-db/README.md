# suricata-sid-database

Creates a Suricata JSON hash object from the references in your local Suricata rules.
You can use this repo or the curl/jq commands below to query and get
additional information about Suricata sid's from alerts you might have by using the
hyperlinks (references) from Suricata that this DB provides.

# How to use this DB

Install [jq](https://stedolan.github.io/jq/)

Optionally, clone or download the contents of the JSON from [data/suricata-rules-ref.json](data/suricata-rules-ref.json)

Then, if you have a Suricata sid such as `2001219`, run it against the JSON like so

```sh
curl https://raw.githubusercontent.com/FrankHassanabad/suricata-sid-database/master/data/suricata-rules-ref.json | jq '."2001219"'
```

or if you have the json downloaded locally, it would be like this

```sh
jq '."2001219"' data/suricata-rules-ref.json
```

Your response should be several hyper links like this:

```ts
[
  'http://en.wikipedia.org/wiki/Brute_force_attack',
  'http://doc.emergingthreats.net/2001219',
];
```

or if nothing was found a `null` or if a rule was found but nothing about references a
empty array like so

```
[]
```

# How to build a new database based on rules you have

Ensure you have Suricata installed, then run

```sh
npm install
npm start
```

Look in your newly created [data/suricata-rules-ref.json](data/suricata-rules-ref.json)

If you have a different location for rules, then modify [src/builddb.ts](src/builddb.ts) at these lines:

```ts
const REFERENCE_CONF = '/usr/local/etc/suricata/rules/reference.config';
const RULES_DIR = '/usr/local/etc/suricata/rules';
```
