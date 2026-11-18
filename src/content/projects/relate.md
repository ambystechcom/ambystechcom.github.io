---
name: relate
image: ../../assets/projects/relate-pet.png
repo: Ambystech.Relate
url: https://github.com/ambystechcom/Ambystech.Relate
language: C#
registry: NuGet
packageName: Ambystech.Relate
install: dotnet add package Ambystech.Relate
license: Apache-2.0
tile: purple
icon: database
tagline: Embedded graph database for .NET
description: .NET client for Relate by Neo4j — an embedded Cypher graph database that runs inside your process, with no server to manage, an ADO.NET provider and vector search.
topics: [relate, graph-database, cypher, dotnet]
order: 5
---

A .NET client for [Relate by Neo4j](https://relatedb.ai), the open-source embedded Cypher graph database built for AI agents. The engine runs **inside your process**: there is no server, container or credentials to manage. Open `:memory:` for a scratch graph, or a single `.rl` file you can commit to a repo. Full documentation lives at [relate.ambystech.io](https://relate.ambystech.io).

## Install

```bash
dotnet add package Ambystech.Relate
```

| Package | Relate engine | C ABI |
| --- | --- | --- |
| 0.1.x | 1.0.2 | v2 |

## Quick start

```csharp
using Ambystech.Relate;

using var db = RelateDatabase.Open("./team.rl");   // or RelateDatabase.Open() for :memory:

db.Run("""
    CREATE (ada:Person {name: 'Ada'}), (relate:Project {name: 'relate'}),
           (ada)-[:WORKS_ON {since: 2024}]->(relate)
    """);

var result = db.Run(
    "MATCH (p:Person)-[w:WORKS_ON]->(:Project {name: $project}) RETURN p.name AS name, w.since AS since",
    new { project = "relate" });

foreach (var row in result)
{
    Console.WriteLine($"{row["name"]} since {row.Get<int>("since")}");
}
```

## Features

- **Driver-style API** — `RelateDatabase`, `RelateSession`, `RelateTransaction`, typed records and rich graph values (nodes, relationships, paths, temporals, points, durations, vectors)
- **ADO.NET provider** — `RelateDbConnection`, `RelateDbCommand`, `RelateDbDataReader` and a `DbProviderFactory`
- **Vector search plus traversal** — `SEARCH` and graph traversal in the same Cypher statement, for agent memory
- **Bundled engine** — the native library ships in the package for `win-x64`, `linux-x64`, `linux-arm64`, `osx-x64` and `osx-arm64`
- **Modern .NET** — targets `net8.0` and `net10.0`, source-generated interop, trimming- and AOT-annotated

> Community package by Ambystech. Not affiliated with or endorsed by Neo4j, Inc. Relate is Apache-2.0 software by Neo4j.
