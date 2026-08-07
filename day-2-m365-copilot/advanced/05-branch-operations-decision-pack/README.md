# Advanced Exercise: Branch Operations Decision Pack

## Exercise Overview

แบบฝึกหัดนี้เชื่อม Copilot Chat, Excel, Word, PowerPoint, Outlook, Teams และ Copilot Pages เป็น workflow เดียว เป้าหมายคือทำให้ข้อมูลและข้อความสำคัญตรงกันทุกชิ้น

## Prerequisites

1. ดาวน์โหลด [Krungsri_BranchKPI_28days.xlsx](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/files/Krungsri_BranchKPI_28days.xlsx)
2. ดาวน์โหลด [Krungsri_BranchOps_Report_Source.docx](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/files/Krungsri_BranchOps_Report_Source.docx)
3. มี `Krungsri_BranchOps_ExecutiveSummary.docx` และ presentation จากแบบฝึกหัดหลัก
   - หากยังไม่มี ให้ดาวน์โหลด [Krungsri_BranchOps_ExecutiveSummary.docx](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/files/Krungsri_BranchOps_ExecutiveSummary.docx) (sample file)
	- หากยังไม่มี presentation จากแบบฝึกหัดหลัก ให้ดาวน์โหลด [Krungsri_BranchOps_DecisionBrief_Starter.pptx](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/files/Krungsri_BranchOps_DecisionBrief_Starter.pptx) (sample file)
4. ดาวน์โหลด [Teams meeting transcript ตัวอย่าง 15 นาที](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/files/branch-operations-review-15min.vtt)
5. หากขาดผลงานจากขั้นก่อน ให้ใช้ source files และสร้าง output ใหม่ใน Practice นั้น

## Scenario 1: ตรวจ Source of Truth ด้วย Copilot Chat และ Excel

### Practice 1: สร้าง Reconciliation Brief

#### Steps

1. เปิด Copilot Chat และเปิด **Work IQ**
2. แนบไฟล์ทั้ง 3 ด้วย `/`:
	- `Krungsri_BranchKPI_28days.xlsx` (workbook)
	- `Krungsri_BranchOps_Report_Source.docx` (source report)
	- `Krungsri_BranchOps_ExecutiveSummary.docx` (executive summary)
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

ห้ามเลือก source of truth โดยไม่อธิบายเหตุผล
```

4. จากผลลัพธ์ให้กดสร้าง Copilot Page และตั้งชื่อว่า `Branch Operations Reconciliation Brief`

### Practice 2: ตรวจตัวเลขใน Excel

#### Steps

1. เปิด `Krungsri_BranchKPI_28days.xlsx`
2. เปลี่ยนโหมดการทำงาน จาก **Allow Editing** เป็น **chat only**
3. ใช้ Copilot ใน Excel ตรวจ metric ที่มี conflict และขอให้แสดง formula หรือวิธีคำนวณที่ใช้

#### Prompt Example

```text
ตรวจสอบ metric ที่ระบุใน Reconciliation Brief
แสดงช่วงข้อมูลที่ใช้ วิธีคำนวณ และค่าที่ได้
อย่าแก้ข้อมูลต้นฉบับ
```

4. ตรวจ workbook ด้วยตนเอง
5. จากด้านล่างของคำตอบจาก copilot ให้เลือก **Add to recent page**
6. กดเลือก **Branch Operations Reconciliation Brief** จะเห็นว่าเราเปิด chat ดูในหน้า copilot คู่กับ Page ที่เลือก
7. จาก page ให้เลื่อนลงมาด้านล่างสุด เพื่อคลิกในพื้นที่ว่าง
8. จากห้อง chat ของ excel ก่อนหน้านี้ ให้คลิกเลือกเมนูด้านล่างคำตอบ เพื่อเลือก **Add to recent page** เพื่ออัปเดต Page ด้วยค่าที่ตรวจแล้ว พร้อมชื่อ sheet หรือ range
9. อัปเดต Page ด้วยค่าที่ตรวจแล้ว พร้อมชื่อ sheet หรือ range

## Scenario 2: ปรับ Word และ PowerPoint ให้ใช้หลักฐานเดียวกัน

### Practice 1: อัปเดต Executive Summary ใน Word

#### Steps

1. เปิด `Krungsri_BranchOps_ExecutiveSummary.docx`
2. เปิด Copilot ใน Word
3. ให้แน่ใจว่าได้เลือก mode การทำงานเป็น **Allow Editing**
4. แนบหรืออ้างอิงตัว Copilot Page ที่ชื่อ `Branch Operations Reconciliation Brief`
5. ขอให้เสนอรายการแก้ไขก่อนเปลี่ยนเอกสาร

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
7. บันทึกไฟล์ใหม่เป็น `Krungsri_BranchOps_ExecutiveSummary_Verified.docx`

### Practice 2: ปรับ Story ใน PowerPoint

#### Steps

1. เปิด presentation จากแบบฝึกหัดหลัก
2. ใช้ Copilot ในโหมด ตรวจว่าตัวเลขและ storyline ตรงกับ verified summary หรือไม่
3. เพิ่มหรือปรับ slide `Decision Needed` ให้มี Recommendation, Evidence และ Human owner
4. ตรวจภาพและข้อความว่าไม่มีการเพิ่ม claim ที่ไม่มี source
5. บันทึกเป็น `Krungsri_BranchOps_DecisionBrief_Verified.pptx`

#### Copy-Paste Prompts (PowerPoint)

ใช้ 2 prompt นี้เพื่อลดการพิมพ์ระหว่าง workshop

**Prompt 1: ตรวจตัวเลขและ storyline ให้ตรงกับ verified summary**

```text
ตรวจ presentation นี้เทียบกับ Krungsri_BranchOps_ExecutiveSummary_Verified.docx

ทำตารางผลตรวจ:
Slide | Existing claim/number | Verified value | Status (match/mismatch) | Suggested edit | Source

เงื่อนไข:
- ห้ามสร้างตัวเลขใหม่
- ถ้าไม่พบ source ให้ใส่ "source missing"
- ยังไม่ต้องแก้ slide จนกว่าฉันจะยืนยัน
```

**Prompt 2: สร้างหรือปรับ slide `Decision Needed`**

```text
ช่วยสร้างหรือปรับ slide ชื่อ "Decision Needed" โดยใช้ข้อมูลที่ verified แล้วเท่านั้น

โครงสร้าง slide:
1) Recommendation (1-2 ข้อ)
2) Evidence (metric + value + source)
3) Human owner (ชื่อบทบาทผู้ตัดสินใจ)
4) Decision deadline

ข้อกำหนด:
- ทุก bullet ต้องอ้างอิง source ได้
- ถ้าข้อมูลไม่พอ ให้ใส่ "Need confirmation"
- สรุปสั้น กระชับ พร้อมนำเสนอใน 1 นาที
```

## Scenario 3: สื่อสารและเตรียมการประชุม

### Practice 1: ร่าง Email ใน Outlook

#### Steps

1. เปิด Outlook และสร้าง draft ใหม่
2. ใช้ Copilot ร่างข้อความจาก 
   - `Krungsri_BranchOps_ExecutiveSummary_Verified.docx`
   - `Krungsri_BranchOps_DecisionBrief_Verified.pptx`

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

1. สร้าง meeting draft หรือใช้ไฟล์ `branch-operations-review-15min.vtt`
2. เพิ่ม agenda จาก page `Branch Operations Reconciliation Brief`
3. เตรียม prompt สำหรับใช้ระหว่างหรือหลัง meeting โดยอ้างอิงจาก page `Branch Operations Reconciliation Brief` และ `branch-operations-review-15min.vtt`

#### Prompt Example

```text
สรุปการประชุมนี้เป็น:
- Decisions
- Action items: Owner | Due date
- Risks and dependencies
- Questions that remain unresolved

แยกสิ่งที่พูดใน meeting ออกจาก recommendation ของ Copilot
```

4. หากใช้ transcription ไม่ได้ ให้เปิดไฟล์ `.vtt` คัดลอกข้อความ transcript และวางใน Copilot Chat ก่อนใช้ prompt
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

[กลับไป Lab 4](../04-memory-and-temporary-chat/README.md) | [ไป Lab 6](../06-microsoft-built-agent-lab/README.md)
