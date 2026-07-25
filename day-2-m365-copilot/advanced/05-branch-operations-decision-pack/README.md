# Advanced Exercise: Branch Operations Decision Pack

## Exercise Overview

แบบฝึกหัดนี้เชื่อม Copilot Chat, Excel, Word, PowerPoint, Outlook, Teams และ Copilot Pages เป็น workflow เดียว เป้าหมายคือทำให้ข้อมูลและข้อความสำคัญตรงกันทุกชิ้น

## Prerequisites

1. มีไฟล์ `Krungsri_BranchKPI_28days.xlsx`
2. มีไฟล์ `Krungsri_BranchOps_Report_Source.docx`
3. มี `Krungsri_BranchOps_ExecutiveSummary.docx` และ presentation จากแบบฝึกหัดหลัก
4. มี email หรือ meeting ตัวอย่างที่ใช้ข้อมูลสมมติ
5. หากขาดผลงานจากขั้นก่อน ให้ใช้ source files และสร้าง output ใหม่ใน Practice นั้น

## Scenario 1: ตรวจ Source of Truth ด้วย Copilot Chat และ Excel

### Practice 1: สร้าง Reconciliation Brief

#### Steps

1. เปิด Copilot Chat และเปิด **Work IQ**
2. แนบ workbook, source report และ executive summary ด้วย `/`
3. ส่ง prompt ต่อไปนี้

#### Prompt Example

```text
เปรียบเทียบข้อมูลใน source ทั้งหมดเพื่อเตรียม Branch Operations Review

สร้างตาราง:
Metric | Value in each source | Conflict | Source of truth | Action required

เน้น:
- complaint
- loan approval turnaround time
- cross-sell conversion
- customer retention

ห้ามเลือก source of truth หากหลักฐานไม่พอ ให้ระบุ owner ที่ต้องยืนยัน
```

4. เปิด citation และบันทึก conflict
5. สร้าง Copilot Page ชื่อ `Branch Operations Reconciliation Brief`

### Practice 2: ตรวจตัวเลขใน Excel

#### Steps

1. เปิด `Krungsri_BranchKPI_28days.xlsx`
2. ใช้ Copilot ใน Excel ตรวจ metric ที่มี conflict
3. ขอให้แสดง formula หรือวิธีคำนวณที่ใช้

#### Prompt Example

```text
ตรวจสอบ metric ที่ระบุใน Reconciliation Brief
แสดงช่วงข้อมูลที่ใช้ วิธีคำนวณ และค่าที่ได้
อย่าแก้ข้อมูลต้นฉบับ
```

4. ตรวจ workbook ด้วยตนเอง
5. อัปเดต Page ด้วยค่าที่ตรวจแล้ว พร้อมชื่อ sheet หรือ range

## Scenario 2: ปรับ Word และ PowerPoint ให้ใช้หลักฐานเดียวกัน

### Practice 1: อัปเดต Executive Summary ใน Word

#### Steps

1. เปิด `Krungsri_BranchOps_ExecutiveSummary.docx`
2. เปิด Copilot ใน Word
3. แนบหรืออ้างอิง Reconciliation Brief
4. ขอให้เสนอรายการแก้ไขก่อนเปลี่ยนเอกสาร

#### Prompt Example

```text
เปรียบเทียบเอกสารนี้กับ Branch Operations Reconciliation Brief

แสดงรายการ:
- ข้อความที่ควรแก้
- ตัวเลขเดิม
- ตัวเลขที่ตรวจแล้ว
- เหตุผลและ source

ยังไม่ต้องแก้เอกสารจนกว่าฉันจะตรวจรายการ
```

5. ตรวจรายการ
6. แก้เฉพาะข้อความที่ได้รับการยืนยัน
7. บันทึกเป็น `Krungsri_BranchOps_ExecutiveSummary_Verified.docx`

### Practice 2: ปรับ Story ใน PowerPoint

#### Steps

1. เปิด presentation จากแบบฝึกหัดหลัก
2. ใช้ Copilot ตรวจว่าตัวเลขและ storyline ตรงกับ verified summary หรือไม่
3. ขอให้เสนอ slide ที่ต้องแก้ก่อน
4. เพิ่มหรือปรับ slide `Decision Needed` ให้มี Recommendation, Evidence และ Human owner
5. ตรวจภาพและข้อความว่าไม่มีการเพิ่ม claim ที่ไม่มี source
6. บันทึกเป็น `Krungsri_BranchOps_DecisionBrief_Verified.pptx`

## Scenario 3: สื่อสารและเตรียมการประชุม

### Practice 1: ร่าง Email ใน Outlook

#### Steps

1. เปิด Outlook และสร้าง draft ใหม่
2. ใช้ Copilot ร่างข้อความจาก verified summary และ presentation

#### Prompt Example

```text
ร่าง email เชิญ Branch Operations Review

ระบุ:
- purpose
- 3 verified findings
- decisions needed
- preparation requested
- links หรือชื่อไฟล์ที่ต้องอ่าน

โทนมืออาชีพ กระชับ และห้ามเพิ่มข้อมูลที่ไม่มีใน verified sources
```

3. ตรวจผู้รับ เอกสารแนบ ตัวเลข และวันที่
4. เก็บเป็น draft ห้ามส่งใน workshop

### Practice 2: เตรียม Teams Meeting

#### Steps

1. สร้าง meeting draft หรือใช้ meeting ตัวอย่าง
2. เพิ่ม agenda จาก Reconciliation Brief
3. เตรียม prompt สำหรับใช้ระหว่างหรือหลัง meeting

#### Prompt Example

```text
สรุปการประชุมนี้เป็น:
- Decisions
- Action items: Owner | Due date
- Risks and dependencies
- Questions that remain unresolved

แยกสิ่งที่พูดใน meeting ออกจาก recommendation ของ Copilot
```

4. หากใช้ transcription ไม่ได้ ให้ใช้ meeting note ตัวอย่างแทน
5. นำ decision และ action items กลับไปอัปเดต Copilot Page

## Checkpoint

- ตัวเลขสำคัญตรงกันใน Page, Excel, Word, PowerPoint และ email draft
- ทุก correction มี source
- Outlook draft ยังไม่ถูกส่ง
- Teams summary แยกคำพูดจริงออกจากข้อเสนอของ Copilot
- Human owner รับผิดชอบการตัดสินใจสุดท้าย

## Expected Output

- `Branch Operations Reconciliation Brief`
- `Krungsri_BranchOps_ExecutiveSummary_Verified.docx`
- `Krungsri_BranchOps_DecisionBrief_Verified.pptx`
- Outlook draft และ Teams meeting agenda

## Optional Extension

ให้เพื่อนทำหน้าที่ reviewer และสุ่มตรวจตัวเลข 3 จุดข้าม Page, Word และ PowerPoint หากพบความไม่ตรงกันให้ย้อนกลับไปที่ source แทนการให้ Copilotเลือกคำตอบ

[กลับไป Lab 4](../04-memory-and-temporary-chat/README.md) | [ไป Lab 6](../06-microsoft-built-agent-lab/README.md)
