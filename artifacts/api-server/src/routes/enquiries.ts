import { Router } from "express";
import { db, enquiriesTable } from "@workspace/db";
import { desc, eq } from "drizzle-orm";
import { insertEnquirySchema } from "@workspace/db";

const enquiriesRouter = Router();

enquiriesRouter.get("/enquiries", async (req, res) => {
  try {
    const enquiries = await db
      .select()
      .from(enquiriesTable)
      .orderBy(desc(enquiriesTable.createdAt));
    res.json(enquiries);
  } catch (err) {
    req.log.error({ err }, "Failed to list enquiries");
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
});

enquiriesRouter.post("/enquiries", async (req, res) => {
  try {
    const parsed = insertEnquirySchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.message });
      return;
    }

    const [created] = await db
      .insert(enquiriesTable)
      .values(parsed.data)
      .returning();

    res.status(201).json(created);
  } catch (err) {
    req.log.error({ err }, "Failed to create enquiry");
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});

enquiriesRouter.get("/enquiries/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }

    const [enquiry] = await db
      .select()
      .from(enquiriesTable)
      .where(eq(enquiriesTable.id, id))
      .limit(1);

    if (!enquiry) {
      res.status(404).json({ error: "Enquiry not found" });
      return;
    }

    res.json(enquiry);
  } catch (err) {
    req.log.error({ err }, "Failed to get enquiry");
    res.status(500).json({ error: "Failed to fetch enquiry" });
  }
});

enquiriesRouter.patch("/enquiries/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }

    const { status } = req.body as { status: string };
    if (!["new", "read", "replied"].includes(status)) {
      res.status(400).json({ error: "Invalid status value" });
      return;
    }

    const [updated] = await db
      .update(enquiriesTable)
      .set({ status })
      .where(eq(enquiriesTable.id, id))
      .returning();

    if (!updated) {
      res.status(404).json({ error: "Enquiry not found" });
      return;
    }

    res.json(updated);
  } catch (err) {
    req.log.error({ err }, "Failed to update enquiry status");
    res.status(500).json({ error: "Failed to update enquiry" });
  }
});

export default enquiriesRouter;
