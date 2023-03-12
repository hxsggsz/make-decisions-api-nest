/*
  Warnings:

  - You are about to drop the column `options` on the `Options` table. All the data in the column will be lost.
  - Added the required column `option` to the `Options` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Options" DROP COLUMN "options";
ALTER TABLE "Options" ADD COLUMN     "option" STRING NOT NULL;
