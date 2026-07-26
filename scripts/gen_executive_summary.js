const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, LevelFormat, WidthType, BorderStyle,
  VerticalAlign, ShadingType
} = require("docx");
const fs = require("fs");
const path = require("path");

const goldFill = "C8A200";
const goldText = "7A5C00";
const lightGray = "F5F5F5";
const darkText = "1A1A1A";

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text, bold: true, size: 36, color: goldText, font: "Arial" })],
    spacing: { before: 320, after: 160 },
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text, bold: true, size: 28, color: darkText, font: "Arial" })],
    spacing: { before: 240, after: 120 },
  });
}

function body(text, { bold = false, italic = false, color = darkText } = {}) {
  return new Paragraph({
    children: [new TextRun({ text, bold, italic, size: 22, color, font: "Arial" })],
    spacing: { before: 80, after: 80 },
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text, size: 22, font: "Arial", color: darkText })],
    spacing: { before: 60, after: 60 },
  });
}

function divider() {
  return new Paragraph({
    border: { bottom: { color: goldFill, size: 6, style: BorderStyle.SINGLE } },
    spacing: { before: 120, after: 120 },
    children: [],
  });
}

function cell(text, { bold = false, shade = false, width = 2000 } = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    shading: shade ? { fill: "F9F3DC", type: ShadingType.CLEAR } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold, size: 20, font: "Arial", color: darkText })],
      }),
    ],
  });
}

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 22, color: darkText } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: goldText },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: darkText },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        // Title block
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 80 },
          children: [
            new TextRun({ text: "Krungsri Bank", bold: true, size: 44, font: "Arial", color: goldText }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 80 },
          children: [
            new TextRun({ text: "Branch Operations Executive Summary", bold: true, size: 32, font: "Arial", color: darkText }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 240 },
          children: [
            new TextRun({ text: "ช่วงข้อมูล: 1–28 เมษายน 2026  |  จัดทำโดย: Operations Review Team", size: 20, italic: true, font: "Arial", color: "666666" }),
          ],
        }),
        divider(),

        // Section 1: Overview
        heading1("1. ภาพรวมสถานการณ์"),
        body(
          "ในช่วง 28 วันที่ผ่านมา (เมษายน 2026) การดำเนินงานของสาขาและ Contact Center พบประเด็น " +
          "ที่ต้องติดตามใน 3 ด้านหลัก ได้แก่ ยอดเปิดบัญชีใหม่ ประสิทธิภาพการอนุมัติสินเชื่อ และ " +
          "Conversion Rate ของ Mobile Banking Lead"
        ),

        divider(),

        // Section 2: Key Metrics
        heading1("2. Key Metrics"),
        new Table({
          width: { size: 9026, type: WidthType.DXA },
          rows: [
            new TableRow({
              tableHeader: true,
              children: [
                cell("Metric", { bold: true, shade: true, width: 3000 }),
                cell("ค่าก่อนหน้า", { bold: true, shade: true, width: 2000 }),
                cell("ค่าปัจจุบัน", { bold: true, shade: true, width: 2000 }),
                cell("สถานะ", { bold: true, shade: true, width: 2026 }),
              ],
            }),
            new TableRow({
              children: [
                cell("ยอดเปิดบัญชีใหม่ (สาขาภาคตะวันออก/เหนือ)", { width: 3000 }),
                cell("ตามเป้า", { width: 2000 }),
                cell("ต่ำกว่าเป้า ~7%", { width: 2000 }),
                cell("⚠ ต้องติดตาม", { width: 2026 }),
              ],
            }),
            new TableRow({
              children: [
                cell("Mobile Banking Lead Conversion Rate", { width: 3000 }),
                cell("18%", { width: 2000 }),
                cell("14%", { width: 2000 }),
                cell("⚠ ลดลง", { width: 2026 }),
              ],
            }),
            new TableRow({
              children: [
                cell("Loan Approval Turnaround Time (median)", { width: 3000 }),
                cell("4.2 วัน", { width: 2000 }),
                cell("5.1 วัน", { width: 2000 }),
                cell("⚠ เพิ่มขึ้น", { width: 2026 }),
              ],
            }),
            new TableRow({
              children: [
                cell("Complaint: เอกสารสินเชื่อไม่ครบ", { width: 3000 }),
                cell("Baseline", { width: 2000 }),
                cell("เพิ่มขึ้น +18%", { width: 2000 }),
                cell("⚠ ต้องแก้ไข", { width: 2026 }),
              ],
            }),
            new TableRow({
              children: [
                cell("Mobile Banking Lead เข้าระบบ", { width: 3000 }),
                cell("Baseline", { width: 2000 }),
                cell("เพิ่มขึ้น +12%", { width: 2000 }),
                cell("✓ เพิ่มขึ้น", { width: 2026 }),
              ],
            }),
            new TableRow({
              children: [
                cell("ใบสมัครสินเชื่อค้างพิจารณา", { width: 3000 }),
                cell("—", { width: 2000 }),
                cell("28 ราย", { width: 2000 }),
                cell("⚠ ต้องเร่งรัด", { width: 2026 }),
              ],
            }),
          ],
        }),

        divider(),

        // Section 3: Root Cause Summary
        heading1("3. สรุปสาเหตุเบื้องต้น"),
        bullet("Complaint เรื่องเอกสารไม่ครบเพิ่มขึ้น เนื่องจากไม่มี checklist มาตรฐานก่อนยื่นคำขอสินเชื่อ"),
        bullet("Conversion Rate ลดลง เนื่องจาก Lead ที่เข้ามาทาง Mobile Banking ไม่ได้รับ follow-up ภายในเวลาที่กำหนด"),
        bullet("Loan Approval Turnaround Time เพิ่มขึ้น เนื่องจากปริมาณใบสมัครเพิ่มโดยไม่มีการเสริมกำลังคนในช่วง peak"),
        bullet("ยอดเปิดบัญชีใหม่ต่ำกว่าเป้าในบางภูมิภาค ยังต้องการการวิเคราะห์เพิ่มเติมจากผู้จัดการภาค"),

        divider(),

        // Section 4: Recommended Actions
        heading1("4. รายการ Action ที่เสนอ"),
        new Table({
          width: { size: 9026, type: WidthType.DXA },
          rows: [
            new TableRow({
              tableHeader: true,
              children: [
                cell("Action", { bold: true, shade: true, width: 3200 }),
                cell("Owner", { bold: true, shade: true, width: 2000 }),
                cell("กำหนด", { bold: true, shade: true, width: 1400 }),
                cell("ผลที่คาดหวัง", { bold: true, shade: true, width: 2426 }),
              ],
            }),
            new TableRow({
              children: [
                cell("จัดทำ checklist เอกสารประกอบคำขอสินเชื่อ ก่อนยื่นทุกครั้ง", { width: 3200 }),
                cell("ทีมพิจารณาสินเชื่อ", { width: 2000 }),
                cell("2 สัปดาห์", { width: 1400 }),
                cell("ลด complaint เรื่องเอกสารไม่ครบ", { width: 2426 }),
              ],
            }),
            new TableRow({
              children: [
                cell("สร้าง follow-up playbook สำหรับ Lead ทาง Mobile Banking", { width: 3200 }),
                cell("ทีมขายดิจิทัล", { width: 2000 }),
                cell("1 สัปดาห์", { width: 1400 }),
                cell("ดัน Conversion Rate กลับสู่ 18%", { width: 2426 }),
              ],
            }),
            new TableRow({
              children: [
                cell("ทบทวนอัตรากำลังทีมพิจารณาสินเชื่อช่วง peak", { width: 3200 }),
                cell("หัวหน้าทีมปฏิบัติการ", { width: 2000 }),
                cell("2 สัปดาห์", { width: 1400 }),
                cell("ลด Turnaround Time กลับสู่ 4.2 วัน", { width: 2426 }),
              ],
            }),
            new TableRow({
              children: [
                cell("ติดตามผลเปิดบัญชีใหม่ (ภาคตะวันออก/เหนือ)", { width: 3200 }),
                cell("ผู้จัดการภาค", { width: 2000 }),
                cell("2 สัปดาห์", { width: 1400 }),
                cell("ยอดเปิดบัญชีกลับสู่เป้าหมาย", { width: 2426 }),
              ],
            }),
          ],
        }),

        divider(),

        // Section 5: Decisions Needed
        heading1("5. Decisions Required"),
        bullet("อนุมัติการเพิ่มกำลังชั่วคราวในทีมพิจารณาสินเชื่อช่วง peak หรือไม่ — Owner: หัวหน้าทีมปฏิบัติการ"),
        bullet("กำหนด SLA follow-up Lead ภายใน 48 ชั่วโมงเป็นนโยบายหรือไม่ — Owner: ผู้จัดการทีมขาย"),
        bullet("ยืนยันตัวเลข Baseline complaint ก่อน Apr 2026 เพื่อใช้เป็น Source of Truth — Owner: ทีม Data/Analytics"),

        divider(),

        // Footer note
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          spacing: { before: 240, after: 0 },
          children: [
            new TextRun({
              text: "เอกสารฉบับนี้จัดทำเพื่อใช้ในการฝึกอบรม Workshop เท่านั้น — ข้อมูลเป็น Fictional Sample",
              size: 18, italic: true, color: "999999", font: "Arial",
            }),
          ],
        }),
      ],
    },
  ],
});

const outPath = path.join(__dirname, "../day-2-m365-copilot/files/Krungsri_BranchOps_ExecutiveSummary.docx");
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outPath, buffer);
  console.log("Created:", outPath);
});
