# Advanced Exercise: สร้าง Prompt Library ของทีมด้วย Prompt Gallery

## Exercise Overview

พวกเราจะเปลี่ยน prompt ที่ใช้ครั้งเดียวให้เป็น prompt template ที่ทีมค้นหา ใช้ซ้ำ และปรับค่าได้อย่างสม่ำเสมอผ่าน **Prompt Gallery**

## Prerequisites

1. เปิด [Microsoft 365 Copilot Chat](https://m365.cloud.microsoft/chat)
2. เข้าถึง **Prompt Gallery**
3. มี prompt ที่ให้ผลลัพธ์ดีจากแบบฝึกหัดก่อนหน้า
4. หากองค์กรไม่อนุญาตให้แชร์ prompt กับ Teams team ให้บันทึกไว้ใน **Your Prompts** และแลกเปลี่ยนข้อความกับเพื่อนแทน

## Scenario 1: ปรับ Microsoft Prompt ให้เข้ากับ Workflow

ทีม Branch Operations ต้องการรูปแบบสรุปสถานการณ์ที่ทุกคนใช้เหมือนกัน แต่ source และช่วงเวลาจะเปลี่ยนทุกครั้ง

### Practice 1: สำรวจ Suggested Prompts

#### Steps

1. เปิด **Prompt Gallery**
2. เลือก **Suggested**
3. ค้นหา prompt ที่เกี่ยวกับ summarize, prepare for a meeting หรือ analyze
4. เปิด prompt อย่างน้อย 2 รายการ
5. สังเกตส่วนที่ Microsoft แนะนำให้ปรับ เช่น เป้าหมาย source หรือรูปแบบผลลัพธ์
6. เลือก 1 prompt ที่ใกล้กับงานของทีมที่สุด

### Practice 2: สร้าง Prompt Template ของทีม

#### Steps

1. กด **New chat**
2. อ้างอิง source ด้วย `/` ตามงานที่ต้องการ
3. ปรับ prompt ให้มี Goal, Context, Source, Output และ Quality check
4. ใช้ placeholder ในวงเล็บเหลี่ยมเพื่อให้ทีมแทนค่าได้

#### Prompt Example

```text
Goal: สรุปสถานการณ์ [หัวข้องาน] เพื่อเตรียม [ชื่อการประชุม]

Context:
- ช่วงเวลาที่ต้องวิเคราะห์: [วันที่เริ่ม] ถึง [วันที่สิ้นสุด]
- ผู้รับสรุป: [กลุ่มผู้รับ]
- การตัดสินใจที่ต้องการ: [คำถามที่ต้องตอบ]

Sources:
- ใช้เฉพาะ source ที่แนบใน prompt

Output:
1. Executive summary ไม่เกิน 5 bullets
2. Evidence table: Finding | Source | Business impact
3. Decisions needed
4. Action items: Owner | Due date

Quality check:
- แยก fact ออกจาก recommendation
- แสดง source ของทุกตัวเลข
- ระบุข้อมูลที่ยังขาดโดยไม่คาดเดา
```

5. ส่ง prompt และตรวจผลลัพธ์
6. ปรับจนผู้ใช้อีกคนอ่าน placeholder แล้วรู้ว่าต้องแทนค่าอะไร

### Practice 3: บันทึกและแชร์

#### Steps

1. บันทึก prompt ใน **Your Prompts**
2. ตั้งชื่อว่า `Branch Operations Decision Brief`
3. เปิด Prompt Gallery และตรวจว่า prompt ปรากฏในรายการ
4. หากมีสิทธิ์ ให้แชร์ prompt กับ Teams team ที่ Trainer กำหนด
5. ให้เพื่อนเปิด prompt แทนค่า และทดลองกับ source ของตนเอง
6. เก็บ feedback ว่าส่วนใดยังคลุมเครือหรือผูกกับเจ้าของ prompt มากเกินไป

## Scenario 2: ทำ Prompt Quality Review

### Practice 1: ตรวจ Prompt ของเพื่อน

#### Steps

1. แลก prompt กับเพื่อน
2. ห้ามขอคำอธิบายเพิ่มเติมก่อนทดลอง
3. ตรวจ 5 ด้าน: Goal, Context, Source, Output และ Quality check
4. ทำเครื่องหมายส่วนที่ต้องเดา
5. แนะนำการแก้ไขเฉพาะ context ที่จำเป็น
6. ทดลอง prompt เวอร์ชันแก้ไขอีกครั้ง

## Checkpoint

- Prompt ใช้ placeholder ที่เข้าใจได้
- ผู้ใช้อื่นสามารถใช้ prompt โดยไม่ต้องถามเจ้าของ
- Prompt ระบุ source และวิธีตรวจคุณภาพ
- ไม่บันทึกข้อมูลลูกค้า ชื่อบุคคลจริง หรือข้อมูลลับลงใน shared prompt

## Expected Output

- Prompt template ที่บันทึกใน Your Prompts
- หลักฐานการทดลองโดยผู้ใช้อีกคน
- Feedback และ prompt เวอร์ชันปรับปรุง

## Optional Extension

สร้าง prompt เพิ่มอีก 1 รายการสำหรับ Word, Excel, PowerPoint, Outlook หรือ Teams แล้วจัดเป็น mini prompt collection ของทีม

[กลับไป Lab 1](../01-context-and-response-modes/README.md) | [ไป Lab 3](../03-pages-and-notebooks/README.md)
