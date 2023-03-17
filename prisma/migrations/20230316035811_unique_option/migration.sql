/*
  Warnings:

  - A unique constraint covering the columns `[option]` on the table `Options` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Options_option_key" ON "Options"("option");
