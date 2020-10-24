# Migration `20201014074726-init`

This migration has been generated by yuval Styr at 10/14/2020, 10:47:26 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201014074726-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,40 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model User {
+  firstName String
+  lastName  String
+  left      Int       @default(10)
+  createdAt DateTime  @default(now())
+  id        Int       @id @default(autoincrement())
+  email     String
+  Workout   Workout[]
+}
+
+model Workout {
+  type   WorkoutType
+  status WorkoutStatus
+  date   String
+  time   String
+  id     Int           @id @default(autoincrement())
+  User   User[]
+
+  @@unique([date, time], name: "Workout.date_time_unique")
+}
+
+enum WorkoutStatus {
+  Active
+  Cancelled
+  Over
+}
+
+enum WorkoutType {
+  PERSONAL
+  TEAM
+}
```

