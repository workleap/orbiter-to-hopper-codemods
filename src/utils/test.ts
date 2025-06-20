import { defaultJSCodeshiftParser } from "@codemod.com/codemod-utils";
import jscodeshift, { type API } from "jscodeshift";
import { tmpdir } from "os";
import { mappings as initialMappings } from "../mappings/orbiter/index.ts";
import { getMigrationNotesManager } from "./migration-notes.js";
import type { MapMetaData, Runtime } from "./types.ts";

export const buildApi = (parser?: string | jscodeshift.Parser): API => ({
  j: parser ? jscodeshift.withParser(parser) : jscodeshift,
  jscodeshift: parser ? jscodeshift.withParser(parser) : jscodeshift,
  stats: () => {
    console.error(
      "The stats function was called, which is not supported on purpose"
    );
  },
  report: () => {
    console.error(
      "The report function was called, which is not supported on purpose"
    );
  }
});

export const getRuntime = (
  source: string,
  mappingsOverrides?: Partial<MapMetaData>
): Runtime => {
  const api = buildApi(defaultJSCodeshiftParser); //to make sure our tests work like the codemod parser

  // Create a migration notes manager with a temporary directory and random filename for tests
  const testMigrationNotesManager = getMigrationNotesManager(
    tmpdir(), 
    `migration-notes-${Math.random().toString(36).substring(2, 10)}.md.tmp`
  );
  
  return {
    root: api.jscodeshift(source),
    filePath: "test.tsx",
    j: api.j,
    mappings: {
      ...initialMappings,
      ...mappingsOverrides
    },
    getMigrationNotesManager: () => testMigrationNotesManager,
    getRepoInfo: () => null, // No git info in tests
    getBranch: () => "main", // Default branch for tests
    log: () => {}
  };
};

export function removeSpacesAndNewlines(str: string): string {
  return str.replace(/\s+/g, " ").replace(/\n/g, " ").trim();
}
