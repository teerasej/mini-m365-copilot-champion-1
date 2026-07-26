# Advanced Exercise: Microsoft 365 App Deep-dive Cards

## Exercise Overview

เลือก Practice Card อย่างน้อย 2 ใบเพื่อทดลองเทคนิคขั้นสูงใน Word, Excel, PowerPoint, Outlook และ Teams แต่ละ Card ใช้ workflow และ artifact ที่เชื่อมต่อกัน

## Prerequisites

1. ใช้ Microsoft 365 Copilot ใน app ที่เลือกได้
2. มีไฟล์ workshop ใน OneDrive โดยดาวน์โหลดได้จาก [รายการไฟล์สำหรับ Day 2](../../sample-files.md)
3. ใช้ email ตัวอย่างและ [Teams meeting transcript ตัวอย่าง 15 นาที](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/files/branch-operations-review-15min.vtt) เท่านั้น
4. ตรวจ output ทุกครั้งก่อน Replace, Keep, Send หรือ Share

## Scenario 1: Word — Multi-source Executive Brief

### Practice 1: ร่างจากหลาย Source แล้วตรวจ Claim

#### Steps

1. เปิดเอกสาร Word เปล่า
2. เปิด **Draft with Copilot**
3. อ้างอิง source report, verified KPI finding และ meeting note
4. ขอให้สร้าง executive brief ที่แยก fact และ recommendation
5. เลือกข้อความสำคัญและใช้ Copilot ปรับให้กระชับ
6. สร้างตาราง Claim | Source | Verified by
7. ตรวจ claim ที่ไม่มี source ก่อนเก็บเอกสาร

#### Prompt Example

```text
ร่าง executive brief 1 หน้า โดยใช้เฉพาะ source ที่แนบ
แยก Verified facts, Interpretation, Recommendation และ Decision needed
เพิ่มตาราง claim verification ท้ายเอกสาร
```

## Scenario 2: Excel — Explain, Calculate, Verify

### Practice 1: ให้ Copilot อธิบายก่อนแก้ Workbook

#### Steps

1. เปิด `Krungsri_BranchKPI_28days.xlsx`
2. เลือกคำถามด้าน trend หรือ anomaly
3. ขอให้ Copilot อธิบาย plan และ range ที่จะใช้ก่อน
4. ขอ formula หรือ visualization ที่เหมาะสม
5. ตรวจผลกับ cell ต้นทาง
6. เก็บการเปลี่ยนแปลงเฉพาะเมื่ออธิบายได้ว่าคำนวณอย่างไร

#### Prompt Example

```text
ก่อนวิเคราะห์ โปรดบอก:
1. sheet และ range ที่จะใช้
2. data quality issue ที่พบ
3. วิธีคำนวณ

จากนั้นเปรียบเทียบ loan approval turnaround time กับ complaint
และสร้าง visualization ที่ไม่ทำให้เข้าใจว่า correlation คือ causation
```

## Scenario 3: PowerPoint — Evidence-led Story

### Practice 1: ตรวจ Storyline กับ Source

#### Steps

1. เปิด presentation ที่สร้างจาก Word
2. ขอให้ Copilot สรุป message ของแต่ละ slide
3. ตรวจว่า slide เรียงเป็น Situation → Evidence → Options → Decision
4. ขอให้เสนอ slide ที่ควรตัด รวม หรือเพิ่ม
5. เพิ่ม speaker notes ที่ระบุ source และคำถามที่คาดว่าจะได้รับ
6. ตรวจทุกตัวเลขกับ verified summary

#### Prompt Example

```text
ตรวจ presentation นี้ในมุมผู้บริหาร:
- storyline ต่อเนื่องหรือไม่
- claim ใดไม่มีหลักฐาน
- slide ใดซ้ำกัน
- decision ที่ต้องการชัดเจนหรือไม่

เสนอรายการแก้ไขก่อนสร้างหรือเปลี่ยน slide
```

## Scenario 4: Outlook — Inbox to Decision

### Practice 1: สรุป Thread และร่าง Reply ที่มี Action

#### Steps

1. เปิด email thread ตัวอย่าง
2. ใช้ **Summarize**
3. ตรวจผู้พูด วันที่ commitment และคำถามที่ยังไม่ได้ตอบ
4. ใช้ **Draft with Copilot**
5. ขอ reply ที่ยืนยัน decision และ action items
6. ตรวจผู้รับ attachment วันที่ และ tone
7. เก็บเป็น draft ห้ามส่งใน workshop

#### Prompt Example

```text
ร่าง reply จาก thread นี้:
- ยืนยันสิ่งที่ตกลงแล้ว
- แยก action item พร้อม owner และ due date
- ถามเฉพาะข้อมูลที่ยังขาด
- ห้ามเพิ่ม commitment ที่ไม่มีใน thread
```

## Scenario 5: Teams — Prepare, Participate, Follow Up

### Practice 1: Meeting Lifecycle

#### Steps

1. ก่อนประชุม ใช้ Copilot Chat และ Work IQ เตรียม background, source และคำถาม
2. ระหว่างประชุม ทดลองถาม Copilot ว่าประเด็นใดที่ยังไม่ได้ข้อสรุป หาก policy อนุญาต
3. หลังประชุม ขอ Decisions, Action items, Risks และ Open questions
4. ตรวจ transcript หรือ meeting note
5. นำ action items ไปอัปเดต Copilot Page
6. หาก transcription ถูกปิด ให้เปิดไฟล์ `.vtt` คัดลอก transcript และวางใน Copilot Chat

#### Prompt Example

```text
จาก meeting นี้:
1. แยก Decisions ที่เกิดขึ้นจริง
2. สรุป Action items พร้อม Owner และ Due date
3. ระบุ Risks และ Dependencies
4. แสดง Open questions
5. ระบุข้อใดที่ Copilot ตีความและต้องให้มนุษย์ยืนยัน
```

## Scenario 6: Role-based Challenge Cards

### Practice 1: เลือก Use Case เพิ่ม

#### Steps

1. เลือก 1 บทบาท
   - Branch Operations: complaint และ turnaround time
   - Digital Sales: conversion ลดลง
   - HR: onboarding feedback
   - Procurement: vendor follow-up
   - Marketing: campaign brief
   - Project Coordinator: meeting-to-action workflow
   - Compliance: policy summary with citations
   - Customer Service: response draft and quality review
2. เลือก app อย่างน้อย 2 ตัว
3. ระบุ artifact handoff ระหว่าง app
4. ใช้ prompt ที่มี Goal, Context, Source, Output และ Quality check
5. บันทึก human checkpoint ก่อนส่งต่อ output

## Checkpoint

- ใช้ app ตามชนิดงาน ไม่ใช่เพียงเพราะมี Copilot
- ผู้เรียนตรวจ source และการเปลี่ยนแปลงก่อนยอมรับ
- Artifact จาก app แรกใช้ต่อใน app ถัดไปได้
- Email ไม่ถูกส่งและ meeting ไม่ถูกบันทึกโดยไม่มีการอนุญาต

## Expected Output

- ผลงานจาก Practice Cards อย่างน้อย 2 ใบ
- Artifact handoff map
- รายการ tips ที่ช่วยลดงานแก้ไขของมนุษย์อย่างน้อย 3 ข้อ

## Optional Extension

ทำโจทย์เดิมด้วย Copilot Chat, In-app Copilot และ Agent แล้วใช้ scorecard เดียวกันตัดสินวิธีที่เหมาะที่สุด

[กลับไป Lab 7](../07-agent-builder-from-ai-use-canvas/README.md) | [ไป Lab 9](../09-ai-use-canvas-experiment-studio/README.md)
