# Exercise 2: สร้าง Vendor Comparison Advisor

คราวนี้เราจะลองสร้าง Agent อีกแบบจาก flow ที่คุ้นเคยแล้ว จุดสำคัญคือการใช้เกณฑ์เดียวกันเปรียบเทียบ 3 vendor เพิ่ม report template เป็น **Knowledge** และขอให้ Agent สร้างไฟล์ Word สำหรับนำไปตรวจต่อครับ

> **License:** ต้องใช้บัญชีที่เข้าถึง Agent Builder, Upload และความสามารถ **Create documents, charts, and code** ได้ หากไม่เห็นความสามารถนี้ให้ใช้ fallback ในแบบฝึกหัด

## Prerequisites

- ผ่าน [Exercise 1: Proposal Review Coach](01-proposal-review-coach.md)
- ดาวน์โหลดไฟล์ต่อไปนี้
  - [`Vendor_Proposal_A_Northstar.docx`](../../files/Vendor_Proposal_A_Northstar.docx)
  - [`Vendor_Proposal_B_BluePeak.docx`](../../files/Vendor_Proposal_B_BluePeak.docx)
  - [`Vendor_Proposal_C_Greenline.docx`](../../files/Vendor_Proposal_C_Greenline.docx)
  - [`Vendor_Comparison_Report_Template.docx`](../../files/Vendor_Comparison_Report_Template.docx)

## Scenario 1: เปรียบเทียบข้อเสนอด้วยเกณฑ์เดียวกัน

### Practice 1: สร้าง Agent สำหรับ cross-document comparison

**Primary target:** กำหนด Agent ให้เปรียบเทียบหลายเอกสารอย่างเป็นธรรมและสร้างรายงานตามโครงสร้างที่กำหนด

#### Steps

1. เลือก **New agent** แล้วเปิด **Describe**
2. วางข้อความต่อไปนี้

   ```text
   สร้าง Agent ชื่อ "Vendor Comparison Advisor"

   เมื่อผู้ใช้แนบ vendor proposal หลายไฟล์ ให้:
   - เปรียบเทียบ scope and fit, delivery feasibility, security and data, support and SLA, training and adoption และ commercial terms
   - ใช้เกณฑ์เดียวกันกับทุก vendor
   - อ้างอิงชื่อไฟล์ที่เป็นหลักฐานของแต่ละข้อ
   - ระบุ Missing หรือ Incomparable information แทนการเดา
   - ใช้โครงสร้างจาก report template ใน Knowledge
   - สร้างรายงานภาษาไทยเป็นไฟล์ Word ชื่อ Vendor_Comparison_Decision_Brief.docx
   - แสดง trade-off และ clarification questions โดยไม่เลือกผู้ชนะอัตโนมัติ
   ```

3. เปิด **Configure** แล้วตรวจว่า instruction เน้นการเปรียบเทียบ ไม่ใช่การสรุปทีละไฟล์แยกกัน
4. ในส่วน **Knowledge** กด **Upload** หรือ **Browse** แล้วเพิ่ม `Vendor_Comparison_Report_Template.docx`
5. ในส่วน **Capabilities** เปิด **Create documents, charts, and code** หาก tenant แสดงตัวเลือกนี้
6. เพิ่ม starter prompt

   ```text
   เปรียบเทียบ vendor proposal ที่แนบและสร้าง decision brief ตาม template
   ```

7. กด **Create**

#### Checkpoint

- Report template อยู่ใน Knowledge
- Instructions ระบุเกณฑ์ร่วม ชื่อไฟล์หลักฐาน และพฤติกรรมเมื่อข้อมูลเปรียบเทียบไม่ได้

### Practice 2: สร้าง Vendor Comparison Decision Brief

**Primary target:** สร้างรายงานเปรียบเทียบจาก vendor proposal สามไฟล์และตรวจความเป็นธรรมของผลลัพธ์

#### Steps

1. เปิด `Vendor Comparison Advisor`
2. แนบ vendor proposal ทั้ง 3 ไฟล์
3. ส่ง prompt ต่อไปนี้

   ```text
   เปรียบเทียบ vendor proposal ทั้ง 3 ไฟล์ด้วยเกณฑ์เดียวกัน
   ใช้โครงสร้างจาก Vendor_Comparison_Report_Template.docx
   อ้างอิงชื่อไฟล์เมื่อกล่าวถึงข้อเท็จจริง
   ระบุ trade-off, missing information และ clarification questions
   จากนั้นสร้างไฟล์ Word ชื่อ Vendor_Comparison_Decision_Brief.docx ให้ดาวน์โหลด
   อย่าเลือก vendor ผู้ชนะอัตโนมัติ
   ```

4. เปิดรายงานที่ได้และสุ่มตรวจข้อมูลอย่างน้อยหนึ่งข้อจากแต่ละ vendor
5. ตรวจว่า Agent ไม่ใช้ราคาต่ำสุดเป็นเหตุผลเดียว และไม่เติมข้อมูลที่ vendor ไม่ได้ระบุ

#### Checkpoint

- รายงานมีข้อมูลจากทั้ง 3 ไฟล์และใช้เกณฑ์เดียวกัน
- Missing information ถูกแสดงอย่างชัดเจน
- ข้อสรุปเป็น decision options หรือคำถามติดตาม ไม่ใช่การตัดสินผู้ชนะทันที

> **💡 Fallback:** ถ้าสร้างไฟล์ Word ไม่ได้ ให้เปิด `Vendor_Comparison_Report_Template.docx` ใน Word แล้ววางคำตอบจาก Agent ลงในหัวข้อที่เตรียมไว้

## Expected Output

- `Vendor Comparison Advisor` หนึ่ง Agent
- `Vendor_Comparison_Decision_Brief.docx` หรือ template ที่เติมคำตอบจาก Agent แล้ว

## Optional Extension

ลองเพิ่มน้ำหนักเกณฑ์ที่ผู้บริหารกำหนด แล้วตรวจว่า Agent อธิบายผลกระทบของน้ำหนักนั้นแทนการซ่อนวิธีคิดหรือไม่

[← กลับหน้าหลัก Agent Builder](README.md) | [ไป Exercise 3: Krungsri Product Information Agent →](03-krungsri-product-information-agent.md)
