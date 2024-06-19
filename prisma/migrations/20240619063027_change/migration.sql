/*
  Warnings:

  - You are about to drop the column `tittle` on the `services` table. All the data in the column will be lost.
  - Added the required column `title` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "agent_id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "volume" REAL NOT NULL
);
INSERT INTO "new_services" ("agent_id", "id", "location", "volume") SELECT "agent_id", "id", "location", "volume" FROM "services";
DROP TABLE "services";
ALTER TABLE "new_services" RENAME TO "services";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
