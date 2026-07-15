---
name: neo4j.repository
repo: Ambystech.Neo4j.Repository
url: https://github.com/ambystechcom/Ambystech.Neo4j.Repository
language: C#
registry: NuGet
packageName: Ambystech.Neo4j.Repository
install: dotnet add package Ambystech.Neo4j.Repository
accent: sky
terminalAbout: graph repositories
tagline: Generic repository pattern for Neo4j
description: A lightweight, flexible repository pattern for Neo4j in .NET — simplifies graph data access and keeps your architecture clean and testable.
topics: [neo4j, repository-pattern, dotnet]
order: 2
---

A repository pattern implementation for Neo4j graph databases in .NET, enabling easy CRUD operations, relationship management and search functionality — so your graph data access stays clean, reusable and testable.

## Packages

- **Ambystech.Neo4j.Repository** — main repository implementation
- **Ambystech.Neo4j.Repository.Contracts** — base contracts and attributes

```bash
dotnet add package Ambystech.Neo4j.Repository
dotnet add package Ambystech.Neo4j.Repository.Contracts
```

## Quick start

Configure your Neo4j connection in `appsettings.json` or user secrets:

```json
{
  "Neo4j-Uri": "bolt://localhost:7687",
  "Neo4j-User": "neo4j",
  "Neo4j-Password": "password"
}
```

Register the services:

```csharp
builder.Services.AddNeo4jRepository();
builder.Services.AddSingleton<INodeConverter<YourEntity>, YourEntityConverter>();
builder.Services.AddScoped<IBaseGraphRepository<YourEntity>, YourEntityRepository>();
```

Then use the repository:

```csharp
var repository = serviceProvider.GetRequiredService<IBaseGraphRepository<YourEntity>>();
var entities = await repository.GetAllAsync();
```

## Features

- Generic CRUD operations
- Relationship management
- Search and filtering
- Soft delete support
- Automatic relationship loading

## Example

The repository ships with a complete working example — a social network graph with Users, Posts, Likes and Dislikes — in the [`example/` directory](https://github.com/ambystechcom/Ambystech.Neo4j.Repository/tree/main/example).
