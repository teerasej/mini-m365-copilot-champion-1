# Exercise 2: สร้าง Vendor Comparison Advisor

คราวนี้เราจะลองสร้าง Agent อีกแบบจาก flow ที่คุ้นเคยแล้ว จุดสำคัญคือการใช้เกณฑ์เดียวกันเพื่อเปรียบเทียบ vendor และเพิ่ม report template เป็น **Knowledge** เราจะกำหนดให้ Agent ใช้ template นี้ผ่าน **Instructions** เพียงครั้งเดียว เพื่อให้คำสั่งที่ใช้ซ้ำไม่ต้องอยู่ใน prompt ของผู้ใช้ทุกครั้งครับ

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

**Primary target:** กำหนด Agent ให้เปรียบเทียบหลายเอกสารอย่างเป็นธรรม และใช้ Instructions ควบคุมโครงสร้างรายงานจาก Knowledge โดยไม่ต้องย้ำในทุก prompt

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
   - ใช้หัวข้อและลำดับส่วนจาก Vendor_Comparison_Report_Template.docx ใน Knowledge เป็นโครงสร้างของรายงานทุกครั้ง
   - สร้างรายงานภาษาไทยเป็นไฟล์ Word ชื่อ Vendor_Comparison_Decision_Brief.docx
   - แสดง trade-off และ clarification questions โดยไม่เลือกผู้ชนะอัตโนมัติ
   ```

3. เปิด **Configure** แล้วตรวจว่า Instructions เน้นการเปรียบเทียบ ไม่ใช่การสรุปทีละไฟล์แยกกัน และระบุให้ใช้โครงสร้างจาก `Vendor_Comparison_Report_Template.docx` ทุกครั้ง
4. ในส่วน **Knowledge** กด **Upload** หรือ **Browse** แล้วเพิ่ม `Vendor_Comparison_Report_Template.docx`

   > **💡 Tip:** การกำหนดไฟล์ template ใน Instructions ช่วยให้ Agent ใช้หัวข้อและลำดับส่วนเดิมซ้ำได้ แต่รูปแบบตัวอักษร ระยะห่าง หรืองานจัดหน้าในไฟล์ Word ที่สร้างใหม่อาจไม่เหมือนต้นฉบับทุกจุด

5. ในส่วน **Capabilities** เปิด **Create documents, charts, and code** หาก tenant ของเรา แสดงตัวเลือกนี้
6. เพิ่ม starter prompt

   ```text
   เปรียบเทียบ vendor proposal ที่แนบและสร้าง decision brief ภาษาไทย
   ```

7. กด **Create**

#### Checkpoint

- Report template อยู่ใน Knowledge
- Instructions ระบุให้ใช้หัวข้อและลำดับส่วนจาก `Vendor_Comparison_Report_Template.docx` ทุกครั้ง
- Instructions ระบุเกณฑ์ร่วม ชื่อไฟล์หลักฐาน และพฤติกรรมเมื่อข้อมูลเปรียบเทียบไม่ได้

### Practice 2: ทดลองเปรียบเทียบ vendor ใน Chat

**Primary target:** เปรียบเทียบ vendor proposal สามไฟล์ใน Chat และตรวจคุณภาพของข้อมูลก่อนสร้างรายงาน

#### Steps

1. เปิด `Vendor Comparison Advisor`
2. แนบ vendor proposal ทั้ง 3 ไฟล์
3. ส่ง prompt ต่อไปนี้

   ```text
   เปรียบเทียบ vendor proposal ทั้ง 3 ไฟล์
   อ้างอิงชื่อไฟล์เมื่อกล่าวถึงข้อเท็จจริง
   ระบุ trade-off, missing information และ clarification questions
   แสดงผลการเปรียบเทียบใน Chat 
   ```

4. อ่านผลใน Chat แล้วสุ่มตรวจข้อมูลอย่างน้อยหนึ่งข้อจากแต่ละ vendor
5. ตรวจว่า Agent ไม่ใช้ราคาต่ำสุดเป็นเหตุผลเดียว และไม่เติมข้อมูลที่ vendor ไม่ได้ระบุ

#### Checkpoint

- ผลใน Chat มีข้อมูลจากทั้ง 3 ไฟล์และใช้เกณฑ์เดียวกัน
- Missing information ถูกแสดงอย่างชัดเจน
- ข้อสรุปเป็น decision options หรือคำถามติดตาม ไม่ใช่การตัดสินผู้ชนะทันที

### Practice 3: สร้าง Vendor Comparison Decision Brief ตาม template

**Primary target:** เปลี่ยนผลการเปรียบเทียบเป็นไฟล์ Word แล้วตรวจว่า Agent ใช้โครงสร้างจาก Knowledge ได้แม้ prompt ของผู้ใช้ไม่ได้ย้ำเรื่อง template

#### Steps

1. ทำต่อใน Chat เดิมจาก Practice 2 เพื่อให้ Agent ใช้ผลการเปรียบเทียบที่เพิ่งตรวจแล้ว
2. ส่ง prompt ต่อไปนี้

   ```text
   จากผลการเปรียบเทียบก่อนหน้า สร้างรายงานภาษาไทยเป็นไฟล์ Word ชื่อ Vendor_Comparison_Decision_Brief.docx ให้ดาวน์โหลด
   ```

3. เปิดรายงานที่ได้ แล้วตรวจว่าหัวข้อและลำดับส่วนสอดคล้องกับ `Vendor_Comparison_Report_Template.docx` แม้ prompt ในขั้นก่อนหน้าไม่ได้กล่าวถึง template
4. ตรวจว่ารายงานยังคงแสดง trade-off, missing information และ clarification questions จากผลการเปรียบเทียบ

#### Checkpoint

- รายงานใช้หัวข้อและลำดับส่วนจาก template ใน Knowledge โดยไม่ต้องย้ำใน prompt
- รายงานเป็นภาษาไทยและดาวน์โหลดเป็น `Vendor_Comparison_Decision_Brief.docx` ได้
- เนื้อหาในรายงานสอดคล้องกับผลการเปรียบเทียบที่ตรวจใน Chat

> **💡 Fallback:** ถ้าสร้างไฟล์ Word ไม่ได้ ให้เปิด `Vendor_Comparison_Report_Template.docx` ใน Word แล้ววางคำตอบจาก Agent ลงในหัวข้อที่เตรียมไว้

## Expected Output

- `Vendor Comparison Advisor` หนึ่ง Agent
- `Vendor_Comparison_Decision_Brief.docx` หรือ template ที่เติมคำตอบจาก Agent แล้ว

## Optional Extension

ลองเพิ่มน้ำหนักเกณฑ์ที่ผู้บริหารกำหนด แล้วตรวจว่า Agent อธิบายผลกระทบของน้ำหนักนั้นแทนการซ่อนวิธีคิดหรือไม่

[← กลับหน้าหลัก Agent Builder](README.md) | [ไป Exercise 3: Krungsri Product Information Agent →](03-krungsri-product-information-agent.md)
