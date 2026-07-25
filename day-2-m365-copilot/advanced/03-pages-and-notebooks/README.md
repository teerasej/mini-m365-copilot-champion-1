# Advanced Exercise: Copilot Pages และ Copilot Notebooks

## Exercise Overview

พวกเราจะทดลองใช้ **Copilot Page** เป็นผลงานที่แก้ไขและแชร์ได้ และใช้ **Copilot Notebook** เป็นพื้นที่รวม source ที่ Copilot ต้องใช้ต่อเนื่อง

- Page เหมือน whiteboard ที่ทีมช่วยกันแก้ไข
- Notebook เหมือนแฟ้มโครงการที่รวบรวมเอกสารอ้างอิงไว้ถามต่อ

## Prerequisites

1. เปิด [Microsoft 365 Copilot](https://microsoft365.com)
2. มี OneDrive และ SharePoint service พร้อมใช้งาน
3. มีคำตอบที่ตรวจ source แล้วจาก Lab ก่อนหน้า
4. มีไฟล์รายงาน, workbook และ [Teams meeting transcript ตัวอย่าง 15 นาที](../files/branch-operations-review-15min.vtt)
5. หากไม่เห็น **Notebooks** ให้ทำเฉพาะ Copilot Pages และใช้การแนบ source ใน Copilot Chat เป็น fallback

## Scenario 1: เปลี่ยนคำตอบจาก Chat เป็น Copilot Page

### Practice 1: สร้าง Decision Page

#### Steps

1. เปิด Copilot Chat และแนบ source ที่เกี่ยวข้อง
2. ส่ง prompt ต่อไปนี้

#### Prompt Example

```text
สร้าง Branch Operations Decision Brief โดยใช้ source ที่แนบ

ให้มี:
- Situation summary
- Evidence table
- Decisions needed
- Action items: Owner | Due date | Success measure
- Risks and open questions

แยก fact, assumption และ recommendation ให้ชัดเจน
```

3. ตรวจ citation และตัวเลขสำคัญ
4. ใต้คำตอบ เลือก **Edit in Pages** หรือสั่ง `Create a page from this response`
5. ตั้งชื่อ Page ว่า `Branch Operations Decision Page`
6. แก้ owner และ due date บน Page โดยตรง

### Practice 2: ทำงาน Side-by-side กับ Copilot

#### Steps

1. เปิด Copilot Chat และ Page แบบ side-by-side
2. ขอให้ Copilot เพิ่มตาราง Human checkpoint

#### Prompt Example

```text
เพิ่มตาราง Human checkpoint ลงใน Page นี้
ให้มีคอลัมน์: Item | Reviewer | Evidence to verify | Status
ห้ามเปลี่ยนตัวเลขเดิม
```

3. ตรวจว่า Copilot แก้เฉพาะส่วนที่ขอ
4. ขอให้ Copilot สรุป open questions จากเนื้อหาปัจจุบันของ Page
5. แก้ไขข้อความสำคัญด้วยตนเองอย่างน้อย 1 จุด
6. แชร์ Page ให้เพื่อนผ่าน Teams หรือ Outlook ตามช่องทางที่ Trainer กำหนด

### Practice 3: ตรวจการทำงานร่วมกัน

#### Steps

1. ให้เพื่อนเพิ่ม comment หรือคำถาม 1 รายการ
2. ตรวจว่าเพื่อนเข้าถึง Page ได้ แต่ไม่ได้รับสิทธิ์เกินความจำเป็น
3. ใช้ Copilot สรุปการเปลี่ยนแปลงหรือคำถามใหม่
4. อัปเดต Page ให้ระบุเรื่องที่ตัดสินใจแล้วและเรื่องที่ยังรอข้อมูล

## Scenario 2: สร้าง Copilot Notebook เป็น Context Pack

### Practice 1: รวม Source ที่เกี่ยวข้อง

#### Steps

1. เปิด **Notebooks**
2. เลือก **New notebook**
3. ตั้งชื่อ `Branch Operations Context Pack`
4. เพิ่ม source อย่างน้อย 3 ชนิด
   - `Krungsri_BranchKPI_28days.xlsx`
   - `Krungsri_BranchOps_ExecutiveSummary.docx`
   - Copilot Page หรือ Teams meeting transcript ตัวอย่าง
5. ไม่เพิ่มไฟล์เพียงเพราะหาเจอ ให้เลือกเฉพาะ source ที่ช่วยตอบโจทย์

### Practice 2: ถามจาก Source Set ที่จำกัด

#### Steps

1. ถาม Copilot ใน Notebook ด้วย prompt ต่อไปนี้

#### Prompt Example

```text
จาก references ใน Notebook นี้:

1. สรุป 3 findings ที่มีหลักฐานตรงกันมากกว่าหนึ่ง source
2. ระบุ conflict ระหว่าง source
3. ระบุคำถามที่ยังตอบไม่ได้
4. เสนอ agenda สำหรับประชุม 20 นาที

ห้ามใช้ข้อมูลนอก references ใน Notebook
```

2. เปิด source เพื่อตรวจอย่างน้อย 2 findings
3. นำ source ที่ไม่ช่วยตอบคำถามออก 1 รายการ
4. ถามคำถามเดิมอีกครั้งแล้วเปรียบเทียบผล

## Checkpoint

- Page เป็นผลงานที่แก้ไขและแชร์ได้ ไม่ใช่เพียงสำเนาคำตอบจาก Chat
- Notebook มีเฉพาะ source ที่เกี่ยวข้อง
- ผู้เรียนแยกได้ว่า Page คือ output ส่วน Notebook คือ bounded source workspace
- ตรวจสิทธิ์ก่อนแชร์ทุกครั้ง

## Expected Output

- `Branch Operations Decision Page`
- `Branch Operations Context Pack`
- รายการ findings, conflicts และ open questions ที่ตรวจย้อนกลับได้

## Optional Extension

เพิ่ม email หรือ meeting note อีก 1 source เข้า Notebook แล้วบันทึกว่าข้อมูลใหม่เปลี่ยน recommendation เดิมหรือไม่

[กลับไป Lab 2](../02-prompt-gallery-team-library/README.md) | [ไป Lab 4](../04-memory-and-temporary-chat/README.md)
