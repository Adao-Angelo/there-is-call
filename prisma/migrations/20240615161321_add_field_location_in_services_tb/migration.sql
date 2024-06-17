/*
  Warnings:

  - Added the required column `location` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tittle" TEXT NOT NULL,
    "agent_id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "volume" REAL NOT NULL
);
INSERT INTO "new_services" ("agent_id", "id", "tittle", "volume") SELECT "agent_id", "id", "tittle", "volume" FROM "services";
DROP TABLE "services";
ALTER TABLE "new_services" RENAME TO "services";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
