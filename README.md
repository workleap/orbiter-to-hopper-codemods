# Orbiter to Hopper Codemod

This codemod automates the migration of components from [Orbiter](https://github.com/workleap/wl-orbiter) to the [Hopper](https://github.com/workleap/wl-hopper) design system.

The codemod handles various migration scenarios including:

- ✅ **Component migrations** - Automatically updates import statements and component names
- ✅ **Property transformations** - Maps old properties to new equivalents (e.g., `disabled` → `isDisabled`)
- ✅ **Deprecated component handling** - Keeps deprecated components in original package with todo comments for manual migration
- ✅ **Todo comment generation** - Adds contextual migration guidance directly in your code
- ✅ **Migration notes collection** - Generates comprehensive notes about important changes that require manual review

## Before Migration

```tsx
import { Div } from "@workleap/orbiter-ui";

export function App() {
  return <Div width="100px"/>;
}
```

## After Migration

```tsx
import { Div } from "@hopper-ui/components";

export function App() {
  return <Div UNSAFE_width="100px"/>;
}
```

## Usage Guide

### Running Migrations

#### Migrate All Components

```bash
pnpx codemod workleap/orbiter-to-hopper
```

#### Migrate Layout Components Only

Migrate layout and structural components only (Flex, Grid, Div, Span, Article, Nav, ...). This includes all layout containers, HTML wrapper components, content elements, and placeholders. You can see the complete list in [layout-components-mappings.ts](/src/mappings/orbiter/layout-components-mappings.ts) file.

```bash
pnpx codemod workleap/orbiter-to-hopper -c layout
```

#### Migrate Button Components Only

Migrate buttons components only. You can see the complete list in [button-components-mappings.ts](/src/mappings/orbiter/button-components-mappings.ts) file.

```bash
pnpx codemod workleap/orbiter-to-hopper -c buttons
```

#### Migrate Visual Components Only

Migrate visual components only (Avatar, AvatarText, Badge, Image, Illustration, Spinner, ...). This includes visual elements that often represent data or provide feedback. You can see the complete list in [visual-components-mappings.ts](/src/mappings/orbiter/visual-components-mappings.ts) file.

```bash
pnpx codemod workleap/orbiter-to-hopper -c visual
```

#### Migrate Specific Components

Migrate a single component:

```bash
pnpx codemod workleap/orbiter-to-hopper -c Div
```

Migrate multiple specific components:

```bash
pnpx codemod workleap/orbiter-to-hopper -c Div,Text,Button
```

#### Target a Specific Path

Run the command in the desire path or pass the target path with the `-t` argument.

```bash
pnpx codemod workleap/orbiter-to-hopper -t /app/users
```

#### Additional Options

For more configuration options, refer to the [Codemod CLI options documentation](https://docs.codemod.com/deploying-codemods/cli#options).

### Migration Notes

The codemod automatically generates migration notes to help track important changes that require manual review. These notes are collected during the transformation process and aggregated into a `migration-notes.md` file.

### Analyzing Component Usage

To generate a report of Orbiter component usage patterns, use the following command:

```bash
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage.json -n 1
```

⚠️ **Important**: The `-n 1` flag limits execution to a single thread, which ensures accurate output collection.

#### Project-Specific Analysis

You can track component usage across different projects or teams using the `--project` parameter:

```bash
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage.json --project frontend-team -n 1
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage.json --project mobile-app -n 1
```

The analysis automatically accumulates results across multiple project runs, providing both project-specific counts and overall totals in the output.

#### Deep Analysis

To include detailed file location information for each property value, use the `--deep` parameter:

```bash
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage.json --deep true --project frontend-team -n 1
```

When deep analysis is enabled, each property value will include a `files` array containing repository URLs (GitHub or Azure DevOps) with line numbers where that specific value is used. For repositories that are not supported, file paths are used as fallback.

#### Specifying Mapping Table

By default, analysis is performed using Orbiter mappings. You can specify which mapping table to use with the `--mappings` parameter:

```bash
# Default (orbiter mappings)
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage.json --deep true -n 1

# Using hopper mappings
pnpx codemod workleap/orbiter-to-hopper -a hopper-usage.json --mappings hopper --deep true -n 1
```

The output file name will automatically reflect the mapping type used.

#### Filtering Analysis Results

You can filter the analysis to focus on specific areas that need attention:

**Analyze only unmapped components:**

```bash
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage-not-mapped-components.json --filter-unmapped components -n 1
```

**Analyze only unmapped properties for mapped components:**

```bash
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage-not-mapped-props.json --filter-unmapped props -n 1
```

**Include ignored properties in analysis:**

By default, the analysis excludes standard React/DOM properties like `aria-*`, `data-*`, `className`, `style`, etc. to focus on component-specific migration needs. To include these properties in the analysis, use the `--include-ignoreList` flag:

```bash
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage-complete.json --include-ignoreList -n 1
```

This can be combined with other filters for comprehensive analysis:

```bash
pnpx codemod workleap/orbiter-to-hopper -a orbiter-usage-all-unmapped.json --filter-unmapped props --include-ignoreList -n 1
```

This command generates a JSON file (`orbiter-usage.json`) containing usage statistics ordered by frequency. The output format prioritizes frequently used components and their properties:

```json
{
  "overall": {
    "usage": {
      "components": 20,
      "props": 80
    }
  },  
  "components": {  
    "Text": {
      "usage": {
        "total": 15,
        "projects": {
          "frontend-team": 10,
          "mobile-app": 5
        }
      },
      "props": {
        "size": {
          "usage": 75,
          "values": {
            "lg": { 
              "usage": {
                "total": 50, 
                "projects": { 
                  "frontend-team": 30, 
                  "mobile-app": 20 
                }
              },
              "files": [ //if --deep true is passed
                "https://github.com/myorg/myrepo/blob/main/src/components/Header.tsx#L15",
                "https://dev.azure.com/myorg/myproject/_git/myrepo?path=%2Fsrc%2Fcomponents%2FHero.tsx&version=GBmain&line=23",
                "/src/pages/Dashboard.tsx"] 
            },
            "md": { 
              "usage": {
                "total": 25, 
                "projects": { 
                  "frontend-team": 15, 
                  "mobile-app": 10 
                }
              }
            }
          }
        }
      }
    },
    "Div": {
      "usage": {
        "total": 5,
        "projects": {
          "frontend-team": 3,
          "mobile-app": 2
        }
      },
      ...
    }
  }
}
```

## Allowed Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `-a <filename>` | Output analysis results to a JSON file | `-a orbiter-usage.json` |
| `-c <components>` | Specify which components to migrate (`all`, category name, or comma-separated list) | `-c layout`, `-c Div,Text,Button` |
| `-t <path>` | Target path for migration (use current directory if not specified) | `-t /app/users` |
| `--project <name>` | Track usage by project/team (accumulates across runs) | `--project frontend-team` |
| `--deep true` | Include file paths for each property value | `--deep true` |
| `--filter-unmapped <type>` | Filter to show only unmapped items (`components` or `props`) | `--filter-unmapped props` |
| `--include-ignoreList` | Include ignored properties (aria-*, data-*, etc.) in analysis | `--include-ignoreList` |
| `--mappings <type>` | Specify which mapping to use for analysis or migration (`orbiter` or `hopper`) | `--mappings hopper` |
| `-n 1` | Use single thread for accurate output collection | `-n 1` |

**⚠️ Important Notes:**

- Always use `-n 1` when generating analysis output to ensure accuracy
- Project-specific analysis accumulates results across multiple runs
- Deep analysis provides detailed file location tracking but may increase processing time
- Results are automatically sorted by usage frequency (most used first)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on how to contribute to this project.
