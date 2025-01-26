-- Before:
-- ALTER TABLE "Invoice" ADD COLUMN "paid" BOOLEAN;

-- After:
ALTER TABLE "Invoice" ADD COLUMN "paid" BOOLEAN DEFAULT false;
ALTER TABLE "Invoice" ALTER COLUMN "paid" SET NOT NULL;

