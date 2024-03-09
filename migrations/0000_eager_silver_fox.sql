CREATE TABLE IF NOT EXISTS "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone,
	"customer_id" uuid NOT NULL,
	"items" jsonb DEFAULT 'null'::jsonb,
	"total_price" integer NOT NULL,
	"order_status" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone,
	"updated_at" timestamp with time zone,
	"product_name" text NOT NULL,
	"category_name" text NOT NULL,
	"image" text NOT NULL,
	"quantiy" text,
	"price" text NOT NULL,
	"stock" integer NOT NULL,
	"description" text,
	"additional_info" text,
	"feedbacks" text[],
	"rating" integer NOT NULL,
	"tags" text[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"billing_details" json DEFAULT '{"properties":{"firstName":{"config":{"name":"first_name","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"string","columnType":"PgText"},"foreignKeyConfigs":[]},"lastName":{"config":{"name":"last_name","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"string","columnType":"PgText"},"foreignKeyConfigs":[]},"companyName":{"config":{"name":"company_name","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"string","columnType":"PgText"},"foreignKeyConfigs":[]},"streetAddress":{"config":{"name":"street_address","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"string","columnType":"PgText"},"foreignKeyConfigs":[]},"country":{"config":{"name":"country","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"string","columnType":"PgText"},"foreignKeyConfigs":[]},"states":{"config":{"name":"states","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"string","columnType":"PgText"},"foreignKeyConfigs":[]},"zipcode":{"config":{"name":"zip_code","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"number","columnType":"PgInteger"},"foreignKeyConfigs":[]},"email":{"config":{"name":"email","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"string","columnType":"PgText"},"foreignKeyConfigs":[]},"phone":{"config":{"name":"phone","notNull":false,"hasDefault":false,"primaryKey":false,"isUnique":false,"dataType":"string","columnType":"PgText"},"foreignKeyConfigs":[]}}}'::json
);
